# Supabase keep-alive (Cloudflare Worker)

Een piepkleine Cloudflare Worker die je Supabase-database **elke dag om 06:17 UTC**
een lichte ping geeft, zodat je gratis project niet na 7 dagen inactiviteit pauzeert.

Cloudflare-crons zijn betrouwbaar (in tegenstelling tot geplande GitHub Actions),
en alles draait onder je eigen Cloudflare-account — geen externe dienst nodig.

Er zijn twee manieren om dit live te zetten. **Manier A (dashboard)** is het
makkelijkst en vereist niets op je computer. **Manier B (command line)** gebruikt
de bestanden in deze map.

---

## Manier A — Via het Cloudflare-dashboard (geen installatie nodig)

1. Ga naar **dash.cloudflare.com** -> in het linkermenu **Workers & Pages**.
2. Klik **Create application** -> **Create Worker**. Geef 'm de naam
   `vizieropscherp-keepalive` en klik **Deploy** (de standaard "Hello World" is prima).
3. Klik **Edit code**. Verwijder alles en plak de volledige inhoud van
   `src/index.js` uit deze map. Klik **Deploy**.
4. Ga naar het tabblad **Settings** -> **Variables and Secrets** en voeg twee
   variabelen toe (type: Plaintext):
   - `SUPABASE_URL` = `https://xratufshchqotwzhbwkz.supabase.co`
   - `SUPABASE_ANON_KEY` = `sb_publishable_ERVbe8qjSLIr8BKkh2XdHg_kT8jK2qy`

   Klik **Deploy** / **Save** om op te slaan.
5. Ga naar **Settings** -> **Triggers** -> **Cron Triggers** -> **Add Cron Trigger**
   en vul in: `17 6 * * *` (elke dag om 06:17 UTC). Opslaan.

**Testen:** open de Worker-URL (te vinden bovenaan de Worker-pagina, eindigt op
`.workers.dev`) in je browser. Je hoort te zien: `Keep-alive OK: HTTP 200`.

---

## Manier B — Via de command line (Wrangler)

Vereist Node.js op je computer en dat je bent ingelogd bij Cloudflare.

    cd keepalive-worker
    npx wrangler login      # eenmalig: opent je browser om in te loggen
    npx wrangler deploy     # zet de Worker + het cron-schema live

De URL, sleutel en het cron-schema staan al in `wrangler.toml` —
je hoeft niets extra's in te stellen.

**Testen:**

    npx wrangler tail       # live logs bekijken

of open de `.workers.dev`-URL die na `deploy` wordt getoond in je browser.

---

## Overstappen naar een andere Supabase?

Pas dan alleen `SUPABASE_URL` en `SUPABASE_ANON_KEY` aan naar die van het andere
project (in `wrangler.toml` bij manier B, of in het dashboard bij manier A) en
deploy opnieuw. Verder verandert er niets.

## Waarom is die sleutel veilig om hier te delen?

`SUPABASE_ANON_KEY` is de publieke (anon/publishable) sleutel. Die zit sowieso al
in de client-side code van je website. De data blijft beschermd door Row Level
Security in Supabase — met deze sleutel kan niemand bij je gegevens.
