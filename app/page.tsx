export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-buildla-sage py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Renovering av ditt hem med fast pris, garanterat resultat, 5 års garanti och personlig projektledning.
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto opacity-90">
              Få ett fast pris direkt online – för badrum, golv, kök, målning och mer. Vi sköter planering, projektledning och kvalitetssäkring.
            </p>
            <a
              href="https://buildla.se/ai-assistant"
              className="inline-block bg-buildla-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-buildla-dark transition-colors text-lg"
            >
              Få prisförslag direkt
            </a>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Value Prop 1 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-buildla-dark mb-4">01</div>
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Fast pris och garanti.
              </h3>
              <p className="text-gray-600">
                Du vet vad det kostar, och arbetet är garanterat i 5 år.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-buildla-dark mb-4">02</div>
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Allt sker digitalt.
              </h3>
              <p className="text-gray-600">
                Beställ, följ upp och kommunicera direkt i mobilen.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="text-center">
              <div className="text-5xl font-bold text-buildla-dark mb-4">03</div>
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Byggare som bygger. Projektledare som leder.
              </h3>
              <p className="text-gray-600">
                Hos Buildla gör alla det de är bäst på, och vi tar ansvar för helheten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Service Cards */}
            {[
              { title: 'Byta golv', gradient: 'from-blue-400 to-blue-600' },
              { title: 'Köksrenovering', gradient: 'from-emerald-400 to-emerald-600' },
              { title: 'Renovera badrum', gradient: 'from-purple-400 to-purple-600' },
              { title: 'Måla och tapetsera', gradient: 'from-orange-400 to-orange-600' },
              { title: 'Altan', gradient: 'from-cyan-400 to-cyan-600' },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${service.gradient} rounded-lg p-8 text-white h-48 flex items-end cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-buildla-dark mb-6">
              Kategorier
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Arkitekt',
                'Ny- & tillbyggnad',
                'Renovera inomhus',
                'Renovera utomhus',
              ].map((category, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-buildla-dark transition-colors cursor-pointer"
                >
                  <p className="text-buildla-dark font-medium">{category}</p>
                </div>
              ))}
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
                className="text-buildla-accent font-semibold hover:text-buildla-dark transition-colors"
              >
                Läs mer om varför →
              </a>
            </div>
            <div className="bg-buildla-light rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">📸</div>
                <p>Bildplatsarea</p>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                problem: 'Du vet inte vad det kommer att kosta',
                solution: 'Vi använder AI för att ge dig ett fast pris direkt online – ingen överraskning vid slutfakturan.',
              },
              {
                problem: 'Tidsplanen spricker',
                solution: 'Med realistisk planering och dedikerad projektledning håller vi tidsplan och levererar i tid.',
              },
              {
                problem: 'Otydligt ansvar om något går fel',
                solution: 'Tydliga kontrakt och 5 års garanti – du vet exakt vad du får och vem du kan ringa.',
              },
              {
                problem: 'Krångligt och tidskrävande att jämföra och beställa',
                solution: 'Allt går online – få pris, godkänn offert och starta projekt från din mobil.',
              },
              {
                problem: 'Kvalitetsbrister i utförandet',
                solution: 'Slutkontroll med både byggare och projektledare säkerställer högsta kvalitet.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border-l-4 border-buildla-accent">
                <p className="font-semibold text-lg text-buildla-dark mb-3">
                  {item.problem}
                </p>
                <p className="text-gray-600">
                  {item.solution}
                </p>
              </div>
            ))}
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
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="bg-buildla-light rounded-lg h-64 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">🏠</div>
                  <p>Projekt {idx}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-buildla-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redo att börja renovera?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Få ett personligt prisförslag direkt online. Det tar bara några minuter.
          </p>
          <a
            href="https://buildla.se/ai-assistant"
            className="inline-block bg-white text-buildla-dark px-8 py-4 rounded-lg font-semibold hover:bg-buildla-light transition-colors text-lg"
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
