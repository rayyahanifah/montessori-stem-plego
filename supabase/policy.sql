-- Apply after confirming the three administrator emails below.
-- Tutors are linked to Supabase Auth by matching tutors.email to the JWT email.
-- Tutors can read class/student records but cannot modify student profiles or
-- core curriculum. Schedule changes are limited to assignments containing
-- their own tutor ID; parents only read records linked to auth.uid().

ALTER TABLE public.parents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tutors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curriculum_units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.schedule_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.observations ENABLE ROW LEVEL SECURITY;

-- Do not expose the legacy tutors.password column through the client API.
REVOKE ALL ON public.tutors FROM PUBLIC, anon, authenticated;
GRANT SELECT (id, full_name, email) ON public.tutors TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.tutors TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE
    ON public.parents, public.students, public.classes, public.schools,
       public.curriculum_units, public.schedule_assignments, public.observations
    TO authenticated;

DROP POLICY IF EXISTS "Parents can view own profile" ON public.parents;
DROP POLICY IF EXISTS "Parents can view their own children" ON public.students;
DROP POLICY IF EXISTS "Admins and Rayya full access students" ON public.students;
DROP POLICY IF EXISTS "Tutors can view classes and students" ON public.students;
DROP POLICY IF EXISTS "Admins and Rayya full access classes" ON public.classes;
DROP POLICY IF EXISTS "Tutors can manage observations or activities" ON public.observations;
DROP POLICY IF EXISTS parents_select_linked_account ON public.parents;
DROP POLICY IF EXISTS parents_admin_manage ON public.parents;
DROP POLICY IF EXISTS students_admin_manage ON public.students;
DROP POLICY IF EXISTS students_parent_read_linked ON public.students;
DROP POLICY IF EXISTS students_tutor_read_roster ON public.students;
DROP POLICY IF EXISTS classes_admin_manage ON public.classes;
DROP POLICY IF EXISTS classes_parent_read_linked ON public.classes;
DROP POLICY IF EXISTS classes_tutor_read_all ON public.classes;
DROP POLICY IF EXISTS schools_admin_manage ON public.schools;
DROP POLICY IF EXISTS schools_parent_read_linked ON public.schools;
DROP POLICY IF EXISTS schools_tutor_read_all ON public.schools;
DROP POLICY IF EXISTS tutors_admin_manage ON public.tutors;
DROP POLICY IF EXISTS tutors_read_own_profile ON public.tutors;
DROP POLICY IF EXISTS tutors_read_roster ON public.tutors;
DROP POLICY IF EXISTS curriculum_authenticated_read ON public.curriculum_units;
DROP POLICY IF EXISTS curriculum_admin_manage ON public.curriculum_units;
DROP POLICY IF EXISTS schedules_admin_manage ON public.schedule_assignments;
DROP POLICY IF EXISTS schedules_tutor_manage_assigned ON public.schedule_assignments;
DROP POLICY IF EXISTS schedules_parent_read_linked ON public.schedule_assignments;
DROP POLICY IF EXISTS observations_admin_manage ON public.observations;
DROP POLICY IF EXISTS observations_tutor_manage ON public.observations;
DROP POLICY IF EXISTS observations_parent_read_linked ON public.observations;

CREATE POLICY parents_select_linked_account
    ON public.parents
    FOR SELECT
    TO authenticated
    USING (auth_id = auth.uid());

CREATE POLICY parents_admin_manage
    ON public.parents
    FOR ALL
    TO authenticated
    USING (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    )
    WITH CHECK (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    );

CREATE POLICY students_admin_manage
    ON public.students
    FOR ALL
    TO authenticated
    USING (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    )
    WITH CHECK (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    );

CREATE POLICY students_parent_read_linked
    ON public.students
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.parents p
            WHERE p.student_id = students.id
              AND p.auth_id = auth.uid()
        )
    );

CREATE POLICY students_tutor_read_roster
    ON public.students
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.tutors t
            WHERE lower(t.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
              AND NOT EXISTS (
                  SELECT 1 FROM public.parents p WHERE p.auth_id = auth.uid()
              )
        )
    );

CREATE POLICY classes_admin_manage
    ON public.classes
    FOR ALL
    TO authenticated
    USING (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    )
    WITH CHECK (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    );

