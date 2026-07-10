# Inzichten-artikelen toevoegen

## Doel
Voor elk van de 10 aangeleverde HTML-artikelen een eigen route aanmaken onder `/inzichten/<slug>` — inhoud 1-op-1 overgenomen, niets herschreven. Daarna de overzichtspagina `/inzichten` compleet maken: bestaande kaarten die matchen krijgen de juiste link, ontbrekende artikelen krijgen een nieuwe previewkaart in dezelfde stijl.

## Nieuwe routes (bestandsnaam → URL)

| Bestand | URL |
|---|---|
| `src/routes/inzichten.duurzaam-inzetbaar-blijven.tsx` | `/inzichten/duurzaam-inzetbaar-blijven` |
| `src/routes/inzichten.duurzame-inzetbaarheid-werkgever.tsx` | `/inzichten/duurzame-inzetbaarheid-werkgever` |
| `src/routes/inzichten.energie-en-motivatie-in-werk.tsx` | `/inzichten/energie-en-motivatie-in-werk` |
| `src/routes/inzichten.ervaren-talent-als-kans.tsx` | `/inzichten/ervaren-talent-als-kans` |
| `src/routes/inzichten.generaties-op-de-werkvloer.tsx` | `/inzichten/generaties-op-de-werkvloer` |
| `src/routes/inzichten.goede-loopbaancoach-kiezen.tsx` | `/inzichten/goede-loopbaancoach-kiezen` |
| `src/routes/inzichten.het-tegenbod.tsx` | `/inzichten/het-tegenbod` |
| `src/routes/inzichten.impostersyndroom-twijfel-als-kracht.tsx` | `/inzichten/impostersyndroom-twijfel-als-kracht` |
| `src/routes/inzichten.je-eerste-baan.tsx` | `/inzichten/je-eerste-baan` |
| `src/routes/inzichten.job-crafting.tsx` | `/inzichten/job-crafting` |

Slugs komen exact uit de `canonical`-URL in de HTML.

## Werkwijze per artikel
1. Body-inhoud (header + main + footer) uit het HTML-bestand halen, ongewijzigd.
2. `.html`-navigatielinks in die body herschrijven naar de projectroutes (bv. `coaches.html` → `/coaches`). Ander tekstuele of visuele wijzigingen: geen.
3. `<title>` en `<meta name="description">` uit de `<head>` overnemen in het `head()` van de route (plus og:title/og:description).
4. Inhoud renderen via `dangerouslySetInnerHTML` — zelfde patroon als de andere overgenomen pagina's.
5. `inzichten.tsx` is de layout-parent; hij krijgt `component: () => <Outlet />` zodat de child-routes op `/inzichten/*` mounten — en op `/inzichten` zelf wordt een `inzichten.index.tsx` de huidige overzichtsinhoud. (Zonder deze splitsing botsen parent en children.)

## Overzichtspagina `/inzichten`

**Bestaande kaarten die al matchen** — alleen de link bijwerken naar de nieuwe route:
- "Energie en motivatie in werk" → `/inzichten/energie-en-motivatie-in-werk`
- "Duurzame inzetbaarheid …" → `/inzichten/duurzame-inzetbaarheid-werkgever`
- "Een goede loopbaancoach kiezen …" → `/inzichten/goede-loopbaancoach-kiezen`
- "Je voelt je een bedrieger? …" → `/inzichten/impostersyndroom-twijfel-als-kracht`

**Nieuwe previewkaarten toevoegen** (zes artikelen die nog geen kaart hebben), in dezelfde `card`-stijl als de bestaande kaarten in "Meer inzichten":
- Duurzaam inzetbaar blijven in je werk
- De vijftigplusser als kans: waarom u ervaren talent te vroeg afschrijft
- Generaties op de werkvloer: de verschillen zijn kleiner dan de verhalen
- Het tegenbod: waarom het vertrek meestal alleen uitstelt
- Je eerste baan: overleven of floreren?
- Job crafting: je baan verbouwen zonder te verhuizen

Titel + korte samenvatting uit de meta-description van het HTML-bestand, doorlink naar de nieuwe route. Volgorde en indeling volgen de huidige grid; geen visuele wijzigingen aan bestaande kaarten of secties.

## Wat NIET wordt aangepast
- Geen tekstwijzigingen in de artikel-HTML.
- Geen stijlwijzigingen aan bestaande overzichtskaarten.
- Bestaande kaarten zonder bijbehorend HTML-bestand (bv. "Van werven naar behouden", "Solliciteren", "Outplacement of loopbaancoaching") blijven staan met hun huidige `href="#"` — daar is nog geen artikel voor aangeleverd.

## Verificatie
- `bun run build` slaagt (routetree bevat de 10 nieuwe routes).
- Handmatig één artikel-URL openen in de preview om te bevestigen dat de HTML 1-op-1 rendert en de nav/footer-links werken.
