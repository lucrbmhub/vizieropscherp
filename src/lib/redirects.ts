const CANONICAL_HOST = "vizieropscherp.nl";

const LEGACY: Record<string, string> = {
  "/contact": "/kennismaken",
  "/aanmelden": "/kennismaken",
  "/klantervaringen": "/over-ons",
  "/uwv-trajecten": "/uwv-traject",
  "/loopbaanbegeleiding": "/coaching-voor-mij",
  "/page_category/loopbaanbegeleiding": "/coaching-voor-mij",
  "/uitblinken": "/coaching-voor-mij",
  "/module-ontdekken": "/coaching-voor-mij",
  "/module-samen": "/coaching-voor-mij",
  "/workshop-zingeving": "/coaching-voor-mij",
  "/discovery-workshop": "/coaching-voor-mij",
  "/incompany-training": "/voor-werkgevers",
  "/bedrijfstrainingen": "/voor-werkgevers",
  "/homepage": "/",
  "/home-nieuw": "/",
  "/homepage-3": "/",
  "/blogs-2": "/inzichten",
};

const SKIP_PREFIXES = ["/assets/", "/api/", "/.well-known/", "/mcp"];

/** Geeft het doeladres voor een 301 terug, of null als er niet doorverwezen hoeft te worden. */
export function getRedirect(href: string, host: string): string | null {
  const url = new URL(href);
  const hostname = host.split(":")[0].toLowerCase();
  const isWww = hostname === `www.${CANONICAL_HOST}`;
  const path = url.pathname;
  let target = path;

  if (!SKIP_PREFIXES.some((p) => path.startsWith(p))) {
    if (target.length > 1) target = target.replace(/\/+$/, "") || "/";
    const key = target.toLowerCase();
    if (LEGACY[key]) target = LEGACY[key];
    else if (key.startsWith("/blogs-2/")) target = "/inzichten";
  }

  if (!isWww && target === path) return null;
  const origin = isWww ? `https://${CANONICAL_HOST}` : `${url.protocol}//${host}`;
  return `${origin}${target}${url.search}`;
}
