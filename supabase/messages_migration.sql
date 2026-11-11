-- Run in the Supabase SQL Editor as a database owner.
-- Tutors are linked to Auth UUIDs without changing existing tutor IDs used by schedules.

BEGIN;

CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon;
GRANT USAGE ON SCHEMA private TO authenticated;

ALTER TABLE public.tutors
    ADD COLUMN IF NOT EXISTS auth_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;

UPDATE public.tutors AS tutor
SET auth_id = auth_user.id
FROM auth.users AS auth_user
WHERE lower(tutor.email) = lower(auth_user.email)
  AND tutor.auth_id IS DISTINCT FROM auth_user.id;

CREATE TABLE IF NOT EXISTS public.messages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    recipient_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    student_id uuid NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
    message text NOT NULL CHECK (char_length(btrim(message)) BETWEEN 1 AND 2000),
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS messages_student_created_idx
    ON public.messages (student_id, created_at);
CREATE INDEX IF NOT EXISTS messages_sender_created_idx
    ON public.messages (sender_id, created_at);
CREATE INDEX IF NOT EXISTS messages_recipient_created_idx
    ON public.messages (recipient_id, created_at);

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.messages FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT ON public.messages TO authenticated;

CREATE OR REPLACE FUNCTION private.can_access_message_class(p_student_id uuid)
RETURNS boolean
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, public, auth, pg_temp
AS $$
DECLARE
    v_email text := lower(coalesce(auth.jwt() ->> 'email', ''));
    v_class_id uuid;
BEGIN
    IF auth.uid() IS NULL THEN
        RETURN false;
    END IF;

    SELECT s.class_id
    INTO v_class_id
    FROM public.students AS s
    WHERE s.id = p_student_id;

    IF NOT FOUND THEN
        RETURN false;
    END IF;

    IF v_email IN ('rayya@plego.com', 'busabil@plego.com', 'mbaghina@plego.com') THEN
        RETURN true;
    END IF;

    RETURN EXISTS (
        SELECT 1
        FROM public.tutors AS t
        JOIN public.schedule_assignments AS sa
          ON sa.class_id = v_class_id
         AND t.id IN (sa.tutor_id, sa.assistant_tutor_id)
        WHERE lower(t.email) = v_email
    );
END;
$$;

CREATE OR REPLACE FUNCTION private.can_send_student_message(
    p_student_id uuid,
    p_recipient_id uuid
)
RETURNS boolean
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, public, auth, pg_temp
AS $$
DECLARE
    v_email text := lower(coalesce(auth.jwt() ->> 'email', ''));
    v_class_id uuid;
BEGIN
    IF auth.uid() IS NULL OR p_recipient_id IS NULL OR p_recipient_id = auth.uid() THEN
        RETURN false;
    END IF;

    SELECT s.class_id
    INTO v_class_id
    FROM public.students AS s
    WHERE s.id = p_student_id;

    IF NOT FOUND THEN
        RETURN false;
    END IF;

    IF EXISTS (
        SELECT 1
        FROM public.parents AS p
        WHERE p.student_id = p_student_id
          AND p.auth_id = auth.uid()
    ) THEN
        RETURN EXISTS (
            SELECT 1
            FROM auth.users AS admin_user
            WHERE admin_user.id = p_recipient_id
              AND lower(admin_user.email) IN (
                  'rayya@plego.com',
                  'busabil@plego.com',
                  'mbaghina@plego.com'
              )
        );
    END IF;

    IF v_email IN ('rayya@plego.com', 'busabil@plego.com', 'mbaghina@plego.com') THEN
        RETURN EXISTS (
            SELECT 1 FROM public.parents AS p
            WHERE p.student_id = p_student_id
              AND p.auth_id = p_recipient_id
        ) OR EXISTS (
            SELECT 1
            FROM public.tutors AS t
            JOIN public.schedule_assignments AS sa
              ON sa.class_id = v_class_id
             AND t.id IN (sa.tutor_id, sa.assistant_tutor_id)
            WHERE t.auth_id = p_recipient_id
        );
    END IF;

    IF private.can_access_message_class(p_student_id) THEN
        RETURN EXISTS (
            SELECT 1
            FROM public.parents AS p
            WHERE p.student_id = p_student_id
              AND p.auth_id = p_recipient_id
        );
    END IF;

    RETURN false;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_message_contacts(p_student_id uuid)
