## Probleem
Op `/coaches` heeft de sectie "Verschillende mensen, dezelfde zorg en kwaliteit" een inline style `grid-template-columns:repeat(3,minmax(0,1fr))`. Die inline style overschrijft de responsive media queries in `public/styles.css` (`@media` op 900px zet naar 2 kolommen, op ~640px naar 1 kolom). Op mobiel blijft het daardoor 3 kolommen tonen en lopen de teksten door elkaar.

## Fix
In `src/routes/coaches.tsx`, in de HTML-string, de inline style op de `.bigstats` div weghalen:

- Was: `<div class="bigstats" style="grid-template-columns:repeat(3,minmax(0,1fr));">`
- Wordt: `<div class="bigstats">`

De basisregel in `styles.css` gebruikt 4 kolommen als default. Om de desktop-layout van drie kolommen te behouden, voeg ik in `public/styles.css` een specifieke variant toe: `.bigstats--3{grid-template-columns:repeat(3,minmax(0,1fr))}` binnen dezelfde media-query-structuur zodat het op mobiel netjes naar 2 en dan 1 kolom valt. In de coaches-HTML wordt de class dan `bigstats bigstats--3`.

## Verificatie
Playwright screenshot op 390px breed van de coaches-pagina bij die sectie, om te bevestigen dat de drie blokken netjes onder elkaar staan.