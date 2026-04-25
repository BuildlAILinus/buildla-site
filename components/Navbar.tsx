'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Wordmark from './Wordmark';

/**
 * Visual upgrade per audit:
 *  - SVG wordmark (replaces Squarespace raster)
 *  - Transparent over hero → 78 % white + 18 px backdrop-blur after scrollY > 40 (DS §5)
 *  - Hairline border activates with blur
 *  - Height: 80 px at top → 64 px when blurred (DS §5)
 * Links and CTA text are unchanged.
 */
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(18px)' : 'blur(0px)',
        WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'blur(0px)',
        borderBottom: scrolled ? '1px solid var(--stroke)' : '1px solid transparent',
        transition: 'background 280ms var(--ease), backdrop-filter 280ms var(--ease), border-color 280ms var(--ease), height 280ms var(--ease)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: scrolled ? 64 : 80,
            transition: 'height 280ms var(--ease)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Wordmark size={scrolled ? 30 : 34} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/tjanster"
              className="font-medium transition-colors focus-ring"
              style={{ color: 'var(--buildla-accent)' }}
            >
              Tjänster
            </Link>
            <Link
              href="/om-oss"
              className="font-medium transition-colors focus-ring"
              style={{ color: 'var(--buildla-accent)' }}
            >
              Om oss
            </Link>
            <a
              href="#contact-section"
              className="font-medium transition-colors focus-ring"
              style={{ color: 'var(--buildla-accent)' }}
            >
              Kontakt
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://buildla.se/ai-assistant"
              className="focus-ring"
              style={{
                display: 'inline-block',
                background: 'var(--buildla-accent)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: 'var(--r-md)',
                fontWeight: 500,
                fontSize: 14,
                transition: 'background 180ms var(--ease), transform 180ms var(--ease)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--buildla-dark)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--buildla-accent)'; }}
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.98)'; }}
              onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Få prisförslag direkt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus-ring"
            style={{ color: 'var(--buildla-accent)' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Öppna meny"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4" style={{ borderTop: '1px solid var(--stroke)' }}>
            <Link
              href="/tjanster"
              className="block py-2 font-medium focus-ring"
              style={{ color: 'var(--buildla-accent)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tjänster
            </Link>
            <Link
              href="/om-oss"
              className="block py-2 font-medium focus-ring"
              style={{ color: 'var(--buildla-accent)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Om oss
            </Link>
            <a
              href="#contact-section"
              className="block py-2 font-medium focus-ring"
              style={{ color: 'var(--buildla-accent)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </a>
            <a
              href="https://buildla.se/ai-assistant"
              className="focus-ring"
              style={{
                display: 'block',
                marginTop: 16,
                background: 'var(--buildla-accent)',
                color: 'white',
                padding: '10px 16px',
                borderRadius: 'var(--r-md)',
                fontWeight: 500,
                fontSize: 14,
                textAlign: 'center',
              }}
            >
              Få prisförslag direkt
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