RETURNS TABLE(contact_id uuid, contact_name text, contact_role text)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, public, auth, pg_temp
AS $$
DECLARE
    v_class_id uuid;
BEGIN
    IF auth.uid() IS NULL THEN
        RAISE EXCEPTION 'Authentication required';
    END IF;

    SELECT s.class_id
    INTO v_class_id
    FROM public.students AS s
    WHERE s.id = p_student_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Student is not available';
    END IF;

    IF EXISTS (
        SELECT 1
        FROM public.parents AS p
        WHERE p.student_id = p_student_id
          AND p.auth_id = auth.uid()
    ) THEN
        RETURN QUERY
        SELECT
            admin_user.id,
            coalesce(
                nullif(admin_user.raw_user_meta_data ->> 'nickname', ''),
                nullif(admin_user.raw_user_meta_data ->> 'name', ''),
                initcap(split_part(admin_user.email, '@', 1))
            ),
            'admin'::text
        FROM auth.users AS admin_user
        WHERE lower(admin_user.email) IN (
            'rayya@plego.com',
            'busabil@plego.com',
            'mbaghina@plego.com'
        )
        ORDER BY lower(admin_user.email);
        RETURN;
    END IF;

    IF private.can_access_message_class(p_student_id) THEN
        RETURN QUERY
        SELECT contacts.contact_id, contacts.contact_name, contacts.contact_role
        FROM (
            SELECT DISTINCT ON (p.auth_id)
                p.auth_id AS contact_id,
                p.parent_name AS contact_name,
                'parent'::text AS contact_role
            FROM public.parents AS p
            WHERE p.student_id = p_student_id
              AND p.auth_id IS NOT NULL
            ORDER BY p.auth_id, p.parent_name
        ) AS contacts
        ORDER BY contacts.contact_name;
        RETURN;
    END IF;

    RAISE EXCEPTION 'You cannot access message contacts for this student';
END;
$$;

REVOKE ALL ON FUNCTION private.can_access_message_class(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION private.can_send_student_message(uuid, uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_message_contacts(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.can_access_message_class(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION private.can_send_student_message(uuid, uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_message_contacts(uuid) TO authenticated;

DROP POLICY IF EXISTS messages_read_participant_or_class ON public.messages;
DROP POLICY IF EXISTS messages_send_to_student_contact ON public.messages;

CREATE POLICY messages_read_participant_or_class
    ON public.messages
    FOR SELECT
    TO authenticated
    USING (
        (
            (sender_id = auth.uid() OR recipient_id = auth.uid())
            AND EXISTS (
                SELECT 1
                FROM public.parents AS p
                WHERE p.student_id = messages.student_id
                  AND p.auth_id = auth.uid()
            )
        )
        OR (
            private.can_access_message_class(student_id)
            AND (
                lower(coalesce(auth.jwt() ->> 'email', '')) IN (
                    'rayya@plego.com',
                    'busabil@plego.com',
                    'mbaghina@plego.com'
                )
                OR NOT EXISTS (
                    SELECT 1
                    FROM public.parents AS p
                    WHERE p.auth_id = auth.uid()
                )
            )
        )
    );

CREATE POLICY messages_send_to_student_contact
    ON public.messages
    FOR INSERT
    TO authenticated
    WITH CHECK (
        sender_id = auth.uid()
        AND private.can_send_student_message(student_id, recipient_id)
    );

COMMIT;
