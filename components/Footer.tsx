import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-buildla-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Company */}
          <div>
            <div className="mb-4">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65c68b448f262639612c15e4/7bdba433-d213-4149-b662-742fe58210ff/Buildla.png"
                alt="Buildla"
                width={100}
                height={33}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Renovering med fast pris, garanterat resultat och personlig projektledning.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Tjänster</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/tjanster" className="hover:text-white transition-colors">
                  Byta golv
                </Link>
              </li>
              <li>
                <Link href="/tjanster" className="hover:text-white transition-colors">
                  Köksrenovering
                </Link>
              </li>
              <li>
                <Link href="/tjanster" className="hover:text-white transition-colors">
                  Renovera badrum
                </Link>
              </li>
              <li>
                <Link href="/tjanster" className="hover:text-white transition-colors">
                  Måla och tapetsera
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Företag</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/om-oss" className="hover:text-white transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="mailto:info@buildla.se" className="hover:text-white transition-colors">
                  info@buildla.se
                </a>
              </li>
              <li>
                <a href="tel:+46721731730" className="hover:text-white transition-colors">
                  072-173 17 30
                </a>
              </li>
              <li>Klarälvsvägen 40, 128 44 Bagarmossen</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; {currentYear} Folkbostaden Stockholm AB. Alla rättigheter förbehållna.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Integritetspolicy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Användarvillkor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
