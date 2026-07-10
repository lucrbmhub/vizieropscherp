Het doel: de site is al basis-vindbaar (llms.txt, sitemap, robots, SSR). We gaan nu een stap verder zodat AI-assistenten de site écht goed kunnen verwerken.

## Wat we gaan doen

1. **Uitgebreidere llms.txt**
   - Vervang de korte one-liners per pagina door een duidelijke beschrijving (2-3 zinnen) zodat AI's snappen wat er op elke pagina staat zonder die eerst te hoeven scrapen.
   - Behoud de bestaande structuur, maar maak 'm informatiever.

2. **Per-route meta-titel en beschrijving**
   - Homepage heeft al goede meta via `__root.tsx`.
   - Toevoegen aan alle hoofdroutes (`/voor-werkgevers`, `/coaching-voor-mij`, `/uwv-traject`, `/coaches`, `/over-ons`, `/leiderschap`, `/kennismaken`, `/inzichten`).
   - Elk artikel onder `/inzichten/*` krijgt een eigen `<title>`, meta description, canonical en og:url.

3. **JSON-LD gestructureerde data**
   - Sitewide `Organization` + `WebSite` schema in `__root.tsx`.
   - `Article` schema op alle blog-artikelen met titel, beschrijving, URL, datum (indien beschikbaar in HTML) en organisatie als publisher.
   - `BreadcrumbList` op diepere pagina's zodat AI's de hiërarchie snappen.

4. **Sitemap verfijnen**
   - Controleer dat alle 24+ routes erin staan.
   - Voeg `lastmod` toe waar mogelijk (statische datum is voldoende).
   - Correcte prioriteiten: homepage 1.0, hoofdpagina's 0.9, artikelen 0.6.

5. **Robots.txt en taal**
   - `robots.txt` laat alles toe, sitemap verwijst correct.
   - `<html lang="nl">` staat er al.

## Wat we NIET doen

- Geen nieuwe backend/database (geen Cloud nodig).
- Geen content herschrijven; alleen meta/structuur toevoegen.
- Geen nieuwe pagina's maken.

## Verificatie

- Na de wijzigingen check ik of `/llms.txt`, `/sitemap.xml` en een aantal artikelen correct renderen (via `curl`).
- Eventueel vraag ik daarna een nieuwe SEO-scan aan.