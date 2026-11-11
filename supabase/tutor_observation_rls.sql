-- Run after policy.sql and messages_migration.sql.
-- Tutors may manage observations for students in classes where they are
-- assigned as the primary or assistant tutor on a schedule.

BEGIN;

CREATE OR REPLACE FUNCTION private.can_manage_student_observation(
    p_student_id uuid,
    p_tutor_id uuid
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, public, auth, pg_temp
AS $$
    SELECT auth.uid() IS NOT NULL
       AND p_student_id IS NOT NULL
       AND p_tutor_id IS NOT NULL
       AND NOT EXISTS (
           SELECT 1
           FROM public.parents AS parent
           WHERE parent.auth_id = auth.uid()
       )
       AND EXISTS (
           SELECT 1
           FROM public.tutors AS tutor
           JOIN public.students AS student
             ON student.id = p_student_id
           JOIN public.schedule_assignments AS assignment
             ON assignment.class_id = student.class_id
            AND tutor.id IN (assignment.tutor_id, assignment.assistant_tutor_id)
           WHERE tutor.id = p_tutor_id
             AND lower(tutor.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
             AND (tutor.auth_id IS NULL OR tutor.auth_id = auth.uid())
       );
$$;

REVOKE ALL ON FUNCTION private.can_manage_student_observation(uuid, uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.can_manage_student_observation(uuid, uuid) TO authenticated;

DROP POLICY IF EXISTS observations_tutor_manage ON public.observations;
DROP POLICY IF EXISTS observations_tutor_read_class ON public.observations;
DROP POLICY IF EXISTS observations_tutor_insert ON public.observations;
DROP POLICY IF EXISTS observations_tutor_update ON public.observations;
DROP POLICY IF EXISTS observations_tutor_delete ON public.observations;

CREATE POLICY observations_tutor_read_class
    ON public.observations
    FOR SELECT
    TO authenticated
    USING (
        private.can_access_message_class(student_id)
        AND NOT EXISTS (
            SELECT 1
            FROM public.parents AS parent
            WHERE parent.auth_id = auth.uid()
        )
    );

CREATE POLICY observations_tutor_insert
    ON public.observations
    FOR INSERT
    TO authenticated
    WITH CHECK (
        private.can_manage_student_observation(student_id, tutor_id)
    );

CREATE POLICY observations_tutor_update
    ON public.observations
    FOR UPDATE
    TO authenticated
    USING (
        private.can_manage_student_observation(student_id, tutor_id)
    )
    WITH CHECK (
        private.can_manage_student_observation(student_id, tutor_id)
    );

CREATE POLICY observations_tutor_delete
    ON public.observations
    FOR DELETE
    TO authenticated
    USING (
        private.can_manage_student_observation(student_id, tutor_id)
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
            FROM public.students AS student
            WHERE student.id::text = split_part(storage.objects.name, '/', 1)
              AND (
                  lower(coalesce(auth.jwt() ->> 'email', '')) IN (
                      'rayya@plego.com',
                      'busabil@plego.com',
                      'mbaghina@plego.com'
                  )
                  OR EXISTS (
                      SELECT 1
                      FROM public.tutors AS tutor
                      WHERE lower(tutor.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
                        AND (tutor.auth_id IS NULL OR tutor.auth_id = auth.uid())
                        AND private.can_manage_student_observation(student.id, tutor.id)
                  )
              )
        )
    );

COMMIT;
