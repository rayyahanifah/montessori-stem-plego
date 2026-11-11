-- Run after messages_migration.sql and parent_portal_improvements.sql.
-- Tutors can read parent-to-admin conversations for their assigned classes.
-- Replies remain restricted to administrators by can_send_student_message.

BEGIN;

CREATE OR REPLACE FUNCTION public.get_teacher_message_inbox()
RETURNS TABLE(
    student_id uuid,
    student_name text,
    parent_id uuid,
    parent_name text,
    last_message text,
    last_message_at timestamptz
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, public, auth, private, pg_temp
AS $$
DECLARE
    v_email text := lower(coalesce(auth.jwt() ->> 'email', ''));
BEGIN
    IF auth.uid() IS NULL
       OR v_email IN ('rayya@plego.com', 'busabil@plego.com', 'mbaghina@plego.com')
       OR NOT EXISTS (
           SELECT 1
           FROM public.tutors AS tutor
           WHERE tutor.auth_id = auth.uid()
              OR lower(tutor.email) = v_email
       ) THEN
        RAISE EXCEPTION 'Tutor access required';
    END IF;

    RETURN QUERY
    WITH parent_conversations AS (
        SELECT DISTINCT
            student.id AS student_id,
            student.full_name AS student_name,
            parent.auth_id AS parent_id,
            parent.parent_name
        FROM public.messages AS message
        JOIN public.parents AS parent
          ON parent.student_id = message.student_id
         AND parent.auth_id = message.sender_id
        JOIN public.students AS student
          ON student.id = parent.student_id
        WHERE (
            (
                message.sender_id = parent.auth_id
                AND message.recipient_id IN (
                    SELECT admin_user.id
                    FROM auth.users AS admin_user
                    WHERE lower(admin_user.email) IN (
                        'rayya@plego.com',
                        'busabil@plego.com',
                        'mbaghina@plego.com'
                    )
                )
            )
            OR (
                message.recipient_id = parent.auth_id
                AND message.sender_id IN (
                    SELECT admin_user.id
                    FROM auth.users AS admin_user
                    WHERE lower(admin_user.email) IN (
                        'rayya@plego.com',
                        'busabil@plego.com',
                        'mbaghina@plego.com'
                    )
                )
            )
        )
          AND private.can_access_message_class(student.id)
    )
    SELECT conversation.student_id,
           conversation.student_name,
           conversation.parent_id,
           conversation.parent_name,
           latest.message,
           latest.created_at
    FROM parent_conversations AS conversation
    CROSS JOIN LATERAL (
        SELECT message.message, message.created_at
        FROM public.messages AS message
        WHERE message.student_id = conversation.student_id
          AND (
              (
                  message.sender_id = conversation.parent_id
                  AND message.recipient_id IN (
                      SELECT admin_user.id
                      FROM auth.users AS admin_user
                      WHERE lower(admin_user.email) IN (
                          'rayya@plego.com',
                          'busabil@plego.com',
                          'mbaghina@plego.com'
                      )
                  )
              )
              OR (
                  message.recipient_id = conversation.parent_id
                  AND message.sender_id IN (
                      SELECT admin_user.id
                      FROM auth.users AS admin_user
                      WHERE lower(admin_user.email) IN (
                          'rayya@plego.com',
                          'busabil@plego.com',
                          'mbaghina@plego.com'
                      )
                  )
              )
          )
        ORDER BY message.created_at DESC
        LIMIT 1
    ) AS latest
    ORDER BY latest.created_at DESC
    LIMIT 100;
END;
$$;

REVOKE ALL ON FUNCTION public.get_teacher_message_inbox() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_teacher_message_inbox() TO authenticated;

CREATE OR REPLACE FUNCTION public.get_parent_admin_message_thread(
    p_student_id uuid,
    p_parent_id uuid
)
RETURNS TABLE(
    id uuid,
    sender_id uuid,
    recipient_id uuid,
    student_id uuid,
    message text,
    created_at timestamptz
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, public, auth, private, pg_temp
AS $$
DECLARE
    v_email text := lower(coalesce(auth.jwt() ->> 'email', ''));
    v_is_admin boolean;
    v_is_assigned_tutor boolean;
BEGIN
    IF auth.uid() IS NULL OR p_student_id IS NULL OR p_parent_id IS NULL THEN
        RAISE EXCEPTION 'Authentication and conversation are required';
    END IF;

    v_is_admin := v_email IN ('rayya@plego.com', 'busabil@plego.com', 'mbaghina@plego.com');
    v_is_assigned_tutor := NOT EXISTS (
        SELECT 1
        FROM public.parents AS current_parent
        WHERE current_parent.auth_id = auth.uid()
    ) AND EXISTS (
        SELECT 1
        FROM public.tutors AS tutor
        WHERE lower(tutor.email) = v_email
          AND (tutor.auth_id IS NULL OR tutor.auth_id = auth.uid())
    ) AND private.can_access_message_class(p_student_id);

    IF NOT v_is_admin AND NOT v_is_assigned_tutor THEN
        RAISE EXCEPTION 'Administrator or assigned tutor access required';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM public.parents AS parent
        WHERE parent.student_id = p_student_id
          AND parent.auth_id = p_parent_id
    ) THEN
        RAISE EXCEPTION 'Parent is not linked to this student';
    END IF;

    RETURN QUERY
    SELECT message.id,
           message.sender_id,
           message.recipient_id,
           message.student_id,
           message.message,
           message.created_at
    FROM public.messages AS message
    WHERE message.student_id = p_student_id
      AND (
          (
              message.sender_id = p_parent_id
              AND message.recipient_id IN (
                  SELECT admin_user.id
                  FROM auth.users AS admin_user
                  WHERE lower(admin_user.email) IN (
                      'rayya@plego.com',
                      'busabil@plego.com',
                      'mbaghina@plego.com'
                  )
              )
          )
          OR (
              message.recipient_id = p_parent_id
              AND message.sender_id IN (
                  SELECT admin_user.id
                  FROM auth.users AS admin_user
                  WHERE lower(admin_user.email) IN (
                      'rayya@plego.com',
                      'busabil@plego.com',
                      'mbaghina@plego.com'
                  )
              )
          )
      )
    ORDER BY message.created_at ASC
    LIMIT 100;
END;
$$;

REVOKE ALL ON FUNCTION public.get_parent_admin_message_thread(uuid, uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_parent_admin_message_thread(uuid, uuid) TO authenticated;

COMMIT;
