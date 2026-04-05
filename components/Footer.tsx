import Link from 'next/link';

export default function Footer() {
  const Logo = () => (
    <svg
      className="w-6 h-6"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 24L16 8L24 24M12 20H20M10 24H22"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-buildla-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="font-bold text-lg">buildla</span>
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
                <a href="tel:+46701234567" className="hover:text-white transition-colors">
                  +46 70 123 45 67
                </a>
              </li>
              <li>Stockholm, Sverige</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; {currentYear} Buildla AB. Alla rättigheter förbehållna.</p>
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
