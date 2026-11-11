-- Sync the scheduling roster from Supabase Auth into the public tutors table.
-- Run in the Supabase SQL Editor with a database owner/service role.

DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'tutors'
          AND column_name = 'password'
          AND is_nullable = 'NO'
    ) THEN
        ALTER TABLE public.tutors ALTER COLUMN password DROP NOT NULL;
    END IF;
END
$$;

UPDATE public.tutors AS tutor
SET full_name = COALESCE(
    NULLIF(auth_user.raw_user_meta_data ->> 'nickname', ''),
    NULLIF(auth_user.raw_user_meta_data ->> 'name', ''),
    NULLIF(auth_user.raw_user_meta_data ->> 'full_name', ''),
    auth_user.email
)
FROM auth.users AS auth_user
WHERE lower(tutor.email) = lower(auth_user.email)
  AND lower(auth_user.email) IN (
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
  );

INSERT INTO public.tutors (id, full_name, email)
SELECT
    auth_user.id,
    COALESCE(
        NULLIF(auth_user.raw_user_meta_data ->> 'nickname', ''),
        NULLIF(auth_user.raw_user_meta_data ->> 'name', ''),
        NULLIF(auth_user.raw_user_meta_data ->> 'full_name', ''),
        auth_user.email
    ),
    lower(auth_user.email)
FROM auth.users AS auth_user
WHERE lower(auth_user.email) IN (
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
  AND NOT EXISTS (
      SELECT 1
      FROM public.tutors AS existing_tutor
      WHERE lower(existing_tutor.email) = lower(auth_user.email)
         OR existing_tutor.id = auth_user.id
  );

GRANT SELECT (id, full_name, email) ON public.tutors TO authenticated;

ALTER TABLE public.tutors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS tutors_read_own_profile ON public.tutors;
DROP POLICY IF EXISTS tutors_read_roster ON public.tutors;

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

SELECT
    auth_user.email,
    tutor.full_name,
    tutor.id IS NOT NULL AS available_for_scheduling
FROM auth.users AS auth_user
LEFT JOIN public.tutors AS tutor
    ON lower(tutor.email) = lower(auth_user.email)
WHERE lower(auth_user.email) IN (
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
ORDER BY auth_user.email;
