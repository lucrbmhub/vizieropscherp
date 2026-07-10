## Waarom het nu niet goed staat

De originele `public/styles.css` is voornamelijk voor desktop ontworpen. Er staan maar drie kleine media queries onderaan (1060px, 860px, 620px) en die dekken vooral de grid-kolommen. De rest — typografie, padding, navigatie, hero, kaarten — blijft op een telefoon (390px) even groot als op desktop. Concrete pijnpunten die ik zie:

1. **Navigatie**: `.main-nav` toont álle links naast elkaar. Op mobiel wrapt dat naar 3-4 regels; er is geen hamburger.
2. **Hero-padding**: `.hero-pad` blijft 84px boven/76px onder — te veel op mobiel.
3. **Section-padding**: `.section` = 96px verticaal; op mobiel wordt dat overweldigend (620px query verlaagt naar 64px, maar 860px/tablet niet).
4. **Watermerk**: `.watermark` is 460px en staat op `right:-150px` → veroorzaakt horizontale scroll op smalle schermen (geen `overflow:hidden` op `body`).
5. **Float-card**: `.float-card` staat op `left:-36px` → steekt buiten het scherm.
6. **Kaarten**: `.card` padding 32px is te veel op 350px breed; koppen (h-hero clamp start bij 42px) prima, maar `.h-section` clamp start op 30px — ok.
7. **Rijen met hangende titel**: `.row` en `.vrail-item` hebben vaste 260-280px kolommen; de 860px-breakpoint zet ze naar 1fr, maar tussen 861-1060px (tablet landscape) blijven ze ongemakkelijk smal.
8. **Facet-CTA**: `.facet-inner` heeft `padding:52px 60px` en clip-path met 22px hoeken — op mobiel wordt de override naar 36px 28px pas onder 620px toegepast; tussen 621-860px oogt het krap.
9. **Footer-grid**: 4 kolommen → 620px query naar 1 kolom, maar de tussenstap ontbreekt voor tablet (nu wel 2 kolommen vanaf 1060px, dat is ok).
10. **Header**: geen mobiel menu; logo + 6 nav-items + CTA passen niet naast elkaar onder 900px.

## Plan

Alle wijzigingen alleen in `public/styles.css` (en een klein stukje JS/HTML voor de hamburger-toggle). Ik verander niets aan de content of aan de bestaande desktop-look.

### 1. Body/overflow

- `body { overflow-x: hidden }` om te voorkomen dat het watermerk en float-card horizontale scroll veroorzaken.

### 2. Nieuwe/uitgebreide media queries

**@media (max-width: 900px)** — mobiel hamburger:
- `.main-nav` verbergen achter een toggle (`display:none` → `display:flex` bij `.open`), positioneren als dropdown-panel onder de header, kolommen stapelen.
- Hamburger-knop tonen (nieuwe `.nav-toggle` button in de header van elke pagina).

**@media (max-width: 860px)** — uitbreiden:
- `.hero-pad { padding: 56px 0 48px }`
- `.section { padding: 72px 0 }`
- `.hero-media { margin-bottom: -60px }`
- `.overlap-pad { padding-top: 110px !important }`
- `.facet-inner { padding: 40px 32px; gap: 28px }`
- `.footer-grid { gap: 32px }`

**@media (max-width: 620px)** — versterken:
- `.hero-pad { padding: 40px 0 36px }`
- `.section { padding: 48px 0 }`
- `.card { padding: 22px }`
- `.float-card { position: static; width: 100%; margin-top: 20px; left: auto; bottom: auto }` (uit de overlap halen, netjes onder de foto)
- `.watermark { display: none }` (visueel niet essentieel; wint ruimte + geen overflow-risico)
- `.hero-media { margin-bottom: 0 }` en `.overlap-pad { padding-top: 48px !important }` (overlap uitzetten)
- `.header-inner { min-height: 56px }`
- `.brand span { font-size: 17px }`
- `.facet-inner { padding: 28px 20px }`
- `.coach { gap: 16px }` en `.avatar { width: 60px; height: 60px; font-size: 20px }`
- `.vrail-item, .row` → titel-kolom volledige breedte (al gedekt door 860px, extra `gap: 8px 0`).
- `.faq summary { font-size: 17px; padding: 16px 0 }`

### 3. Hamburger-menu

- Voeg in elke route-HTML (`src/routes/*.tsx`) binnen `.site-header` een `<button class="nav-toggle" aria-label="Menu">` toe.
- Voeg CSS toe voor `.nav-toggle` (drie streepjes, alleen zichtbaar < 900px) en de open-state van `.main-nav`.
- Klein globaal script in `src/routes/__root.tsx` (of losse component) dat op click de `open`-klasse toggelt op `.main-nav`.

### 4. Verificatie

Na de wijziging screenshot maken via Playwright op 390px, 768px en 1280px en visueel bevestigen dat:
- geen horizontale scroll
- hamburger opent/sluit
- hero, secties en kaarten hebben passende ademruimte
- float-card en watermerk gedragen zich netjes

## Vraag voor jou

Wil je dat ik het hamburger-menu ook echt toevoeg (aanpassing in HTML van 8 routes + kleine JS), of vind je het genoeg om de nav gewoon te laten wrappen op mobiel maar netter (kleinere links, meer ruimte)?

- **Optie A — Hamburger** (aanbevolen): schoon mobiel menu, kost een kleine HTML/JS-toevoeging in de bestaande pagina's.
- **Optie B — Alleen CSS**: nav blijft wrappen in 2 regels maar compacter (font kleiner, gap kleiner, CTA onder).

Laat weten welke en ik voer het plan uit.
