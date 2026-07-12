## Wat er komt

De vier geüploade PDFs worden als Lovable-assets toegevoegd en gekoppeld aan de bestaande download-knoppen op de site.

## Koppeling

| PDF | Knop |
|---|---|
| `Je_richting_scherp_krijgen.pdf` | Werkboek "Richting scherp krijgen" op `/coaching-voor-mij` (energie/richting) |
| `Werken_vinden_via_mensen.pdf` | Werkboek "Werken vinden via mensen" op `/coaching-voor-mij` (netwerk) |
| `Aan_het_roer_van_je_werk.pdf` | Werkboek "Aan het roer" op `/coaching-voor-mij` (regie/tijd/energie) |
| `De_Loopbaangesprek-leidraad.pdf` | "Download de leidraad"-knop op `/` (homepage) én op `/voor-werkgevers` |

## Uitvoering (technisch)

1. Elke PDF uploaden via `lovable-assets create --file /mnt/user-uploads/<pdf>` en de resulterende `src/assets/<pdf>.asset.json` pointer opslaan.
2. In `src/routes/coaching-voor-mij.tsx`, `src/routes/index.tsx` en `src/routes/voor-werkgevers.tsx` de bestaande `<button>` elementen vervangen door `<a href="{url}" download target="_blank" rel="noopener">` met dezelfde `btn btn-primary` styling, zodat de tekst en look identiek blijven.
3. Geen andere content, layout of styling wijzigen.

## Verificatie

Build laten slagen; kort visueel checken dat de knoppen er nog hetzelfde uitzien en dat de link naar de juiste PDF-URL wijst.