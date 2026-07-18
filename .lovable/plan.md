## Wat er aan de hand is

`inzichten.hetzelfde-gevoel-een-andere-baan.tsx` gebruikt een compleet eigen HTML- en CSS-systeem dat afwijkt van de 24 andere blogs. Concrete visuele verschillen:

| Onderdeel | Standaard-blogs | Nieuwe blog (nu) |
|---|---|---|
| Hero label | Goud pill-`badge` ("Voor medewerkers") + "← Inzichten" terug-link + `metaregel` met koraal ruit-dot | `eyebrow` met ruit "Inzichten · Voor medewerkers", geen terug-link, geen metaregel |
| Body-klassen | `wrap-narrow`, `standfirst`, `body`, `intro` (muted) | `article-container`, `intro`, `hero-inner`, `section-eyebrow` boven elke H2 |
| Uitgelicht blok | `.featured` — warm vlak met koraal ruit door bovenrand, ol/ul binnen | `.open-kader` — transparant petrol-kader met "opening" |
| Lijstbullets | Standaard `<ul>` in `.featured` | Custom `.ruitlijst` met koraal ruit-bullet |
| Kern-citaat | `<aside class="kernzin">` — petrol donker vlak met display-quote | Ontbreekt (alleen `.open-kader` als quote) |
| FAQ | Platte `.faq-item` (h3 + p) direct in article, op papier | `<details>` accordeon in aparte `.faq-sectie` op linnen |
| Verder lezen | 2-koloms `.verder-kaart` op linnen, "Lees verder →" | 3-koloms `.anker-kaart` met koraal ruit door bovenrand + `kaartlabel` |
| CTA | `.cta-strip` met `.knop-petrol` + `.knop-outline` (twee knoppen) | `.facet-buiten/binnen` met alleen `.btn-primair` |
| Slotpunt | `<span class="dot">` (goud) in H1 | `<span class="slotpunt">.</span>` |

De pagina rendert daardoor als een ander merk-uiting binnen dezelfde site.

## Aanpak

Herschrijf **alleen** het bestand `src/routes/inzichten.hetzelfde-gevoel-een-andere-baan.tsx` zodat het exact het patroon volgt van `inzichten.vastzitten-in-een-goede-baan.tsx` (referentie). Behouden: alle bestaande **tekstinhoud** (hero-lead, alle H2's + paragrafen, de 4 signalen, de "zorgvuldig"-noot, de 3 FAQ-vragen, de 3 "Verder lezen"-links, JSON-LD/meta).

### Concrete stappen in dat ene bestand

1. **`ARTICLE_CSS`** vervangen door de standaard CSS-string uit `vastzitten-in-een-goede-baan.tsx` (identiek overnemen — dit is de gedeelde blogstijl).
2. **`HTML`** herstructureren:
   - Hero: `<section class="hero"><div class="wrap-narrow">` met terug-link `← Inzichten`, `<span class="badge">Voor medewerkers</span>`, H1 (behoud kop, gebruik `<span class="dot">` op de slotpunt), `<p class="standfirst">` met de bestaande lead, en `<div class="metaregel">` met "Voor medewerkers · 5 min lezen".
   - `<article><div class="wrap-narrow">` met `<p class="intro">` (huidige inleiding), daarna H2's met `<p class="body">`-paragrafen.
   - Vervang `.ruitlijst` door standaard `<ul>` binnen een `.featured`-blok voor de 4 signalen (met `label` + H2 "Vier signalen dat er meer speelt dan de functie").
   - Zet de bestaande open-kader-quote ("Een overstap verandert je omgeving…") om naar `<aside class="kernzin">` (donker petrol quote-blok).
   - `.noot` behouden als eenvoudige alinea of omzetten naar `.featured` met label "Zorgvuldig" — kies `.featured` voor stijlconsistentie.
   - FAQ als `.faq` met `.faq-item` (h3 + p), niet als `<details>`.
   - Verder lezen: 2-koloms `.verder-grid` met `.verder-kaart` (2 kaarten conform standaard: houd "Vastzitten in een goede baan" en "Energie en motivatie in werk"; "Richting vinden" laten vervallen om bij 2 kaarten te blijven zoals de standaard, of alle 3 behouden — kies **alle 3** zodat er geen inhoud wegvalt; de grid schikt op mobiel prima).
   - CTA: `.cta-strip` met `.knop-petrol` ("Maak kennis met een coach" → `/kennismaken`) en `.knop-outline` ("Bekijk onze coaches" → `/coaches`).
3. Head/meta/JSON-LD blijft ongewijzigd (die zijn al goed).
4. Retrofit-kaart in `inzichten.vastzitten-in-een-goede-baan.tsx` en `inzichten.richting-vinden-in-je-loopbaan.tsx` niet aanraken (die zitten al in standaard-stijl).

### Wat er niet verandert
- Geen tekstwijzigingen in kop, lead, paragrafen, signalen, FAQ-antwoorden, noot of CTA-copy.
- Geen wijzigingen aan andere routes, `inzichten.index.tsx`, sitemap of MCP.
- Geen nieuwe kleuren, componenten of assets.

### Resultaat
Het artikel oogt identiek aan de andere 24 blogs: dezelfde hero-badge, dezelfde `featured`/`kernzin`/`faq-item`/`verder-kaart`/`cta-strip`-blokken, dezelfde typografie en ritme.
