'use client';

import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

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
        {/* Dark gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-buildla-dark/40 via-buildla-dark/30 to-buildla-dark/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Renovering av ditt hem med fast pris, garanterat resultat, 5 års garanti och personlig projektledning.
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed drop-shadow">
              Få ett fast pris direkt online – för badrum, golv, kök, målning och mer. Vi sköter planering, projektledning och kvalitetssäkring.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <a
              href="https://buildla.se/ai-assistant"
              className="inline-block bg-buildla-accent text-white px-10 py-5 rounded-lg font-semibold hover:bg-white hover:text-buildla-dark transition-all text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-0.5"
            >
              Få prisförslag direkt →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Value Propositions Section with Icons */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/3c1d44f3-17fd-48e4-acd5-652f1991aba7/shield.png', alt: 'Shield', title: 'Fast pris och garanti.', desc: 'Du vet vad det kostar, och arbetet är garanterat i 5 år.' },
              { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/33a78f48-4f89-44b4-827b-f45cf40eab3c/phone.png', alt: 'Phone', title: 'Allt sker digitalt.', desc: 'Beställ, följ upp och kommunicera direkt i mobilen.' },
              { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/a276a0c0-e1a4-45cc-bbc5-31a2c84ebbbf/worker.png', alt: 'Worker', title: 'Byggare som bygger. Projektledare som leder.', desc: 'Hos Buildla gör alla det de är bäst på, och vi tar ansvar för helheten.' },
            ].map((vp, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <Image src={vp.src} alt={vp.alt} width={60} height={60} className="w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-semibold text-buildla-dark mb-3">{vp.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{vp.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-buildla-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-2">
                Våra tjänster
              </h2>
              <p className="text-lg text-gray-600">
                Toppsäljare
              </p>
            </div>
          </FadeIn>

          {/* Top Row - 5 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/e91e4c18-faf6-42ef-93cb-fb2c28691886/P1133915-2.jpg', alt: 'Byta golv', label: 'Byta golv' },
              { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/ee8a0e98-56e5-4526-82fe-589e7cf861e8/rimage.php-14.jpeg', alt: 'Köksrenovering', label: 'Köksrenovering' },
              { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/485a6134-a15d-4607-9ad7-0dd6e4811d81/_Z9A5655-HDR.jpg', alt: 'Renovera badrum', label: 'Renovera badrum' },
              { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/ff2e3ae3-80b4-465f-a3f3-f3e8eea2da6c/P1133879-3.jpg', alt: 'Måla och tapetsera', label: 'Måla och tapetsera' },
              { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/df07c8a2-e9e3-4ef9-ae3d-8ca5e3b29f8d/altan.jpg', alt: 'Altan', label: 'Altan' },
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <a href="https://buildla.se/ai-assistant" className="relative h-48 rounded-lg overflow-hidden group cursor-pointer block shadow-md hover:shadow-xl transition-shadow">
                  <Image src={service.src} alt={service.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent group-hover:from-white/90 transition-colors"></div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="text-buildla-dark font-semibold text-lg drop-shadow-sm">{service.label}</h3>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-semibold text-buildla-dark mb-6">
              Kategorier
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/03e9f3e2-4e6f-484a-ae25-aba3b8e3ce4e/arkitekt.jpg', alt: 'Arkitekt', label: 'Arkitekt' },
                { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/b1cb0ea7-bb45-481e-9e9b-2ee6f8d5e99b/rimage.php-13.jpeg', alt: 'Ny- & tillbyggnad', label: 'Ny- & tillbyggnad' },
                { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/7c10e5b6-d6e1-434a-b4b1-eff22b4f455b/renoverainomhus.jpg', alt: 'Renovera inomhus', label: 'Renovera inomhus' },
                { src: 'https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/b50bc77b-bdcf-408c-b6f1-b8e15e4e33e1/renoverautomhus.jpg', alt: 'Renovera utomhus', label: 'Renovera utomhus' },
              ].map((category, idx) => (
                <FadeIn key={idx} delay={idx * 80}>
                  <a href="https://buildla.se/ai-assistant" className="relative h-40 rounded-lg overflow-hidden group cursor-pointer block shadow-md hover:shadow-xl transition-shadow">
                    <Image src={category.src} alt={category.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent group-hover:from-white/90 transition-colors"></div>
                    <div className="absolute inset-0 flex items-end p-6">
                      <p className="text-buildla-dark font-semibold drop-shadow-sm">{category.label}</p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Mid-page CTA */}
          <FadeIn>
            <div className="mt-16 text-center">
              <a
                href="https://buildla.se/ai-assistant"
                className="inline-block bg-buildla-accent text-white px-10 py-5 rounded-lg font-semibold hover:bg-buildla-dark transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Få ditt fasta pris direkt →
              </a>
              <p className="text-sm text-gray-500 mt-3">Tar bara några minuter</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-6">
                Buildla är här för att göra byggandet till vad det borde vara.
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tänk dig att köpa en bil där du betalar per timme, utan fast pris, leveransdatum eller kvalitetsgaranti&mdash;ingen skulle acceptera det. Ändå är det ofta så byggbranschen fungerar idag, tidsplaner förskjuts, budgetar spricker och kunder saknar information. Branschen är trasig helt enkelt.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Vi är här för att ändra på det, med hjälp av djup expertis från många år i branschen och ny teknik som AI har vi grundat Buildla, ett nytt sätt att bygga. Med Buildla får du tydliga priser, kommunikation och en kvalitetsgaranti. Professionell projektledning med stöd från AI gör att hantverkarna kan fokusera på att bygga, kunderna känner sig trygga och allt bara fungerar.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nåja, helt perfekt är det inte (än), saker dyker fortfarande upp och problem uppstår, men vi vågar påstå att vi redan har kommit en bra bit på vägen. På samma sätt som Uber har gjort det enklare och tryggare att åka taxi, vill vi göra det för byggbranschen genom att lägga till ett lager av transparens, professionalism och ansvarsskyldighet.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vi som grundat Buildla har erfarenhet inom arkitektur, byggledning, AI och management consulting och har upplevt friktionen både som kunder och entreprenörer. Buildla är här för att göra byggandet till vad det borde vara: enkelt, pålitligt och bra. Följ med på resan, prova ett nytt sätt att bygga.
              </p>
              <a
                href="/om-oss"
                className="text-buildla-accent font-semibold hover:text-buildla-dark transition-colors inline-flex items-center gap-2"
              >
                Läs mer om varför →
              </a>
            </FadeIn>
            <FadeIn direction="right" delay={150}>
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/1711442131416-AJL2FYKOCIFWB1RP1OGA/image-asset.jpeg"
                  alt="Om Buildla"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24 bg-buildla-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header + intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <FadeIn direction="left">
              <div className="relative h-72 lg:h-full min-h-72 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/1711442131416-AJL2FYKOCIFWB1RP1OGA/image-asset.jpeg"
                  alt="Buildla projekt"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={150}>
              <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-6">
                Vad som ofta går fel – och hur Buildla gör det rätt
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Många av problemen i byggbranschen handlar inte om ovilja – utan om brist på struktur, tydliga roller och kompetens. Hantverkare är experter på att bygga, men förväntas samtidigt hantera tidsplaner, kommunikation, budget och risk. Det är inte rimligt. Det är som att be en kock sköta restaurangens ekonomi, kundtjänst och marknadsföring samtidigt som hen lagar maten. Resultatet blir att saker faller mellan stolarna.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Buildla fungerar som ett gränssnitt mellan kund och hantverkare – ett operativt lager som översätter behov till genomförande, samordnar alla steg och minskar friktionen längs vägen. Vi tar ansvar för planering, kommunikation, kvalitet och uppföljning, så att du vet vad du får, vad det kostar och när det blir klart. Hantverkaren får tydliga förutsättningar att göra ett bra jobb – du får ett resultat som håller vad det lovar.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-6">
            {/* Problem 1 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-buildla-accent shadow-md hover:shadow-lg transition-shadow">
              <p className="text-sm font-semibold text-buildla-sage uppercase tracking-wide mb-1">Vanligt problem</p>
              <h3 className="text-xl font-semibold text-buildla-dark mb-4">
                Du vet inte vad det kommer att kosta
              </h3>
              <div className="ml-4 space-y-3">
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Varför det händer</p>
                  <p className="text-gray-600">
                    Prissättning sker ofta på känsla, utifrån individuell erfarenhet. Utan rätt struktur och historisk data att utgå ifrån blir resultatet en gissningslek med hög risk för både utförare och kund.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Hur Buildla löser det</p>
                  <p className="text-gray-600">
                    Vi ger fast pris i förväg baserat på projektets faktiska parametrar. Vår AI-baserade kalkylmotor garanterar rättvis och tydlig prissättning för båda parter, baserat på liknande projekt.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-buildla-accent shadow-md hover:shadow-lg transition-shadow">
              <p className="text-sm font-semibold text-buildla-sage uppercase tracking-wide mb-1">Vanligt problem</p>
              <h3 className="text-xl font-semibold text-buildla-dark mb-4">
                Tidsplanen spricker
              </h3>
              <div className="ml-4 space-y-3">
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Varför det händer</p>
                  <p className="text-gray-600">
                    Dålig planering, bristande koordinering mellan hantverkare och dubbelbokningar. Kommunikation sker ofta via sms och telefonsamtal direkt med hantverkaren, vilket gör det svårt att få överblick och ha koll på vad som sagts.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Hur Buildla löser det</p>
                  <p className="text-gray-600">
                    Du får en realistisk tidplan och löpande uppföljning under projektets gång. Vi inkluderar alltid professionell projektledning så att du har en tydlig kontaktyta och får löpande statusuppdateringar digitalt.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-buildla-accent shadow-md hover:shadow-lg transition-shadow">
              <p className="text-sm font-semibold text-buildla-sage uppercase tracking-wide mb-1">Vanligt problem</p>
              <h3 className="text-xl font-semibold text-buildla-dark mb-4">
                Otydligt ansvar om något går fel
              </h3>
              <div className="ml-4 space-y-3">
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Varför det händer</p>
                  <p className="text-gray-600">
                    Otydliga kontrakt och uppdragsbeskrivningar gör det oklart vem som är ansvarig – hantverkare, underentreprenör eller kunden själv.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Hur Buildla löser det</p>
                  <p className="text-gray-600">
                    Buildla tar ansvar för hela projektleveransen och använder enkla, tydliga kontrakt där det framgår vem som ansvarar för vad mellan kunden och Buildla. Om det ändå skulle uppstå oklarheter används en oberoende byggnadsinspektör som granskar kontrakt och leverans.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 4 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-buildla-accent shadow-md hover:shadow-lg transition-shadow">
              <p className="text-sm font-semibold text-buildla-sage uppercase tracking-wide mb-1">Vanligt problem</p>
              <h3 className="text-xl font-semibold text-buildla-dark mb-4">
                Krångligt och tidskrävande att jämföra och beställa
              </h3>
              <div className="ml-4 space-y-3">
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Varför det händer</p>
                  <p className="text-gray-600">
                    Offertprocessen är manuell och omständig, det är svårt att få en överblick av vad som ingår. Ofta behöver du som kund själv kontakta flera entreprenörer, ta in offerter som kräver hembesök och sedan jämföra alternativen.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Hur Buildla löser det</p>
                  <p className="text-gray-600">
                    Du får ett fast pris direkt online baserat på tydliga projektdefinitioner. Ingen behöver komma hem till dig, och du slipper försöka tolka och jämföra olika upplägg. Allt sker digitalt – du kan beställa med mobilen. Det sparar tid både för dig och hantverkaren.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 5 */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-buildla-accent shadow-md hover:shadow-lg transition-shadow">
              <p className="text-sm font-semibold text-buildla-sage uppercase tracking-wide mb-1">Vanligt problem</p>
              <h3 className="text-xl font-semibold text-buildla-dark mb-4">
                Kvalitetsbrister i utförandet
              </h3>
              <div className="ml-4 space-y-3">
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Varför det händer</p>
                  <p className="text-gray-600">
                    Det saknas struktur för att styra kvalitet och följa upp arbetet.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-buildla-dark mb-2">Hur Buildla löser det</p>
                  <p className="text-gray-600">
                    Vi har en process för kvalitetskontroll före, under och efter projekt. Betalning sker först när arbetet är färdigt och utfört med rätt kvalitet. Vid tveksamheter anlitas en oberoende byggnadsinspektör.
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
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-12 text-center">
              Våra projekt
            </h2>
          </FadeIn>
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
              <FadeIn key={idx} delay={idx * 100}>
                <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </FadeIn>
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
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Redo att börja renovera?
            </h2>
          </FadeIn>
          <FadeIn delay={150}>
            <a
              href="https://buildla.se/ai-assistant"
              className="inline-block bg-buildla-accent text-white px-10 py-5 rounded-lg font-semibold hover:bg-white hover:text-buildla-dark transition-all text-lg shadow-2xl hover:-translate-y-0.5"
            >
              Få prisförslag direkt →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-6">
                Kontakta oss
              </h2>
              <p className="text-gray-600 mb-8">
                Har du frågor eller vill veta mer om Buildla? Vi är här för att hjälpa.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-buildla-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-buildla-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-buildla-dark mb-1">Email</h3>
                    <a href="mailto:info@buildla.se" className="text-buildla-accent hover:text-buildla-dark transition-colors">
                      info@buildla.se
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-buildla-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-buildla-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-buildla-dark mb-1">Telefon</h3>
                    <a href="tel:+46721731730" className="text-buildla-accent hover:text-buildla-dark transition-colors">
                      072-173 17 30
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-buildla-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-buildla-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-buildla-dark mb-1">Adress</h3>
                    <p className="text-gray-600">
                      Klarälvsvägen 40<br />
                      128 44 Bagarmossen
                    </p>
                  </div>
                </div>
                <div className="pt-2 text-sm text-gray-400">
                  Buildla är en del av Folkbostaden Stockholm AB
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={150}>
            <div className="rounded-lg overflow-hidden h-80 md:h-full md:min-h-96 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040.5!2d18.1387!3d59.2783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f0a5b7c5e1%3A0x0!2sKlar%C3%A4lvsv%C3%A4gen%2040%2C%20128%2044%20Bagarmossen!5e0!3m2!1ssv!2sse!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Buildla kontor"
              ></iframe>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
