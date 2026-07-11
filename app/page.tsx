'use client';

import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import UnauthNavbar from '@/components/navbar';
import TextPressure from '@/components/TextPressure';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const JharkhandGlobe3D = dynamic(() => import('@/components/3dMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[420px] flex items-center justify-center text-[#5A6E60] text-sm font-sans">
      Loading globe…
    </div>
  ),
});

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <main className="bg-[#0A1410] min-h-screen">
      <UnauthNavbar />

      <section
        ref={heroRef}
        className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 pt-32 pb-16 overflow-hidden"
      >
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="z-10">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7DA98A] mb-5">
            Eco &amp; cultural tourism, Jharkhand
          </p>

          <TextPressure
            segments={[
              { text: 'Jharkhand', color: '#F3EEE1' },
              { text: ' ', color: '#F3EEE1' },
              { text: 'Trove', color: '#5DCAA5' },
            ]}
            className="font-serif text-[15vw] md:text-[5.5vw] leading-[0.95] tracking-tight"
          />

          <p className="font-sans mt-6 text-[#9BB2A0] text-base max-w-md leading-relaxed">
            Waterfalls, tribal festivals, and forest trails most maps skip.
            Plan a trip through Jharkhand&apos;s hidden geography, one story at a time.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="/login"
              className="font-sans bg-[#E0A458] text-[#2C1B0A] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#eeb672] transition-colors"
            >
              Sign in
            </a>
            <a
              href="#about"
              className="font-sans text-sm text-[#9BB2A0] hover:text-[#E0A458] transition-colors"
            >
              Learn more →
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{ scale: globeScale }}
          className="relative h-[420px] md:h-[560px] w-full"
        >
          <JharkhandGlobe3D />
        </motion.div>
      </section>

      <AboutSection />
      <Footer />
    </main>
  );
}