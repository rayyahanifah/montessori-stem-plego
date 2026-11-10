-- Non-destructive parent/Auth and parent/student mapping.
CREATE TABLE IF NOT EXISTS public.parents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
    parent_name TEXT NOT NULL,
    phone_number TEXT DEFAULT '081234567890',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    auth_id UUID REFERENCES auth.users(id) ON DELETE CASCADE
);

ALTER TABLE public.parents
    ADD COLUMN IF NOT EXISTS auth_id UUID;

ALTER TABLE public.parents
    ADD COLUMN IF NOT EXISTS student_id UUID;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint
        WHERE conrelid = 'public.parents'::regclass
          AND conname = 'parents_auth_id_fkey'
    ) THEN
        ALTER TABLE public.parents
            ADD CONSTRAINT parents_auth_id_fkey
            FOREIGN KEY (auth_id) REFERENCES auth.users(id) ON DELETE CASCADE;
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint
        WHERE conrelid = 'public.parents'::regclass
          AND conname = 'parents_student_id_fkey'
    ) THEN
        ALTER TABLE public.parents
            ADD CONSTRAINT parents_student_id_fkey
            FOREIGN KEY (student_id) REFERENCES public.students(id) ON DELETE CASCADE;
    END IF;
END $$;

CREATE INDEX IF NOT EXISTS parents_auth_id_idx
    ON public.parents(auth_id);

CREATE INDEX IF NOT EXISTS parents_student_id_idx
    ON public.parents(student_id);

ALTER TABLE public.parents ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS parents_select_linked_account ON public.parents;
CREATE POLICY parents_select_linked_account
    ON public.parents
    FOR SELECT
    TO authenticated
    USING (auth_id = auth.uid());

-- This does not enable row-level security on students, observations, or other
-- application tables. The current tutor client uses the anon key, so protecting
-- those tables requires migrating tutor auth as well; frontend filtering alone
-- is not a database security boundary.
