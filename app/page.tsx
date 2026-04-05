'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Screen with Background Image */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/dbffcb17-3894-472f-bc83-9619ddbbd266/_Z9A5625-HDR.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Sage Green Overlay */}
        <div className="absolute inset-0 bg-buildla-sage opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Renovering av ditt hem med fast pris, garanterat resultat, 5 års garanti och personlig projektledning.
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto opacity-95 leading-relaxed">
            Få ett fast pris direkt online – för badrum, golv, kök, målning och mer. Vi sköter planering, projektledning och kvalitetssäkring.
          </p>
          <a
            href="https://buildla.se/ai-assistant"
            className="inline-block bg-buildla-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-buildla-dark transition-colors text-lg"
          >
            Få prisförslag direkt
          </a>
        </div>
      </section>

      {/* Value Propositions Section with Icons */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Value Prop 1 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/3c1d44f3-17fd-48e4-acd5-652f1991aba7/shield.png"
                  alt="Shield icon"
                  width={60}
                  height={60}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Fast pris och garanti.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Du vet vad det kostar, och arbetet är garanterat i 5 år.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/33a78f48-4f89-44b4-827b-f45cf40eab3c/phone.png"
                  alt="Phone icon"
                  width={60}
                  height={60}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Allt sker digitalt.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Beställ, följ upp och kommunicera direkt i mobilen.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/a276a0c0-e1a4-45cc-bbc5-31a2c84ebbbf/worker.png"
                  alt="Worker icon"
                  width={60}
                  height={60}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Byggare som bygger. Projektledare som leder.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hos Buildla gör alla det de är bäst på, och vi tar ansvar för helheten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-buildla-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-2">
              Våra tjänster
            </h2>
            <p className="text-lg text-gray-600">
              Toppsäljare
            </p>
          </div>

          {/* Top Row - 5 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {/* Byta golv */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/e91e4c18-faf6-42ef-93cb-fb2c28691886/P1133915-2.jpg"
                alt="Byta golv"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white font-semibold text-lg">Byta golv</h3>
              </div>
            </div>

            {/* Köksrenovering */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/ee8a0e98-56e5-4526-82fe-589e7cf861e8/rimage.php-14.jpeg"
                alt="Köksrenovering"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white font-semibold text-lg">Köksrenovering</h3>
              </div>
            </div>

            {/* Renovera badrum */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/485a6134-a15d-4607-9ad7-0dd6e4811d81/_Z9A5655-HDR.jpg"
                alt="Renovera badrum"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white font-semibold text-lg">Renovera badrum</h3>
              </div>
            </div>

            {/* Måla och tapetsera */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/ff2e3ae3-80b4-465f-a3f3-f3e8eea2da6c/P1133879-3.jpg"
                alt="Måla och tapetsera"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white font-semibold text-lg">Måla och tapetsera</h3>
              </div>
            </div>

            {/* Altan */}
            <div className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/df07c8a2-e9e3-4ef9-ae3d-8ca5e3b29f8d/altan.jpg"
                alt="Altan"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-white font-semibold text-lg">Altan</h3>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-semibold text-buildla-dark mb-6">
              Kategorier
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Arkitekt */}
              <div className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/03e9f3e2-4e6f-484a-ae25-aba3b8e3ce4e/arkitekt.jpg"
                  alt="Arkitekt"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <p className="text-white font-semibold">Arkitekt</p>
                </div>
              </div>

              {/* Ny- & tillbyggnad */}
              <div className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/b1cb0ea7-bb45-481e-9e9b-2ee6f8d5e99b/rimage.php-13.jpeg"
                  alt="Ny- & tillbyggnad"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <p className="text-white font-semibold">Ny- & tillbyggnad</p>
                </div>
              </div>

              {/* Renovera inomhus */}
              <div className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/7c10e5b6-d6e1-434a-b4b1-eff22b4f455b/renoverainomhus.jpg"
                  alt="Renovera inomhus"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <p className="text-white font-semibold">Renovera inomhus</p>
                </div>
              </div>

              {/* Renovera utomhus */}
              <div className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/b50bc77b-bdcf-408c-b6f1-b8e15e4e33e1/renoverautomhus.jpg"
                  alt="Renovera utomhus"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <p className="text-white font-semibold">Renovera utomhus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-6">
                Buildla är här för att göra byggandet till vad det borde vara.
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tänk dig att köpa en bil där du betalar per timme, utan fast pris, leveransdatum eller kvalitetsgaranti — ingen skulle acceptera det. Ändå är det ofta så byggbranschen fungerar idag. Vi är här för att ändra på det.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Med Buildla får du tydliga priser, kommunikation och en kvalitetsgaranti. Professionell projektledning med stöd från AI gör att hantverkarna kan fokusera på att bygga, kunderna känner sig trygga och allt bara fungerar.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                På samma sätt som Uber har gjort det enklare och tryggare att åka taxi, vill vi göra det för byggbranschen genom att lägga till ett lager av transparens, professionalism och ansvarsskyldighet.
              </p>
              <a
                href="/om-oss"
                className="text-buildla-accent font-semibold hover:text-buildla-dark transition-colors inline-flex items-center gap-2"
              >
                Läs mer om varför →
              </a>
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/1711442131416-AJL2FYKOCIFWB1RP1OGA/image-asset.jpeg"
                alt="Om Buildla"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24 bg-buildla-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-4">
              Vad som ofta går fel – och hur Buildla gör det rätt
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi förstår de vanligaste problemen när du renoverar hemmet. Här är hur vi löser dem.
            </p>
          </div>

          <div className="space-y-6">
            {/* Problem 1 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-buildla-accent">
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Du vet inte vad det kommer att kosta
              </h3>
              <div className="ml-4 space-y-2">
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Varför det händer</p>
                  <p className="text-gray-600">
                    Många byggare arbetar på timmar eller löpande räkning. Det är enkelt för dem att börja ett projekt, men det gör det omöjligt för dig att veta slutkostnaden. Ofta dyker det upp "överraskningar" under vägen som man inte räknat med – skadade delar som behöver bytas, dolda problem bakom väggarna, eller ändringar i specifikationen.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Hur Buildla löser det</p>
                  <p className="text-gray-600">
                    Vi använder AI, historisk data och djupa kunskaper om byggbranschen för att ge dig ett fast pris innan vi börjar. Det priset är garanterat – om något oväntad dyker upp, tar vi kostnaden. Du vet exakt vad allt kostar innan du skriver under.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-buildla-accent">
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Tidsplanen spricker
              </h3>
              <div className="ml-4 space-y-2">
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Varför det händer</p>
                  <p className="text-gray-600">
                    De flesta byggprojekt startar utan någon ordentlig plan. Byggarna får ett uppdrag, kommer när de kan, och gissar på hur lång tid det tar. Om de får ett annat luckerativt jobb på vägen, sätter de det här på pausad. Inga deadlines, ingen konsekvens för att inte hålla tiden.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Hur Buildla löser det</p>
                  <p className="text-gray-600">
                    Vi planerar allt i förväg – material, arbetskraft, tidslinjer. Vi har dedikerad projektledning som säkerställer att alla vet när och hur allt ska genomföras. Vi bokar byggarna specifika datum och garanterar att de är där. Om något går fel, har vi en backup-plan. Du vet exakt när vi kommer och när vi är klara.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-buildla-accent">
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Otydligt ansvar om något går fel
              </h3>
              <div className="ml-4 space-y-2">
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Varför det händer</p>
                  <p className="text-gray-600">
                    Om något går fel under konstruktionen – ett misstag, en skada, något som inte motsvarar specifikationen – är det ofta otydligt vem som är ansvarig. Byggaren säger att materialleverantören hade fel material. Materialleverantören säger att byggaren använde det fel. Du hamnar i mitten och måste själv försöka lösa det.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Hur Buildla löser det</p>
                  <p className="text-gray-600">
                    Vi tar ansvar för allt – från material till slutförande. Du behöver bara kontakta oss. Vi löser det, eller betalar för att få det löst. Vi ger 5 års garanti på allt arbete, vilket betyder att vi står bakom det vi gör långt efter projektets slut. Du vet exakt vem du ska ringa om något inte är rätt.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 4 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-buildla-accent">
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Krångligt och tidskrävande att jämföra och beställa
              </h3>
              <div className="ml-4 space-y-2">
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Varför det händer</p>
                  <p className="text-gray-600">
                    Idag måste du ringa eller maila ett dussin olika byggare för att få offerter. Vart erbjudande ser olika ut – andra priser, andra villkor, andra garantier. Du kan inte jämföra äpplen med äpplen. Och sen måste du förhandla, maila fram och tillbaka, och i slutändan förlita dig på att det blir gjort.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Hur Buildla löser det</p>
                  <p className="text-gray-600">
                    Allt går online. Du svarar på några enkla frågor i vår app, och på några minuter får du ett fast pris och en detaljerad offert. Du godkänner den direkt i mobilen och kan följa projektet från början till slut utan att behöva ringa eller skicka e-post. Allt är digitalt, enkelt och transparent.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 5 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-buildla-accent">
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Kvalitetsbrister i utförandet
              </h3>
              <div className="ml-4 space-y-2">
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Varför det händer</p>
                  <p className="text-gray-600">
                    Många byggare jobbar under tidspress och ekonomisk press. De behöver bara komma vidare till nästa jobb. Det finns ingen incitament för att göra det extra bra, och ingen slutkontroll av någon oberoende part. Ofta märker du problemen först senare – en fogning som spricker, paint som började skala av, eller något som inte ligger rätt.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Hur Buildla löser det</p>
                  <p className="text-gray-600">
                    Vi har en grundlig slutkontroll hvor både byggaren och en oberoende projektledare kollar allt. Vi använder checklistor och fotograferar allt för att dokumentera standarden. Vi betalar byggarna baserat på att de gör det rätt, inte bara på att de blir klara. Och vi ger 5 års garanti så vi måste själva laga allt som inte håller kvalitet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-12 text-center">
            Våra projekt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/e91e4c18-faf6-42ef-93cb-fb2c28691886/P1133915-2.jpg',
                alt: 'Projekt 1',
              },
              {
                src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/ee8a0e98-56e5-4526-82fe-589e7cf861e8/rimage.php-14.jpeg',
                alt: 'Projekt 2',
              },
              {
                src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/485a6134-a15d-4607-9ad7-0dd6e4811d81/_Z9A5655-HDR.jpg',
                alt: 'Projekt 3',
              },
              {
                src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/ff2e3ae3-80b4-465f-a3f3-f3e8eea2da6c/P1133879-3.jpg',
                alt: 'Projekt 4',
              },
              {
                src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/df07c8a2-e9e3-4ef9-ae3d-8ca5e3b29f8d/altan.jpg',
                alt: 'Projekt 5',
              },
              {
                src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/1cee3b8b-84e8-4c51-a36f-fb72226a2a3b/Buildla+app.png',
                alt: 'Projekt 6',
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width with Background Image */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden py-16 md:py-24">
        {/* Background Image */}
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/9e7cb3b9-7df8-4e7e-91b8-dd4f4e78e3e5/P1133915-3.jpg"
          alt="CTA background"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Redo att börja renovera?
          </h2>
          <p className="text-lg text-white mb-8 opacity-90">
            Få ett personligt prisförslag direkt online. Det tar bara några minuter.
          </p>
          <a
            href="https://buildla.se/ai-assistant"
            className="inline-block bg-buildla-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-buildla-dark transition-colors text-lg"
          >
            Få prisförslag direkt
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-6">
                Kontakta oss
              </h2>
              <p className="text-gray-600 mb-8">
                Har du frågor eller vill veta mer om Buildla? Vi är här för att hjälpa.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-buildla-dark mb-2">Email</h3>
                  <a
                    href="mailto:info@buildla.se"
                    className="text-buildla-accent hover:text-buildla-dark transition-colors"
                  >
                    info@buildla.se
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-buildla-dark mb-2">Telefon</h3>
                  <a
                    href="tel:+46701234567"
                    className="text-buildla-accent hover:text-buildla-dark transition-colors"
                  >
                    +46 70 123 45 67
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-buildla-dark mb-2">Adress</h3>
                  <p className="text-gray-600">
                    Buildla AB<br />
                    Stockholm, Sverige
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-buildla-light rounded-lg p-8 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">📍</div>
                <p>Kontaktformulär eller karta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
