## Wat ik weet

- **Server-endpoint werkt.** Een directe POST naar `/api/public/submit-form` op de dev-server geeft `200 {"ok":true}`.
- **Tabellen bestaan** en bevatten data: `workbook_leads` (6), `contact_aanvragen` (6), `form_rate_limits` (8). Laatste succesvolle inserts om 17:01 vandaag; daarna alleen mijn testcall om 18:11.
- **Rate-limit is niet geraakt** (max 1 hit per IP in laatste 10 min).
- **Route is geregistreerd** in `routeTree.gen.ts`.
- **Publiceerde site** (`vizieropscherp.nl` / `www.vizieropscherp.nl`) wijst naar een WordPress-site, niet naar deze Lovable-app. Er is bovendien "No published build" op de Lovable-domeinen. Als je op de custom domain test, kán de Lovable-code sowieso niet draaien.

## Vermoedelijke oorzaak (nog niet bevestigd)

Op de **preview** hoort alles te werken. De meest waarschijnlijke faalpunten (nog niet gereproduceerd) zijn client-side:

1. Werkboek-popup: sinds de recente omzetting naar shadcn `Dialog` in `WorkbookGate.tsx` kan een hydratiefout of niet-opgevangen exception voorkomen dat de dialoog opent of dat het submit-formulier werkt.
2. Contactformulier op `/kennismaken`: `useContactForm` hangt een `submit`-listener via `document.querySelector` — als iets in de HTML-string (of een selector-conflict door meerdere `<form>`-elementen op de pagina) de vindbaarheid breekt, wordt de listener niet gekoppeld en submit de browser gewoon niets (er staat geen `action`).
3. Ergens tussenin een JS-runtime-error die de mount van `<WorkbookGate />` / `<Page />` afbreekt, waardoor beide formulieren tegelijk stil vallen — dat verklaart "de werkboekdownload én het contactformulier".

Zonder de fout te zien in jouw browser (console + netwerk) kan ik niet met zekerheid zeggen welk van deze drie het is.

## Plan

1. **Reproduceren** in de live preview: openen `/coaching-voor-mij`, klikken op "Download het werkboek" (verwacht: modal opent, submit levert `200`), en `/kennismaken` submit doen. Console-errors en de netwerkcall naar `/api/public/submit-form` uitlezen (status, response body).
2. **Diagnose** op basis van wat de reproductie oplevert:
   - Modal opent niet → error in `WorkbookGate` click-handler / Dialog. Kijk naar de `document`-level click-listener en of `data-workbook` correct wordt opgepakt (bijv. onbedoeld `preventDefault` in een andere handler).
   - Modal opent, submit blijft hangen → fetch-fout of validatie; fix schema/veldnaam.
   - Contactformulier reageert niet op submit → `document.querySelector("#bericht-form form")` treft niet, of listener wordt afgemount door React strict-mode dubbele render. Vervang de imperatieve `useEffect` + `dangerouslySetInnerHTML`-listener door een `ref`-gebaseerde binding op één stabiel formulier, of vervang het formulier door een echte React-component die `onSubmit` gebruikt.
   - JS-error blokkeert mount → fix de root-cause (meestal een import/typo of null-deref).
3. **Fix + verifiëren**: na de aanpassing opnieuw in de preview klikken en de netwerkcall `200` zien; in `workbook_leads` / `contact_aanvragen` verschijnt een nieuwe rij.
4. **Optioneel** (los van deze bug): omdat `vizieropscherp.nl` momenteel naar een WordPress-site wijst en er geen "published build" is, zullen de formulieren op de custom domain sowieso niet werken totdat de Lovable-app gepubliceerd wordt en de DNS naar Lovable wijst. Dat kan ik apart oppakken.

## Wat ik van jou nodig heb

Zodat ik gericht kan reproduceren en fixen, één korte check: **waar** test je de formulieren precies, en **wat** zie je gebeuren?

- Op de Lovable-preview (`id-preview--…lovable.app`) of op `vizieropscherp.nl`?
- Werkboek: opent de popup wel, of gebeurt er niks bij de klik? En bij "Download het werkboek"-knop: krijg je een foutmelding, of blijft hij hangen op "Even geduld…"?
- Contactformulier: krijg je een rode foutmelding onderin, blijft de knop hangen, of doet Versturen niks?

Met dat antwoord voer ik de reproductie uit, wijs de fout precies aan, en pas de fix toe.