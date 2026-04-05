'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const Logo = () => (
    <svg
      className="w-8 h-8"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 24L16 8L24 24M12 20H20M10 24H22"
        stroke="#2D3B35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo />
            <span className="font-bold text-lg text-buildla-dark hidden sm:inline">
              buildla
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/tjanster"
              className="text-buildla-dark font-medium hover:text-buildla-accent transition-colors"
            >
              Tjänster
            </Link>
            <Link
              href="/om-oss"
              className="text-buildla-dark font-medium hover:text-buildla-accent transition-colors"
            >
              Om oss
            </Link>
            <a
              href="#contact-section"
              className="text-buildla-dark font-medium hover:text-buildla-accent transition-colors"
            >
              Kontakt
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://buildla.se/ai-assistant"
              className="bg-buildla-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-buildla-dark transition-colors"
            >
              Få prisförslag direkt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-buildla-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link
              href="/tjanster"
              className="block py-2 text-buildla-dark font-medium hover:text-buildla-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tjänster
            </Link>
            <Link
              href="/om-oss"
              className="block py-2 text-buildla-dark font-medium hover:text-buildla-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Om oss
            </Link>
            <a
              href="#contact-section"
              className="block py-2 text-buildla-dark font-medium hover:text-buildla-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </a>
            <a
              href="https://buildla.se/ai-assistant"
              className="block mt-4 bg-buildla-accent text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-buildla-dark transition-colors"
            >
              Få prisförslag direkt
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
