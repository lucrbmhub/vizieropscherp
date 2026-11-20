CREATE TABLE public.talentenscan_tellingen (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  gebeurtenis text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.talentenscan_tellingen TO anon, authenticated;
GRANT ALL ON public.talentenscan_tellingen TO service_role;
ALTER TABLE public.talentenscan_tellingen ENABLE ROW LEVEL SECURITY;
CREATE POLICY "talentenscan_tellingen_anon_insert" ON public.talentenscan_tellingen FOR INSERT TO anon WITH CHECK (gebeurtenis IN ('gestart', 'afgerond'));
CREATE POLICY "talentenscan_tellingen_authenticated_insert" ON public.talentenscan_tellingen FOR INSERT TO authenticated WITH CHECK (gebeurtenis IN ('gestart', 'afgerond'));