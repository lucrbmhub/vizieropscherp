# Waarom de blogs er anders uitzien

Elk aangeleverd artikel-HTML-bestand heeft in de `<head>` een eigen `<style>`-blok (regel 33–149 in bv. `inzichten-job-crafting.html`) met álle opmaak voor dat artikel: `.hero-licht`, `.article-body`, `.callout-goud`, `.kernzin`, `.signal-list`, `.body-list`, `.cta`, `.btn-primary`, `.btn-secondary`, `.hero-meta`, enzovoort.

Bij het overnemen heb ik alleen de `<body>`-inhoud in elke route gezet. Die inline stylesheet is niet meegekomen, en die klassen staan ook niet in `public/styles.css`. Resultaat: de artikelen renderen met alleen de basis-fonts en navigatie/footer-styling — geen hero, geen kaders, geen CTA-blok in de juiste stijl.

# Fix

Voor elk van de 10 artikel-routes onder `src/routes/inzichten.*.tsx`:

1. Het `<style>…</style>`-blok uit de bijbehorende `/mnt/user-uploads/inzichten-*.html` extraheren (1-op-1, niets herschrijven).
2. Die CSS mee-injecteren in de route, gescoped aan het artikel zodat het niets buiten de pagina raakt. Concreet: de route rendert `<style dangerouslySetInnerHTML={{__html: ARTICLE_CSS}} />` naast de bestaande `<div dangerouslySetInnerHTML={{__html: HTML}} />`. De CSS in de bron mikt al op klassen die alleen in de artikel-body voorkomen (`.hero-licht`, `.article-body`, `.callout-goud`, …), dus botsingen met andere pagina's zijn er niet.
3. Verder niets aanraken: geen tekst, geen kleuren, geen HTML-structuur. Alleen de ontbrekende CSS toevoegen.

## Werkwijze (technisch)

Python-scriptje dat per artikel:
- de `<style>`-inhoud uit de HTML-bron leest,
- het `HTML`-constant en een nieuw `ARTICLE_CSS`-constant in de bestaande `.tsx` zet,
- de `Page()`-component `<style>` + `<div>` laat renderen.

## Verificatie

- `bun run build` slaagt.
- `/inzichten/job-crafting` en één ander artikel in de preview openen: hero, kaders, callouts en CTA-strip zien er nu uit als in het originele HTML-bestand.

## Wat NIET verandert

- Overzichtspagina `/inzichten` en alle andere routes blijven ongewijzigd.
- Geen tekstuele of visuele wijziging aan de artikelen zelf — alleen de ontbrekende stylesheet komt terug.
