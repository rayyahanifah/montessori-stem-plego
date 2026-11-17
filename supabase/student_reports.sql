-- ============================================================
-- PLEGO MONTESSORI STEM PLATFORM
-- Migration: Student Reports (Jurnal Belajar / Rapor Ekstrakurikuler)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.student_reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id UUID NOT NULL,
    term TEXT DEFAULT 'Semester Gasal 2026/2027',
    learning_objectives TEXT[],
    skill_ratings JSONB,
    development_notes TEXT,
    attendance_percentage TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.student_reports ENABLE ROW LEVEL SECURITY;

-- Safe Policy creation for student_reports (Compatible across PostgreSQL versions)
DROP POLICY IF EXISTS student_reports_all_access ON public.student_reports;
CREATE POLICY student_reports_all_access ON public.student_reports
    FOR ALL USING (true) WITH CHECK (true);

-- Ensure fast lookup and unique constraint per student and term for upsert operations
CREATE UNIQUE INDEX IF NOT EXISTS student_reports_student_term_idx 
    ON public.student_reports (student_id, term);

-- Grant appropriate permissions to authenticated and anon roles
GRANT ALL ON public.student_reports TO anon, authenticated, service_role;
