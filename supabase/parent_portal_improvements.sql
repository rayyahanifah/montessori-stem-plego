-- Run after messages_migration.sql in the Supabase SQL Editor.
BEGIN;

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
        SELECT DISTINCT ON (p.auth_id)
            p.auth_id,
            p.parent_name,
            'parent'::text
        FROM public.parents AS p
        WHERE p.student_id = p_student_id
          AND p.auth_id IS NOT NULL
        ORDER BY p.auth_id, p.parent_name;
        RETURN;
    END IF;

    RAISE EXCEPTION 'You cannot access message contacts for this student';
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
            SELECT 1
            FROM public.parents AS p
            WHERE p.student_id = p_student_id
              AND p.auth_id = p_recipient_id
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

CREATE OR REPLACE FUNCTION public.get_admin_message_inbox()
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
SET search_path = pg_catalog, public, auth, pg_temp
AS $$
BEGIN
    IF auth.uid() IS NULL OR lower(coalesce(auth.jwt() ->> 'email', '')) NOT IN (
        'rayya@plego.com',
        'busabil@plego.com',
        'mbaghina@plego.com'
    ) THEN
        RAISE EXCEPTION 'Administrator access required';
    END IF;

    RETURN QUERY
    SELECT inbox.student_id, inbox.student_name, inbox.parent_id,
           inbox.parent_name, inbox.last_message, inbox.last_message_at
    FROM (
        SELECT DISTINCT ON (p.student_id, p.auth_id)
            s.id AS student_id,
            s.full_name AS student_name,
            p.auth_id AS parent_id,
            p.parent_name,
            m.message AS last_message,
            m.created_at AS last_message_at
        FROM public.messages AS m
        JOIN public.parents AS p
          ON p.student_id = m.student_id
         AND p.auth_id IN (m.sender_id, m.recipient_id)
        JOIN public.students AS s ON s.id = p.student_id
        ORDER BY p.student_id, p.auth_id, m.created_at DESC
    ) AS inbox
    ORDER BY inbox.last_message_at DESC
    LIMIT 100;
END;
$$;

