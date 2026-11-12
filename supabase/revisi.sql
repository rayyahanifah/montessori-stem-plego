DROP POLICY IF EXISTS observations_tutor_manage ON public.observations;

CREATE POLICY observations_tutor_manage
    ON public.observations
    FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1
            FROM public.schedule_assignments sa
            JOIN public.tutors t ON (t.id = sa.tutor_id OR t.id = sa.assistant_tutor_id)
            WHERE sa.class_id = (SELECT class_id FROM public.students WHERE id = observations.student_id)
              AND lower(t.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
              AND NOT EXISTS (
                  SELECT 1 FROM public.parents p WHERE p.auth_id = auth.uid()
              )
        )
        OR observations.tutor_id IN (
            SELECT id FROM public.tutors WHERE lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
        )
    )
    WITH CHECK (true);

CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
    sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    recipient_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read their own messages" ON public.messages;
CREATE POLICY "Users can read their own messages"
    ON public.messages FOR SELECT
    TO authenticated
    USING (auth.uid() = sender_id OR auth.uid() = recipient_id);

DROP POLICY IF EXISTS "Users can insert messages" ON public.messages;
CREATE POLICY "Users can insert messages"
    ON public.messages FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = sender_id);