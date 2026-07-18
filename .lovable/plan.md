# Prompt: skill voor Vizier op Scherp blogartikelen

Hieronder een kant-en-klare prompt die je in het andere Lovable-account plakt. Die instance schrijft er dan een skill van (via het skill-creator patroon) die telkens een blogartikel in exact het huidige format oplevert — hero, `ARTICLE_CSS`, `featured` blokken, `kernzin`, platte FAQ, `verder-kaart`-grid, `cta-strip`, plus JSON-LD (`BlogPosting` + `BreadcrumbList` + `FAQPage`), route-registratie in sitemap en MCP-index.

De prompt is zelfstandig: het andere account hoeft dit project niet te kunnen lezen. Alle regels, tokens en templates zitten erin.

---

## Kopieer vanaf hier

Maak een skill met de naam `vizier-op-scherp-blog` onder `.agents/skills/vizier-op-scherp-blog/` en pas hem toe met `skills--apply_draft`. De skill zorgt dat elk nieuw blogartikel voor Vizier op Scherp exact hetzelfde format en dezelfde huisstijl krijgt als de bestaande 25 artikelen onder `/inzichten/*`.

### Wanneer de skill triggert
Description moet matchen op: nieuwe blog / inzichtenartikel / "voeg artikel toe aan /inzichten" / retrofit van bestaande blogs / stijlcheck van een artikel.

### Wat de skill afdwingt

**1. Bestand & route**
- Pad: `src/routes/inzichten.<slug>.tsx`, slug is kebab-case, ASCII, zonder stopwoorden weglaten als ze in de titel staan.
- `createFileRoute('/inzichten/<slug>')` met `head()` die `title`, `description`, `canonical` (`https://vizieropscherp.nl/inzichten/<slug>`), `og:title/description/type=article`, `twitter:card=summary_large_image` zet. Geen `og:image` tenzij er een echte hero-afbeelding is.
- Registreer de route in `src/routes/sitemap[.]xml.ts` en in `src/lib/mcp/data.ts` (`list_articles` + `get_article`).

**2. Verplichte paginastructuur (in deze volgorde)**
1. `<SiteHeader />`
2. `<main id="content">` met:
   - Hero op petrol (`background: var(--petrol)`), met:
     - `terug`-link naar `/inzichten`
     - `badge` — één van: "Voor medewerkers", "Voor werkgevers", "Voor HR", "Voor UWV-cliënten"
     - H1 met **i-punt ruit** op de eerste losstaande "i" en **gouden slotpunt** (span om de eind-punt; nooit dubbele punt; bij `?`/`!` geen gouden punt)
     - `metaregel` (leestijd + datum + auteur "Redactie Vizier op Scherp")
     - één ruit-watermerk rechts (max 1)
   - Intro-lead (max 58ch, 17.5px)
   - Body met `featured` blokken voor uitgelichte alinea's, `kernzin` (petrol-dark aside) voor de kernquote, gewone `<p>` voor de rest
   - Lijsten: koraal ruitje 8px, rotate 45° — nooit standaard bullets/streepjes; mix nooit varianten binnen één lijst
   - FAQ **plat** (geen accordeon): `faq-item` met `<h3>` + `<p>`. Minimaal 3, maximaal 6 vragen
   - "Verder lezen" 2-koloms grid met 3 `verder-kaart` links naar inhoudelijk verwante artikelen
   - `cta-strip` met twee knoppen: primair koraal ("Plan een kennismaking" → `/kennismaken`) + outline petrol ("Bekijk aanpak" → contextafhankelijk: `/coaching-voor-mij`, `/voor-werkgevers` of `/uwv-traject`)
3. `<SiteFooter />`

**3. `ARTICLE_CSS`**
Eén geëxporteerde constante bovenin het bestand, ingebed via `<style dangerouslySetInnerHTML={{__html: ARTICLE_CSS}} />` binnen `head()`. Gebruik exact het bestaande CSS-blok uit de andere 25 artikelen (hero petrol, badge, terug, metaregel, featured, kernzin, faq-item, verder-kaart-grid, cta-strip, mobiele nav). Balanceer accolades op 0 — verifieer met een count. Geen zwevende `}`.