REVOKE ALL ON FUNCTION public.get_message_contacts(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_message_contacts(uuid) TO authenticated;
REVOKE ALL ON FUNCTION private.can_send_student_message(uuid, uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.can_send_student_message(uuid, uuid) TO authenticated;
REVOKE ALL ON FUNCTION public.get_admin_message_inbox() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_admin_message_inbox() TO authenticated;

ALTER TABLE public.observations
    ADD COLUMN IF NOT EXISTS photo_path text;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'student-observation-photos',
    'student-observation-photos',
    false,
    8388608,
    ARRAY['image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO UPDATE
SET public = false,
    file_size_limit = 8388608,
    allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp'];

DROP POLICY IF EXISTS student_observation_photos_read ON storage.objects;
CREATE POLICY student_observation_photos_read
    ON storage.objects
    FOR SELECT
    TO authenticated
    USING (
        bucket_id = 'student-observation-photos'
        AND (
            lower(coalesce(auth.jwt() ->> 'email', '')) IN (
                'rayya@plego.com',
                'busabil@plego.com',
                'mbaghina@plego.com'
            )
            OR EXISTS (
                SELECT 1
                FROM public.students AS s
                WHERE s.id::text = split_part(storage.objects.name, '/', 1)
                  AND (
                      EXISTS (
                          SELECT 1
                          FROM public.parents AS p
                          WHERE p.student_id = s.id
                            AND p.auth_id = auth.uid()
                      )
                      OR private.can_access_message_class(s.id)
                  )
              )
        )
    );

DROP POLICY IF EXISTS student_observation_photos_insert ON storage.objects;
CREATE POLICY student_observation_photos_insert
    ON storage.objects
    FOR INSERT
    TO authenticated
    WITH CHECK (
        bucket_id = 'student-observation-photos'
        AND split_part(storage.objects.name, '/', 2) = auth.uid()::text
        AND EXISTS (
            SELECT 1
            FROM public.students AS s
            WHERE s.id::text = split_part(storage.objects.name, '/', 1)
              AND private.can_access_message_class(s.id)
        )
    );

DROP POLICY IF EXISTS student_observation_photos_delete ON storage.objects;
CREATE POLICY student_observation_photos_delete
    ON storage.objects
    FOR DELETE
    TO authenticated
    USING (
        bucket_id = 'student-observation-photos'
        AND (
            lower(coalesce(auth.jwt() ->> 'email', '')) IN (
                'rayya@plego.com',
                'busabil@plego.com',
                'mbaghina@plego.com'
            )
            OR (
                split_part(storage.objects.name, '/', 2) = auth.uid()::text
                AND EXISTS (
                    SELECT 1
                    FROM public.students AS s
                    WHERE s.id::text = split_part(storage.objects.name, '/', 1)
                      AND private.can_access_message_class(s.id)
                )
            )
        )
    );

CREATE OR REPLACE FUNCTION public.admin_delete_student(p_student_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public, auth, pg_temp
AS $$
DECLARE
    v_deleted_count integer;
BEGIN
    IF auth.uid() IS NULL OR lower(coalesce(auth.jwt() ->> 'email', '')) NOT IN (
        'rayya@plego.com',
        'busabil@plego.com',
        'mbaghina@plego.com'
    ) THEN
        RAISE EXCEPTION 'Administrator access required';
    END IF;

    DELETE FROM public.messages WHERE student_id = p_student_id;
    DELETE FROM public.observations WHERE student_id = p_student_id;
    DELETE FROM public.parents WHERE student_id = p_student_id;
    DELETE FROM public.students WHERE id = p_student_id;
    GET DIAGNOSTICS v_deleted_count = ROW_COUNT;

    IF v_deleted_count = 0 THEN
        RAISE EXCEPTION 'Student not found';
    END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_delete_student(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.admin_delete_student(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION private.can_access_weekly_material_scope(p_scope_key text)
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

    IF v_email IN ('rayya@plego.com', 'busabil@plego.com', 'mbaghina@plego.com') THEN
        RETURN true;
    END IF;

    IF p_scope_key = 'all' THEN
        RETURN EXISTS (
            SELECT 1
            FROM public.tutors AS t
            JOIN public.schedule_assignments AS sa
              ON t.id IN (sa.tutor_id, sa.assistant_tutor_id)
            WHERE t.auth_id = auth.uid()
        );
    END IF;

    BEGIN
        v_class_id := p_scope_key::uuid;
    EXCEPTION WHEN invalid_text_representation THEN
        RETURN false;
    END;

    RETURN EXISTS (
        SELECT 1
        FROM public.tutors AS t
        JOIN public.schedule_assignments AS sa
          ON sa.class_id = v_class_id
         AND t.id IN (sa.tutor_id, sa.assistant_tutor_id)
        WHERE t.auth_id = auth.uid()
    );
END;
$$;

REVOKE ALL ON FUNCTION private.can_access_weekly_material_scope(text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.can_access_weekly_material_scope(text) TO authenticated;

CREATE TABLE IF NOT EXISTS public.weekly_material_checks (
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    scope_key text NOT NULL,
    week_start date NOT NULL,
    material text NOT NULL CHECK (char_length(btrim(material)) BETWEEN 1 AND 200),
    is_checked boolean NOT NULL DEFAULT false,
    updated_at timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (user_id, scope_key, week_start, material)
);

ALTER TABLE public.weekly_material_checks ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.weekly_material_checks FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.weekly_material_checks TO authenticated;

DROP POLICY IF EXISTS weekly_material_checks_manage_own ON public.weekly_material_checks;
CREATE POLICY weekly_material_checks_manage_own
    ON public.weekly_material_checks
    FOR ALL
    TO authenticated
    USING (
        user_id = auth.uid()
        AND private.can_access_weekly_material_scope(scope_key)
    )
    WITH CHECK (
        user_id = auth.uid()
        AND private.can_access_weekly_material_scope(scope_key)
    );

COMMIT;
