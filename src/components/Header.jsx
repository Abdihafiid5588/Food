import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu.jsx';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#features', label: 'Features' },
  { href: '#contact', label: 'Contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 bg-beige/80 backdrop-blur supports-backdrop-blur:bg-beige/60 ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2" aria-label="Go to home">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-primary text-white font-bold">f</span>
            <span className="font-heading text-lg tracking-wide">food</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted hover:text-text transition">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-primary text-white px-5 py-2.5 font-medium shadow-soft hover:shadow-lift transition"
            >
              Booking Now
            </motion.a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-muted/30 p-2"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu">
        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}

export default Header;
