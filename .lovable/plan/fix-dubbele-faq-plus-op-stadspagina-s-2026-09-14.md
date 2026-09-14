# Fix dubbele FAQ-plus op stadspagina’s

## Probleem
Op `/loopbaancoach-haarlem` en `/loopbaancoach-amsterdam` toont het FAQ-accordeon twee plus-iconen naast elkaar: de custom `.plus` indicator én de native browser-marker van `<details>/<summary>`.

## Oplossing
Pas de scoped CSS in `src/components/CityLandingPage.tsx` aan zodat de native marker echt verdwijnt in alle browsers, inclusief WebKit/Safari op iOS:

- Voeg `summary::marker { display: none; }` toe naast het bestaande `::-webkit-details-marker` verbergen.
- Hergebruik dezelfde fix voor beide pagina’s (de FAQ leeft in de gedeelde `CityLandingPage`-component).

## Stappen
1. Wijzig de FAQ-CSS in `CityLandingPage.tsx`.
2. Verifieer in de preview dat er per FAQ-item nog maar één plus staat.
3. Controleer dat het accordeon nog open/dicht klikt op mobiel.
4. Build controleren.

## Niet in scope
- Andere pagina’s of routes aanpassen.
- De FAQ-interactie herschrijven; alleen de marker verbergen.
