'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
];

export default function UnauthNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        animate={{
          width: scrolled ? 'min(560px, 92vw)' : 'min(680px, 94vw)',
          paddingTop: scrolled ? 8 : 14,
          paddingBottom: scrolled ? 8 : 14,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`flex items-center justify-between rounded-full px-6 border transition-colors duration-300 ${
          scrolled
            ? 'bg-[#0A1410]/85 backdrop-blur-md border-[#2A3B31] shadow-lg shadow-black/30'
            : 'bg-[#0A1410]/40 backdrop-blur-sm border-white/10'
        }`}
      >
        <Link
          href="/"
          className="font-serif text-lg text-[#F3EEE1] tracking-tight shrink-0"
        >
          Jharkhand<span className="text-[#5DCAA5]">Trove</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 mx-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm text-[#9BB2A0] hover:text-[#E0A458] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/login"
            className="hidden md:inline-block font-sans bg-[#E0A458] text-[#2C1B0A] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#eeb672] transition-colors"
          >
            Log in
          </Link>
          <button
            className="md:hidden text-[#F3EEE1] p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-20 left-4 right-4 bg-[#0F1C16] border border-[#2A3B31] rounded-2xl p-5 flex flex-col gap-4 z-40"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm text-[#9BB2A0]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="font-sans bg-[#E0A458] text-[#2C1B0A] text-sm font-medium px-4 py-2 rounded-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Log in
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}