Voeg de vijfde kaart 'Nieuwe rol, oude aanpak' toe aan `/coaching-voor-mij`, als derde kaart in de sectie 'Vijf momenten waarop coaching helpt'.

1. Wijzig de H2 van de sectie van 'Vier momenten waarop coaching helpt' naar 'Vijf momenten waarop coaching helpt' in `src/routes/coaching-voor-mij.tsx`.
2. Voeg een nieuwe `.row` kaart toe als derde item in de `.rows` container, tussen 'Doorgroeien of iets heel anders?' en 'Terug na een zware periode'. Gebruik exact de bestaande markup en classes (`<div class="row">` + `<div class="row-title">` + `<p>`).
3. Tekst letterlijk overnemen:
   - Titel: `Nieuwe rol, oude aanpak`
   - Body: `Je hebt de stap gemaakt waar je naartoe werkte: meer verantwoordelijkheid, misschien voor het eerst een team. Maar wat je altijd goed deed, werkt in deze rol ineens niet vanzelf. Knopen doorhakken, loslaten wat je vroeger zelf oppakte, oude collega's aansturen. De rol krijgen bleek makkelijker dan de rol worden.`
4. Behoud alle andere secties, teksten, SEO, metadata en styling ongewijzigd. De `.rows` layout is een enkele kolom, dus geen grid-aanpassing nodig.
5. Controleren: TypeScript check (`bunx tsc --noEmit`) en preview van de `/coaching-voor-mij` pagina op desktop en mobiel.