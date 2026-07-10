## Doel
De vorige globale padding-verhoging terugdraaien en alléén de hero-sectie bovenaan elke pagina meer zijruimte geven op mobiel en tablet.

## Wijzigingen in `public/styles.css`

1. **Terugdraaien** in de mobiele media query (≤620px):
   - `.container` weer naar `padding: 0 20px` (was 24px)
   - `.card` binnenruimte terug naar oorspronkelijke waarde
   - `.facet-inner` binnenruimte terug naar oorspronkelijke waarde

2. **Terugdraaien** in de tablet media query (≤860px):
   - `.container` weer naar `padding: 0 32px` (was 36px)

3. **Toevoegen** — extra zijruimte alleen in de hero:
   - Mobiel (≤620px): `.hero .hero-pad { padding-left: 28px; padding-right: 28px; }`
   - Tablet (≤860px): `.hero .hero-pad { padding-left: 40px; padding-right: 40px; }` (container geeft 32px + 8px extra = 40px totaal effect, subtiel)

Desktop blijft ongewijzigd.

## Waarom deze aanpak
De hero heeft grote kop (`.h-hero` met clamp tot 68px) en lead-tekst die op smalle schermen visueel tegen de rand duwt. Door alleen `.hero-pad` te targetten raken we de rest van de pagina niet en blijft alle andere content op zijn originele ritme.
