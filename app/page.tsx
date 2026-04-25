'use client';

import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import Icon from '@/components/Icon';

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Screen with Background Image */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero.webp"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Soft gradient overlay — focused at bottom so the room breathes at top */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(30,42,36,0.20) 0%, rgba(30,42,36,0.15) 40%, rgba(30,42,36,0.55) 100%)',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <h1
              className="display-hero text-white"
              style={{ marginBottom: 24, textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}
            >
              Renovering av ditt hem med fast pris, garanterat resultat, 5 års garanti och personlig projektledning.
            </h1>
          </FadeIn>
          <FadeIn delay={280}>
            <p
              className="body-lg-ds text-white"
              style={{ maxWidth: 640, margin: '0 auto 40px', opacity: 0.92, textShadow: '0 1px 12px rgba(0,0,0,0.3)' }}
            >
              Få ett fast pris direkt online – för badrum, golv, kök, målning och mer. Vi sköter planering, projektledning och kvalitetssäkring.
            </p>
          </FadeIn>
          <FadeIn delay={460}>
            <a
              href="https://buildla.se/ai-assistant"
              className="focus-ring"
              style={{
                display: 'inline-block',
                background: 'var(--buildla-accent)',
                color: 'white',
                padding: '20px 40px',
                borderRadius: 'var(--r-md)',
                fontWeight: 600,
                fontSize: 18,
                boxShadow: 'var(--shadow-xl)',
                transition: 'background 180ms var(--ease), transform 180ms var(--ease), box-shadow 180ms var(--ease)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--buildla-dark)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--buildla-accent)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.98)'; }}
              onMouseUp={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            >
              Få prisförslag direkt →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Value Propositions Section — DS Pillars (dark accent cards) */}
      <section className="py-16 md:py-24" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {([
              { icon: 'shield' as const, title: 'Fast pris och garanti.', desc: 'Du vet vad det kostar, och arbetet är garanterat i 5 år.' },
              { icon: 'phone' as const, title: 'Allt sker digitalt.', desc: 'Beställ, följ upp och kommunicera direkt i mobilen.' },
              { icon: 'worker' as const, title: 'Byggare som bygger. Projektledare som leder.', desc: 'Hos Buildla gör alla det de är bäst på, och vi tar ansvar för helheten.' },
            ]).map((vp, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div
                  style={{
                    background: 'var(--buildla-accent)',
                    color: 'var(--buildla-light)',
                    borderRadius: 'var(--r-lg)',
                    padding: '24px 24px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--r-md)',
                      background: 'rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name={vp.icon} size={22} stroke={1.75} color="var(--buildla-light)" />
                  </div>
                  <h3
                    style={{
                      color: 'var(--buildla-light)',
                      margin: 0,
                      font: '600 19px/1.3 var(--font-sans)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {vp.title}
                  </h3>
                  <p
                    style={{
                      color: 'rgba(245,245,240,0.7)',
                      margin: 0,
                      font: '400 14px/1.55 var(--font-sans)',
                    }}
                  >
                    {vp.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24" style={{ background: 'var(--buildla-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="h2-display" style={{ color: 'var(--buildla-accent)', marginBottom: 8 }}>
                Våra tjänster
              </h2>
              <p style={{ color: 'var(--fg-2)', fontSize: 18 }}>
                Toppsäljare
              </p>
            </div>
          </FadeIn>

          {/* Top Row - 5 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              { src: '/images/service-golv.webp', alt: 'Byta golv', label: 'Byta golv' },
              { src: '/images/service-kok.webp', alt: 'Köksrenovering', label: 'Köksrenovering' },
              { src: '/images/service-badrum.webp', alt: 'Renovera badrum', label: 'Renovera badrum' },
              { src: '/images/service-malning.webp', alt: 'Måla och tapetsera', label: 'Måla och tapetsera' },
              { src: '/images/service-altan.webp', alt: 'Altan', label: 'Altan' },
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <a
                  href="https://buildla.se/ai-assistant"
                  className="focus-ring"
                  style={{
                    position: 'relative',
                    height: 192,
                    borderRadius: 'var(--r-lg)',
                    overflow: 'hidden',
                    display: 'block',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'box-shadow 280ms var(--ease), transform 280ms var(--ease)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Image
                    src={service.src}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    style={{ transition: 'transform 500ms var(--ease)' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(0deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.30) 50%, rgba(255,255,255,0) 100%)',
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3
                      style={{
                        color: 'var(--buildla-accent)',
                        font: '600 18px/1.2 var(--font-sans)',
                        letterSpacing: '-0.005em',
                        margin: 0,
                      }}
                    >
                      {service.label}
                    </h3>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Categories Section */}
          <div>
            <h3
              style={{
                color: 'var(--buildla-accent)',
                font: '600 22px/1.3 var(--font-sans)',
                letterSpacing: '-0.005em',
                marginBottom: 24,
              }}
            >
              Kategorier
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { src: '/images/kategori-arkitekt.webp', alt: 'Arkitekt', label: 'Arkitekt' },
                { src: '/images/kategori-tillbyggnad.webp', alt: 'Ny- & tillbyggnad', label: 'Ny- & tillbyggnad' },
                { src: '/images/kategori-inomhus.webp', alt: 'Renovera inomhus', label: 'Renovera inomhus' },
                { src: '/images/kategori-utomhus.webp', alt: 'Renovera utomhus', label: 'Renovera utomhus' },
              ].map((category, idx) => (
                <FadeIn key={idx} delay={idx * 80}>
                  <a
                    href="https://buildla.se/ai-assistant"
                    className="focus-ring"
                    style={{
                      position: 'relative',
                      height: 160,
                      borderRadius: 'var(--r-lg)',
                      overflow: 'hidden',
                      display: 'block',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'box-shadow 280ms var(--ease), transform 280ms var(--ease)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Image
                      src={category.src}
                      alt={category.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(0deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.30) 50%, rgba(255,255,255,0) 100%)',
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-end p-6">
                      <p
                        style={{
                          color: 'var(--buildla-accent)',
                          font: '600 16px/1.2 var(--font-sans)',
                          margin: 0,
                        }}
                      >
                        {category.label}
                      </p>
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
                className="focus-ring"
                style={{
                  display: 'inline-block',
                  background: 'var(--buildla-accent)',
                  color: 'white',
                  padding: '20px 40px',
                  borderRadius: 'var(--r-md)',
                  fontWeight: 600,
                  fontSize: 18,
                  boxShadow: 'var(--shadow-md)',
                  transition: 'background 180ms var(--ease), transform 180ms var(--ease), box-shadow 180ms var(--ease)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--buildla-dark)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--buildla-accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                Få ditt fasta pris direkt →
              </a>
              <p className="meta-label" style={{ marginTop: 16, color: 'var(--fg-3)' }}>
                Tar bara några minuter
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <h2 className="h2-display" style={{ color: 'var(--buildla-accent)', marginBottom: 24 }}>
                Buildla är här för att göra byggandet till vad det borde vara.
              </h2>
              <p style={{ color: 'var(--fg-2)', marginBottom: 16, lineHeight: 1.7 }}>
                Tänk dig att köpa en bil där du betalar per timme, utan fast pris, leveransdatum eller kvalitetsgaranti&mdash;ingen skulle acceptera det. Ändå är det ofta så byggbranschen fungerar idag, tidsplaner förskjuts, budgetar spricker och kunder saknar information. Branschen är trasig helt enkelt.
              </p>
              <p style={{ color: 'var(--fg-2)', marginBottom: 16, lineHeight: 1.7 }}>
                Vi är här för att ändra på det, med hjälp av djup expertis från många år i branschen och ny teknik som AI har vi grundat Buildla, ett nytt sätt att bygga. Med Buildla får du tydliga priser, kommunikation och en kvalitetsgaranti. Professionell projektledning med stöd från AI gör att hantverkarna kan fokusera på att bygga, kunderna känner sig trygga och allt bara fungerar.
              </p>
              <p style={{ color: 'var(--fg-2)', marginBottom: 16, lineHeight: 1.7 }}>
                Nåja, helt perfekt är det inte (än), saker dyker fortfarande upp och problem uppstår, men vi vågar påstå att vi redan har kommit en bra bit på vägen. På samma sätt som Uber har gjort det enklare och tryggare att åka taxi, vill vi göra det för byggbranschen genom att lägga till ett lager av transparens, professionalism och ansvarsskyldighet.
              </p>
              <p style={{ color: 'var(--fg-2)', marginBottom: 24, lineHeight: 1.7 }}>
                Vi som grundat Buildla har erfarenhet inom arkitektur, byggledning, AI och management consulting och har upplevt friktionen både som kunder och entreprenörer. Buildla är här för att göra byggandet till vad det borde vara: enkelt, pålitligt och bra. Följ med på resan, prova ett nytt sätt att bygga.
              </p>
              <a
                href="/om-oss"
                className="focus-ring"
                style={{
                  color: 'var(--buildla-accent)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'color 180ms var(--ease), gap 180ms var(--ease)',
                }}
                onMouseEnter={e => { e.currentTarget.style.gap = '12px'; }}
                onMouseLeave={e => { e.currentTarget.style.gap = '8px'; }}
              >
                Läs mer om varför →
              </a>
            </FadeIn>
            <FadeIn direction="right" delay={120}>
              <div
                style={{
                  position: 'relative',
                  height: 384,
                  width: '100%',
                  borderRadius: 'var(--r-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <Image
                  src="/images/om-buildla.webp"
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
      <section className="py-16 md:py-24" style={{ background: 'var(--buildla-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header + intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <FadeIn direction="left">
              <div
                style={{
                  position: 'relative',
                  height: 288,
                  minHeight: 288,
                  borderRadius: 'var(--r-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                }}
                className="lg:h-full"
              >
                <Image
                  src="/images/problem-solution.webp"
                  alt="Buildla projekt"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={120}>
              <h2 className="h2-display" style={{ color: 'var(--buildla-accent)', marginBottom: 24 }}>
                Vad som ofta går fel – och hur Buildla gör det rätt
              </h2>
              <p style={{ color: 'var(--fg-2)', marginBottom: 16, lineHeight: 1.7 }}>
                Många av problemen i byggbranschen handlar inte om ovilja – utan om brist på struktur, tydliga roller och kompetens. Hantverkare är experter på att bygga, men förväntas samtidigt hantera tidsplaner, kommunikation, budget och risk. Det är inte rimligt. Det är som att be en kock sköta restaurangens ekonomi, kundtjänst och marknadsföring samtidigt som hen lagar maten. Resultatet blir att saker faller mellan stolarna.
              </p>
              <p style={{ color: 'var(--fg-2)', lineHeight: 1.7 }}>
                Buildla fungerar som ett gränssnitt mellan kund och hantverkare – ett operativt lager som översätter behov till genomförande, samordnar alla steg och minskar friktionen längs vägen. Vi tar ansvar för planering, kommunikation, kvalitet och uppföljning, så att du vet vad du får, vad det kostar och när det blir klart. Hantverkaren får tydliga förutsättningar att göra ett bra jobb – du får ett resultat som håller vad det lovar.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Du vet inte vad det kommer att kosta',
                why: 'Prissättning sker ofta på känsla, utifrån individuell erfarenhet. Utan rätt struktur och historisk data att utgå ifrån blir resultatet en gissningslek med hög risk för både utförare och kund.',
                sol: 'Vi ger fast pris i förväg baserat på projektets faktiska parametrar. Vår AI-baserade kalkylmotor garanterar rättvis och tydlig prissättning för båda parter, baserat på liknande projekt.',
              },
              {
                title: 'Tidsplanen spricker',
                why: 'Dålig planering, bristande koordinering mellan hantverkare och dubbelbokningar. Kommunikation sker ofta via sms och telefonsamtal direkt med hantverkaren, vilket gör det svårt att få överblick och ha koll på vad som sagts.',
                sol: 'Du får en realistisk tidplan och löpande uppföljning under projektets gång. Vi inkluderar alltid professionell projektledning så att du har en tydlig kontaktyta och får löpande statusuppdateringar digitalt.',
              },
              {
                title: 'Otydligt ansvar om något går fel',
                why: 'Otydliga kontrakt och uppdragsbeskrivningar gör det oklart vem som är ansvarig – hantverkare, underentreprenör eller kunden själv.',
                sol: 'Buildla tar ansvar för hela projektleveransen och använder enkla, tydliga kontrakt där det framgår vem som ansvarar för vad mellan kunden och Buildla. Om det ändå skulle uppstå oklarheter används en oberoende byggnadsinspektör som granskar kontrakt och leverans.',
              },
              {
                title: 'Krångligt och tidskrävande att jämföra och beställa',
                why: 'Offertprocessen är manuell och omständig, det är svårt att få en överblick av vad som ingår. Ofta behöver du som kund själv kontakta flera entreprenörer, ta in offerter som kräver hembesök och sedan jämföra alternativen.',
                sol: 'Du får ett fast pris direkt online baserat på tydliga projektdefinitioner. Ingen behöver komma hem till dig, och du slipper försöka tolka och jämföra olika upplägg. Allt sker digitalt – du kan beställa med mobilen. Det sparar tid både för dig och hantverkaren.',
              },
              {
                title: 'Kvalitetsbrister i utförandet',
                why: 'Det saknas struktur för att styra kvalitet och följa upp arbetet.',
                sol: 'Vi har en process för kvalitetskontroll före, under och efter projekt. Betalning sker först när arbetet är färdigt och utfört med rätt kvalitet. Vid tveksamheter anlitas en oberoende byggnadsinspektör.',
              },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={Math.min(idx, 3) * 80}>
                <div
                  style={{
                    background: idx % 2 === 0 ? 'white' : 'var(--bg-tint)',
                    borderRadius: 'var(--r-xl)',
                    padding: 32,
                    borderLeft: '4px solid var(--buildla-700)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'box-shadow 280ms var(--ease)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                >
                  <p className="meta-label" style={{ color: 'var(--buildla-sage)', marginBottom: 6 }}>
                    Vanligt problem
                  </p>
                  <h3
                    style={{
                      font: '600 22px/1.3 var(--font-sans)',
                      letterSpacing: '-0.008em',
                      color: 'var(--buildla-accent)',
                      marginBottom: 20,
                    }}
                  >
                    {item.title}
                  </h3>
                  <div className="ml-4 space-y-3">
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--buildla-accent)', marginBottom: 8 }}>
                        Varför det händer
                      </p>
                      <p style={{ color: 'var(--fg-2)', lineHeight: 1.65 }}>{item.why}</p>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--buildla-accent)', marginBottom: 8 }}>
                        Hur Buildla löser det
                      </p>
                      <p style={{ color: 'var(--fg-2)', lineHeight: 1.65 }}>{item.sol}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="h2-display text-center" style={{ color: 'var(--buildla-accent)', marginBottom: 48 }}>
              Våra projekt
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: '/images/projekt-1.webp', alt: 'Projekt 1' },
              { src: '/images/projekt-2.webp', alt: 'Projekt 2' },
              { src: '/images/projekt-3.webp', alt: 'Projekt 3' },
              { src: '/images/projekt-4.webp', alt: 'Projekt 4' },
              { src: '/images/projekt-5.webp', alt: 'Projekt 5' },
              { src: '/images/projekt-6.webp', alt: 'Projekt 6' },
            ].map((project, idx) => (
              <FadeIn key={idx} delay={Math.min(idx, 3) * 80}>
                <div
                  className="project-tile"
                  style={{
                    position: 'relative',
                    height: 256,
                    borderRadius: 'var(--r-xl)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    cursor: 'pointer',
                    transition: 'box-shadow 280ms var(--ease)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.transform = 'scale(1)';
                  }}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    style={{ transition: 'transform 500ms var(--ease)' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
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
          src="/images/cta-bg.webp"
          alt="CTA background"
          fill
          className="object-cover"
        />
        {/* Brand gradient overlay (accent → dark) */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(30,42,36,0.85) 0%, rgba(45,59,53,0.78) 100%)',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="h2-display"
              style={{ color: 'var(--buildla-light)', marginBottom: 32, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.15 }}
            >
              Redo att börja renovera?
            </h2>
          </FadeIn>
          <FadeIn delay={120}>
            <a
              href="https://buildla.se/ai-assistant"
              className="focus-ring"
              style={{
                display: 'inline-block',
                background: 'var(--buildla-light)',
                color: 'var(--buildla-accent)',
                padding: '20px 40px',
                borderRadius: 'var(--r-md)',
                fontWeight: 600,
                fontSize: 18,
                boxShadow: 'var(--shadow-xl)',
                transition: 'background 180ms var(--ease), transform 180ms var(--ease)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--buildla-light)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Få prisförslag direkt →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 md:py-24" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <h2 className="h2-display" style={{ color: 'var(--buildla-accent)', marginBottom: 24 }}>
                Kontakta oss
              </h2>
              <p style={{ color: 'var(--fg-2)', marginBottom: 32, lineHeight: 1.65 }}>
                Har du frågor eller vill veta mer om Buildla? Vi är här för att hjälpa.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'var(--buildla-light)',
                      border: '1px solid var(--stroke)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg className="w-5 h-5" style={{ color: 'var(--buildla-accent)' }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 600, color: 'var(--buildla-accent)', marginBottom: 4 }}>Email</h3>
                    <a
                      href="mailto:info@buildla.se"
                      className="num-tabular focus-ring"
                      style={{ color: 'var(--buildla-accent)', transition: 'color 180ms var(--ease)' }}
                    >
                      info@buildla.se
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'var(--buildla-light)',
                      border: '1px solid var(--stroke)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg className="w-5 h-5" style={{ color: 'var(--buildla-accent)' }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 600, color: 'var(--buildla-accent)', marginBottom: 4 }}>Telefon</h3>
                    <a
                      href="tel:+46721731730"
                      className="num-tabular focus-ring"
                      style={{ color: 'var(--buildla-accent)', transition: 'color 180ms var(--ease)' }}
                    >
                      072-173 17 30
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'var(--buildla-light)',
                      border: '1px solid var(--stroke)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg className="w-5 h-5" style={{ color: 'var(--buildla-accent)' }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 600, color: 'var(--buildla-accent)', marginBottom: 4 }}>Adress</h3>
                    <p className="num-tabular" style={{ color: 'var(--fg-2)' }}>
                      Klarälvsvägen 40<br />
                      128 44 Bagarmossen
                    </p>
                  </div>
                </div>
                <div className="meta-label" style={{ paddingTop: 8 }}>
                  Buildla är en del av Folkbostaden Stockholm AB
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={120}>
              <div
                style={{
                  borderRadius: 'var(--r-xl)',
                  overflow: 'hidden',
                  height: 320,
                  boxShadow: 'var(--shadow-lg)',
                }}
                className="md:h-full md:min-h-96"
              >
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