**4. JSON-LD (drie blokken, in `head()`)**
- `BlogPosting` (headline, description, datePublished, dateModified, author=Organization "Vizier op Scherp", publisher met logo, mainEntityOfPage)
- `BreadcrumbList`: Home → Inzichten → Artikeltitel
- `FAQPage` met exact dezelfde vragen/antwoorden als in de body-FAQ

**5. Huisstijl-regels (harde constraints, nooit afwijken)**
- Kleuren alleen uit het tokenpalet: petrol `#1F3D3B`, papier `#FAF6EF`, linnen `#F5EFE3`, warm `#FBF1D7`, goud `#F2C879`, koraal `#E8714A`. Nooit `#000` of `#fff`. Nooit nieuwe tinten.
- Fonts: `Bricolage Grotesque` (koppen 400/500/600) + `Instrument Sans` (body). Nooit Inter/Lora/systeemfont.
- Geen emoji, geen iconenbibliotheken (ruit-motief is de iconografie).
- Geen em-dashes in body-tekst. Verboden woorden: transformeer, next level, gamechanger, empowerment, doorbraak, holistische reis.
- Coach-toon: **je-vorm** in blogs. Werkgevers-CTA in u-vorm alleen als het artikel expliciet HR-doelgroep is.
- Certificering (letterlijk): "onze coaches zijn gecertificeerd en aangesloten bij een erkende beroepsvereniging of kwaliteitsregister, zoals Noloc, NOBCO of een vergelijkbaar register".
- Coach-aantal altijd "5 tot 10 coaches", nooit "8-12".
- Geen prijzen, geen klantnamen zonder toestemming (schoolbestuur-formulering gebruiken).

**6. Retrofit-stap (verplicht bij nieuw artikel)**
- Voeg een `verder-kaart` naar het nieuwe artikel toe in minstens 2 thematisch verwante bestaande artikelen.
- Voeg een kaart toe aan `src/routes/inzichten.index.tsx` in het juiste thema-blok. Als het nieuwe artikel bovenaan komt: verplaats de `card--anchor ring-paper` klassen (het oranje ruitje) naar die eerste kaart.

**7. Bestanden die bijgewerkt moeten worden per nieuw artikel**
- `src/routes/inzichten.<slug>.tsx` (nieuw)
- `src/routes/inzichten.index.tsx` (kaart + evt. thema-chip)
- `src/routes/sitemap[.]xml.ts`
- `src/lib/mcp/data.ts`
- 2 bestaande `src/routes/inzichten.*.tsx` (retrofit-links)

**8. Verificatie na schrijven**
- Tel `{` en `}` in `ARTICLE_CSS` — moeten gelijk zijn.
- Grep het bestand op verboden woorden en op `#000`/`#fff`.
- Check dat H1 exact één i-punt-ruit en één gouden slotpunt heeft (of geen slotpunt bij `?`/`!`).
- Check dat FAQ-vragen in body en in `FAQPage` JSON-LD identiek zijn.

### Bundel in de skill
- `SKILL.md` met bovenstaande regels
- `references/article-template.tsx` — volledig kopieerbaar route-bestand met placeholders `{{SLUG}}`, `{{TITLE}}`, `{{BADGE}}`, `{{INTRO}}`, `{{BODY_BLOCKS}}`, `{{FAQ}}`, `{{VERDER_KAARTEN}}`, `{{CTA_HREF}}`
- `references/article-css.css` — de exacte `ARTICLE_CSS` string
- `references/jsonld.ts` — helper die de drie JSON-LD blokken bouwt
- `references/style-tokens.md` — het complete kleur/typografie/motief-token-overzicht (kopieer §2 t/m §5 uit de Vizier stijlgids letterlijk)
- `references/checklist.md` — de verificatiestappen uit punt 8

Rond af met `skills--apply_draft .agents/skills/vizier-op-scherp-blog`.

---

## Tot hier kopiëren

Wil je dat ik hem nog inkort, of extra secties (bijv. voorbeeld-artikel als volledige referentie) meegeef?
