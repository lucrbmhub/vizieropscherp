# Direct inplannen van de site halen

## Wat er verandert
1. **Kennismaken-pagina**: het hele blok "Direct inplannen / Kies een moment dat jou uitkomt." met de Cal.com-agenda verdwijnt. De rest van de pagina (bovenstuk, "Waar wil je het over hebben?" en het berichtformulier) blijft precies zoals het is.
2. **Knoppen op de stadspagina's** (Haarlem en Amsterdam: hero, stappen, slotblok en de mobiele balk) verwijzen nu naar de kennismaken-pagina zelf, niet meer naar het agenda-blok. Het label blijft "Plan een gesprek" e.d.
3. Alle andere knoppen op de site (home, voor werkgevers, coaching voor mij, enz.) wezen al naar /kennismaken en blijven ongewijzigd.

## Keuzes die ik maak (zeg het als je het anders wilt)
- De herkomst-codes in de stadslinks (`?locatie=haarlem&knop=hero`) blijven staan, zodat je kunt blijven zien vanaf welke stad en knop iemand komt. Alleen het stukje dat naar de agenda sprong verdwijnt.
- Teksten als "Twintig minuten, gratis en vrijblijvend" op de stadspagina's laat ik staan: het kennismakingsgesprek bestaat nog, alleen niet meer via de online agenda.

## Technische details
- `src/routes/kennismaken.tsx`: de `<section>` met `CalEmbed` en de import verwijderen.
- `src/components/CalEmbed.tsx` verwijderen; pakket `@calcom/embed-react` verwijderen.
- `src/components/CityLandingPage.tsx`: `planLink` wordt `/kennismaken?locatie=${citySlug}&knop=${place}` (zonder `#plannen`).
- De ongebruikte `.vos-cal-*` regels in `public/styles.css` (r. 469-477) opruimen.
- Controle: build zonder fouten, geen verwijzing meer naar `#plannen` of cal.com, /kennismaken toont geen agenda meer.
