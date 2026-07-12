CREATE TABLE public.workbook_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  workbook_slug TEXT NOT NULL,
  name TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.workbook_leads TO anon, authenticated;
GRANT ALL ON public.workbook_leads TO service_role;
ALTER TABLE public.workbook_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a workbook lead"
  ON public.workbook_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(email) BETWEEN 3 AND 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND workbook_slug IN ('richting-scherp','werken-vinden-via-mensen','aan-het-roer','loopbaangesprek-leidraad')
  );
CREATE INDEX workbook_leads_created_at_idx ON public.workbook_leads (created_at DESC);
CREATE INDEX workbook_leads_email_idx ON public.workbook_leads (lower(email));