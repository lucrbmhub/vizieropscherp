
-- 1) contact_aanvragen table (mirrors columns already used in code)
CREATE TABLE IF NOT EXISTS public.contact_aanvragen (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  role text,
  message text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_aanvragen TO service_role;

ALTER TABLE public.contact_aanvragen ENABLE ROW LEVEL SECURITY;

-- No anon/authenticated policies: writes go through service role via server route.

-- 2) form_rate_limits table (stores hash of IP, never raw IP)
CREATE TABLE IF NOT EXISTS public.form_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_hash text NOT NULL,
  form_type text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS form_rate_limits_lookup_idx
  ON public.form_rate_limits (ip_hash, created_at DESC);

GRANT ALL ON public.form_rate_limits TO service_role;

ALTER TABLE public.form_rate_limits ENABLE ROW LEVEL SECURITY;

-- No anon/authenticated policies: internal use only.

-- 3) Remove direct anon INSERT access on workbook_leads (edge/server route uses service role)
DROP POLICY IF EXISTS "Anyone can submit a workbook lead" ON public.workbook_leads;
REVOKE INSERT ON public.workbook_leads FROM anon, authenticated;
