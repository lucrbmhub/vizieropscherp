// Cloudflare Worker die de Supabase-database wakker houdt.
//
// Waarom: op het gratis Supabase-plan wordt een project na ~7 dagen zonder
// activiteit automatisch gepauzeerd. Deze Worker doet elke dag een lichte
// API-request naar het project. Dat telt als activiteit en reset de
// inactiviteits-teller, zodat de database actief blijft.
//
// Het schema staat in wrangler.toml (Cron Trigger). Cloudflare-crons zijn
// betrouwbaar, in tegenstelling tot geplande GitHub Actions.

async function ping(env) {
  const url = `${env.SUPABASE_URL}/rest/v1/contact_aanvragen?select=id&limit=1`;
  const res = await fetch(url, {
    headers: { apikey: env.SUPABASE_ANON_KEY },
  });
  if (!res.ok) {
    throw new Error(`ping faalde: HTTP ${res.status}`);
  }
  return res.status;
}

export default {
  // Wordt automatisch aangeroepen door de Cron Trigger uit wrangler.toml.
  async scheduled(event, env, ctx) {
    ctx.waitUntil(
      ping(env)
        .then((status) => console.log(`Keep-alive OK: HTTP ${status}`))
        .catch((err) => console.error(`Keep-alive FOUT: ${err.message}`)),
    );
  },

  // Handig om handmatig te testen: open de Worker-URL in je browser.
  // Verwacht antwoord: "Keep-alive OK: HTTP 200".
  async fetch(request, env) {
    try {
      const status = await ping(env);
      return new Response(`Keep-alive OK: HTTP ${status}\n`, { status: 200 });
    } catch (err) {
      return new Response(`Keep-alive FOUT: ${err.message}\n`, { status: 500 });
    }
  },
};
