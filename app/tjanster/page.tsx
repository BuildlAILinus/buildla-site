export default function TjansterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-buildla-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Topptjänster
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Vi erbjuder ett brett utbud av renoveringsjänster för ditt hem. Varje tjänst är utförd med precisering, kvalitet och fast pris.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-buildla-dark mb-12">
            Våra tjänster
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Byta golv',
                description:
                  'Från parkettläggning till klinker och laminat. Vi handlar, förbereder och installerar – allt ingår i priset.',
              },
              {
                title: 'Köksrenovering',
                description:
                  'Ny skåpinramning, bänkskiva, belysning och hantverk. Vi skapar ett modernt kök som fungerar perfekt.',
              },
              {
                title: 'Renovera badrum',
                description:
                  'Från väggar och kakel till WC, tvättställ och dusch. Vi gör ett badrum som är både vackert och funktionellt.',
              },
              {
                title: 'Måla och tapetsera',
                description:
                  'Vägg- och takåtgärd, tapetsering eller måling. Vi förbereder, slippar och levererar ett perfekt resultat.',
              },
              {
                title: 'Altan',
                description:
                  'Ombyggnad, eftermålning eller ny altan. Vi säkerställer att din altan är säker och vacker för år framåt.',
              },
            ].map((service, idx) => (
              <div key={idx} className="border-l-4 border-buildla-accent p-6">
                <h3 className="text-2xl font-semibold text-buildla-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <a
                  href="https://buildla.se/ai-assistant"
                  className="inline-block mt-4 text-buildla-accent font-semibold hover:text-buildla-dark transition-colors"
                >
                  Få pris för {service.title.toLowerCase()} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-buildla-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-12 text-center">
            Vår process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Få ett pris direkt',
                description: 'Svar på några enkla frågor och få ditt fast pris direkt online.',
              },
              {
                step: '2',
                title: 'Digital offert och godkännande',
                description: 'Granska offerten i mobilen och godkänn den när du är redo.',
              },
              {
                step: '3',
                title: 'Kontakt med din projektledare',
                description: 'Du får en dedikerad projektledare som är din kontaktperson.',
              },
              {
                step: '4',
                title: 'Planering och inköp',
                description: 'Vi planerar allt och köper material. Du får veta exakt när vi startar.',
              },
              {
                step: '5',
                title: 'Byggstart och genomförande',
                description: 'Vi kommer på utsatt tid och genomför arbetet enligt plan.',
              },
              {
                step: '6',
                title: 'Slutkontroll och godkännande',
                description: 'Du godkänner och får 5 års garanti på arbetet.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-buildla-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-8 text-center">
            Vad ingår i priset?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              'Konsultation och planering',
              'Materialinköp',
              'Arbetskraft',
              'Skydd och städning',
              'Projektledning',
              'Slutkontroll',
              '5 års garanti',
              'Försäkring',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-buildla-accent text-xl">✓</span>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-buildla-dark mb-8 text-center">
              Vad ingår inte i priset?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Större konstruktionsändringar',
                'Asbestsanering',
                'Elektrikinstallation',
                'VVS-ändringar',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl">✗</span>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600 text-center">
              Kontakta oss för en offert på större projekt eller speciallösningar.
            </p>
          </div>
        </div>
      </section>

      {/* Value Props Bar */}
      <section className="py-16 md:py-20 bg-buildla-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-buildla-dark mb-4">01</div>
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Fast pris och garanti.
              </h3>
              <p className="text-gray-600">
                Du vet vad det kostar, och arbetet är garanterat i 5 år.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-buildla-dark mb-4">02</div>
              <h3 className="text-xl font-semibold text-buildla-dark mb-3">
                Allt sker digitalt.
              </h3>
              <p className="text-gray-600">
                Beställ, följ upp och kommunicera direkt i mobilen.
              </p>
            </div>

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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-buildla-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redo att starta ditt projekt?
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
    </>
  );
}