CREATE POLICY classes_parent_read_linked
    ON public.classes
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.students s
            JOIN public.parents p ON p.student_id = s.id
            WHERE s.class_id = classes.id
              AND p.auth_id = auth.uid()
        )
    );

CREATE POLICY classes_tutor_read_all
    ON public.classes
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.tutors t
            WHERE lower(t.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
              AND NOT EXISTS (
                  SELECT 1 FROM public.parents p WHERE p.auth_id = auth.uid()
              )
        )
    );

CREATE POLICY schools_admin_manage
    ON public.schools
    FOR ALL
    TO authenticated
    USING (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    )
    WITH CHECK (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    );

CREATE POLICY schools_parent_read_linked
    ON public.schools
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.classes c
            JOIN public.students s ON s.class_id = c.id
            JOIN public.parents p ON p.student_id = s.id
            WHERE c.school_id = schools.id
              AND p.auth_id = auth.uid()
        )
    );

CREATE POLICY schools_tutor_read_all
    ON public.schools
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.tutors t
            WHERE lower(t.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
              AND NOT EXISTS (
                  SELECT 1 FROM public.parents p WHERE p.auth_id = auth.uid()
              )
        )
    );

CREATE POLICY tutors_admin_manage
    ON public.tutors
    FOR ALL
    TO authenticated
    USING (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    )
    WITH CHECK (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    );

CREATE POLICY tutors_read_roster
    ON public.tutors
    FOR SELECT
    TO authenticated
    USING (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN (
            'tata@plego.com',
            'karin@plego.com',
            'rina@plego.com',
            'nadhiyaa@plego.com',
            'aca@plego.com',
            'syifa@plego.com',
            'alyana@plego.com',
            'devina@plego.com',
            'ai@plego.com',
            'oliv@plego.com',
            'rara@plego.com',
            'desti@plego.com',
            'astria@plego.com',
            'rayya@plego.com',
            'busabil@plego.com',
            'mbaghina@plego.com'
        )
    );

CREATE POLICY curriculum_authenticated_read
    ON public.curriculum_units
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY curriculum_admin_manage
    ON public.curriculum_units
    FOR ALL
    TO authenticated
    USING (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    )
    WITH CHECK (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    );

CREATE POLICY schedules_admin_manage
    ON public.schedule_assignments
    FOR ALL
    TO authenticated
    USING (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    )
    WITH CHECK (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    );

CREATE POLICY schedules_tutor_manage_assigned
    ON public.schedule_assignments
    FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.tutors t
            WHERE lower(t.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
              AND t.id IN (schedule_assignments.tutor_id, schedule_assignments.assistant_tutor_id)
              AND NOT EXISTS (
                  SELECT 1 FROM public.parents p WHERE p.auth_id = auth.uid()
              )
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1
            FROM public.tutors t
            WHERE lower(t.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
              AND t.id IN (schedule_assignments.tutor_id, schedule_assignments.assistant_tutor_id)
              AND NOT EXISTS (
                  SELECT 1 FROM public.parents p WHERE p.auth_id = auth.uid()
              )
        )
    );

CREATE POLICY schedules_parent_read_linked
    ON public.schedule_assignments
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.students s
            JOIN public.parents p ON p.student_id = s.id
            WHERE s.class_id = schedule_assignments.class_id
              AND p.auth_id = auth.uid()
        )
    );

CREATE POLICY observations_admin_manage
    ON public.observations
    FOR ALL
    TO authenticated
    USING (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    )
    WITH CHECK (
        lower(coalesce(auth.jwt() ->> 'email', '')) IN
            ('rayya@plego.com', 'bu.sabil@plego.com', 'mbaghina@plego.com')
    );

CREATE POLICY observations_tutor_manage
    ON public.observations
    FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.tutors t
            WHERE lower(t.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
              AND t.id = observations.tutor_id
              AND NOT EXISTS (
                  SELECT 1 FROM public.parents p WHERE p.auth_id = auth.uid()
              )
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1
            FROM public.tutors t
            WHERE lower(t.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
              AND t.id = observations.tutor_id
              AND NOT EXISTS (
                  SELECT 1 FROM public.parents p WHERE p.auth_id = auth.uid()
              )
        )
    );

CREATE POLICY observations_parent_read_linked
    ON public.observations
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.parents p
            WHERE p.student_id = observations.student_id
              AND p.auth_id = auth.uid()
        )
    );
