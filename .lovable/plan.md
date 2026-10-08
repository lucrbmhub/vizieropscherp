# Cijferblokken en stappen opschonen op de Haarlem- en Amsterdam-pagina

## Wat er nu staat

In de sectie "Waarom Vizier op Scherp" op beide stadspagina's staat boven elk cijfer (1.000+, 2, 5–10, 100%) een oranje ruitje met daarachter een donkergroene horizontale lijn. In de sectie "Zo werkt het" loopt bij stap 1, 2 en 3 een verticale beige lijn met per stap een oranje ruitje.

## Wat er wordt gedaan

1. **Cijferblokken:** het oranje ruitje én de donkergroene horizontale lijn boven elk cijfer verdwijnen. De cijfers en teksten schuiven op tot de rand, zodat er geen lege strook overblijft.
2. **Stappen 1, 2 en 3:** de verticale lijn en de ruitjes ernaast verdwijnen. De stap-teksten schuiven naar de rand.
3. **Het citaat** in dezelfde "Waarom Vizier op Scherp"-sectie blijft precies zoals het is (ruitje, lijntje en gouden puntje blijven staan).
4. De kleine oranje ruitjes vóór de etiquetas ("WAAROM VIZIER OP SCHERP", "IN DRIE STAPPEN" en同类 over de hele site) blijven staan.

Dit pakt beide pagina's tegelijk aan, omdat ze dezelfde pagina-opbouw delen. Veranderingen: geen enkele tekst, alleen deze decoraties en de bijbehorende witruimte.

## Technische details

Alle aanpassingen staan in één bestand, `src/components/CityLandingPage.tsx` (het gedeelde stijlblok van de stadspagina's):

- `.city .stat`: `border-top:2px solid var(--vos-petrol)` en `padding-top:16px` schrappen; de regel `.city .stat::before` (het ruitje) schrappen.
- `.city .trap__step`: `padding:0 0 26px 40px` wordt `padding:0 0 26px 0`; de regels `.city .trap__step::before` (ruitje), `.city .trap__step::after` (verticale lijn) en `.city .trap__step:last-child::after` schrappen.
- `.city .quote__rail` en de bijbehorende HTML blijven onaangeroerd.
- De JSX van de cijfer- en stapsecties hoeft niet gewijzigd: de decoraties zitten nu in CSS-pseudo-elementen, dus die verdwijnen met de CSS-regels.

## Controlen

- Bouw logt zonder fouten (`/tmp/observability/build-errors.log`).
- Browsercheck op beide pagina's bij desktopbreedte: boven de cijfers staan geen ruitjes en geen horizontale lijnen meer, en de stap-teksten zijn niet meer ingesprongen; het citaat houdt zijn lijntje.
- Zelfde check bij smalle (mobiele) breedte: de vier cijfers staan onder/naast elkaar zonder ruitjes of lijnen.
