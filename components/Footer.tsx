'use client';

import Link from 'next/link';
import Wordmark from './Wordmark';

/**
 * Visual upgrade per audit:
 *  - Switch from dark green bg to stone-100 bg (DS Footer pattern)
 *  - SVG wordmark instead of Squarespace raster
 *  - Token-based colors and hairline divider
 *  - All link content and copy unchanged.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#f5f5f4', // stone-100
        color: 'var(--fg-2)',
        marginTop: 80,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Company */}
          <div>
            <Wordmark />
            <p
              style={{
                color: 'var(--fg-2)',
                font: '400 14px/1.6 var(--font-sans)',
                marginTop: 20,
                maxWidth: 280,
              }}
            >
              Renovering med fast pris, garanterat resultat och personlig projektledning.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                font: '600 14px/1 var(--font-sans)',
                color: 'var(--buildla-accent)',
                marginBottom: 16,
              }}
            >
              Tjänster
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {['Byta golv', 'Köksrenovering', 'Renovera badrum', 'Måla och tapetsera'].map(label => (
                <li key={label}>
                  <Link
                    href="/tjanster"
                    className="focus-ring"
                    style={{
                      color: 'var(--fg-2)',
                      font: '400 14px/1.4 var(--font-sans)',
                      transition: 'color 180ms var(--ease)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--buildla-accent)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-2)'; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              style={{
                font: '600 14px/1 var(--font-sans)',
                color: 'var(--buildla-accent)',
                marginBottom: 16,
              }}
            >
              Företag
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <li>
                <Link
                  href="/om-oss"
                  className="focus-ring"
                  style={{ color: 'var(--fg-2)', font: '400 14px/1.4 var(--font-sans)', transition: 'color 180ms var(--ease)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--buildla-accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-2)'; }}
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="focus-ring"
                  style={{ color: 'var(--fg-2)', font: '400 14px/1.4 var(--font-sans)', transition: 'color 180ms var(--ease)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--buildla-accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-2)'; }}
                >
                  Hem
                </Link>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="focus-ring"
                  style={{ color: 'var(--fg-2)', font: '400 14px/1.4 var(--font-sans)', transition: 'color 180ms var(--ease)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--buildla-accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-2)'; }}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                font: '600 14px/1 var(--font-sans)',
                color: 'var(--buildla-accent)',
                marginBottom: 16,
              }}
            >
              Kontakt
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <li>
                <a
                  href="mailto:info@buildla.se"
                  className="num-tabular focus-ring"
                  style={{ color: 'var(--fg-2)', font: '400 14px/1.4 var(--font-sans)', transition: 'color 180ms var(--ease)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--buildla-accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-2)'; }}
                >
                  info@buildla.se
                </a>
              </li>
              <li>
                <a
                  href="tel:+46721731730"
                  className="num-tabular focus-ring"
                  style={{ color: 'var(--fg-2)', font: '400 14px/1.4 var(--font-sans)', transition: 'color 180ms var(--ease)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--buildla-accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-2)'; }}
                >
                  072-173 17 30
                </a>
              </li>
              <li className="num-tabular" style={{ color: 'var(--fg-2)', font: '400 14px/1.4 var(--font-sans)' }}>
                Klarälvsvägen 40, 128 44 Bagarmossen
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--stroke)', paddingTop: 28 }}>
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            style={{ color: 'var(--fg-3)', font: '500 13px/1 var(--font-sans)' }}
          >
            <p>&copy; {currentYear} Folkbostaden Stockholm AB. Alla rättigheter förbehållna.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="focus-ring"
                style={{ color: 'var(--fg-3)', transition: 'color 180ms var(--ease)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--buildla-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-3)'; }}
              >
                Integritetspolicy
              </a>
              <a
                href="#"
                className="focus-ring"
                style={{ color: 'var(--fg-3)', transition: 'color 180ms var(--ease)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--buildla-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-3)'; }}
              >
                Användarvillkor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
