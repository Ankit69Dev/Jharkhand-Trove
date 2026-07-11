'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useState } from 'react';
import UnauthNavbar from '@/components/navbar';
import TextPressure from '@/components/TextPressure';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const JharkhandGlobe3D = dynamic(() => import('@/components/3dMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[420px] flex items-center justify-center text-[#5A6E60] text-sm font-sans">
      Loading globe…
    </div>
  ),
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      // await signIn('google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0A1410] min-h-screen">
      <UnauthNavbar />

      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 pt-32 pb-16 overflow-hidden">
        {/* Left: sign in */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="z-10 w-full max-w-md"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7DA98A] mb-5">
            Welcome back
          </p>

          <TextPressure
            segments={[
              { text: 'Sign', color: '#F3EEE1' },
              { text: ' ', color: '#F3EEE1' },
              { text: 'in', color: '#5DCAA5' },
            ]}
            className="font-serif text-[13vw] md:text-[4vw] leading-[0.95] tracking-tight mb-4"
          />

          <p className="font-sans text-[#9BB2A0] text-base leading-relaxed mb-10">
            Pick up your trail through Jharkhand&apos;s waterfalls, festivals, and forests
            right where you left off.
          </p>

          <Button />
        </motion.div>

        {/* Right: globe, echoing the homepage hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative h-[420px] md:h-[560px] w-full hidden md:block"
        >
          <JharkhandGlobe3D />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}