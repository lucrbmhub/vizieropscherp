# Cal.com-agenda terugzetten op /kennismaken (alleen als je dat wilt)

Alle gegevens zijn nog terug te vinden:
- Agenda-link: luc-vizieropscherp/20min (event "20 minuten"), namespace 20min
- Reservelink als de agenda niet laadt: https://cal.com/luc-vizieropscherp/20min
- Plek: direct onder het bovenstuk van /kennismaken, boven "Waar wil je het over hebben?" en het berichtformulier
- Teksten: eyebrow "Direct inplannen", kop "Kies een moment dat jou uitkomt.", tekst "Twintig minuten, vrijblijvend. Jij kiest de tijd; we bellen of spreken af op een van onze locaties."
- Laadtekst "Agenda wordt geladen…"; na 8 seconden een reserveknop met "Plan je gesprek direct in via onderstaande knop, of gebruik het formulier hieronder."
- Knoppen op de Haarlem- en Amsterdampagina sprongen naar het agendablok (#plannen)

## Wat er gebeurt bij terugzetten
1. Agendablok terug op /kennismaken, zoals het was.
2. Knoppen op de stadspagina's springen weer direct naar de agenda.
3. Formulier en de rest van de pagina blijven ongewijzigd.

## Technisch
- `@calcom/embed-react` opnieuw installeren; `src/components/CalEmbed.tsx` herstellen (lazy-mount via IntersectionObserver, linkReady, 8s fallback, brandkleur #1F3D3B).
- Sectie `id="plannen"` terug in `kennismaken.tsx`; `.vos-cal-*` en `vos-pulse` CSS terug.
- `planLink` in CityLandingPage weer met `#plannen`.
