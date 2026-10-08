# Haarlem- en Amsterdam-pagina: zwevend kaartje weg, kop netjes gebroken

## Wat er nu staat

- Bij de hero-foto op zowel /loopbaancoach-haarlem als /loopbaancoach-amsterdam hangt een klein crème kaartje met bovenaan het label "In de regio" en daaronder "Twee locaties: Haarlem en Amsterdam. Coaching op locatie of online."
- De kop "Loopbaancoaching in Haarlem, dichtbij en concreet." valt op desktop uiteen: regel 1 eindigt op "Loopbaancoaching i", regel 2 begint met "n Haarlem". Het woord "in" komt dus uit elkaar te staan. Oorzaak: de "i" zit in een apart-styled letterspannetje (met het oranje ruitje) en de "n" staat als losse tekst ernaast, waardoor de browser daar een nieuwe regel mag beginnen. Getest op 1100, 1280 en 1440 px breed: op alle drie breekt "in" doormidden.

## Wat er wordt gedaan

1. **Zwevend kaartje weg, op beide pagina's.** Het kaartje (label én de tekst over de twee locaties) verdwijnt helemaal van de Haarlem- en de Amsterdam-pagina. De foto staat dan vrij.
2. **Kop Haarlem: "in" blijft aan elkaar.** Op desktop, tablet en mobiel staat "in" altijd in één stuk, dus de kop leest als "Loopbaancoaching in / Haarlem, dichtbij en concreet." in plaats van "Loopbaancoaching i / n Haarlem". De kop van de Amsterdam-pagina blijft zoals hij is.

Verder verandert er niets: geen andere pagina's, geen teksten, geen styles.

## Technische details

- `src/components/CityLandingPage.tsx`
  - `floatCard` in het type `CityLandingData` wordt optioneel (`floatCard?`), en de kaart wordt alleen gerenderd als die data heeft. Zo kan een toekomstige stadspagina het kaartje weer gebruiken zonder de component aan te passen.
  - Nieuwescoped CSS-regel `.city .nowrap { white-space: nowrap }` in het CSS-blok van de component.
- `src/routes/loopbaancoach-haarlem.tsx`
  - Het `floatCard`-item uit de hero-data schrappen.
  - In de hero-title het woord "in" (`<span className="idot">i</span>n`) omsluiten door `<span className="nowrap">…</span>`, zodat de regel niet meer tussen "i" en "n" mag breken. De ruimte vóór "in" blijft een normale spatie, dus "Loopbaancoaching" en "in" kunnen nog altijd van elkaar breken als dat moet.
- `src/routes/loopbaancoach-amsterdam.tsx`
  - Alleen het `floatCard`-item uit de hero-data schrappen; de title blijft onaangeroerd.

## Controlen

- Bouw logt zonder fouten (`/tmp/observability/build-errors.log`).
- Browsercheck op de Haarlem-pagina bij 1100, 1280 en 1440 px: het woord "in" sluit op één regel af (geen "i" aan het eind van regel 1), en er is geen zwevend kaartje meer.
- Zelfde check op de Amsterdam-pagina: kaartje weg, kop ongewijzigd.
- Mobiele check (390 px breed) op beide pagina's: hero, foto en knoppen staan nog goed.
