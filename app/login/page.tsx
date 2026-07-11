'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
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
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Wire this up to your actual auth call
    try {
      // await signIn(email, password);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#0A1410] min-h-screen">
      <UnauthNavbar />

      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 pt-32 pb-16 overflow-hidden">
        {/* Left: form */}
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

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="font-sans block text-xs tracking-[0.15em] uppercase text-[#7DA98A] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full font-sans bg-[#111E17] border border-[#24352C] rounded-xl px-4 py-3
                           text-[#F3EEE1] placeholder-[#5A6E60] text-sm
                           focus:outline-none focus:ring-2 focus:ring-[#E0A458]/60 focus:border-[#E0A458]/60
                           transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="font-sans block text-xs tracking-[0.15em] uppercase text-[#7DA98A]"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="font-sans text-xs text-[#9BB2A0] hover:text-[#E0A458] transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full font-sans bg-[#111E17] border border-[#24352C] rounded-xl px-4 py-3 pr-12
                             text-[#F3EEE1] placeholder-[#5A6E60] text-sm
                             focus:outline-none focus:ring-2 focus:ring-[#E0A458]/60 focus:border-[#E0A458]/60
                             transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 font-sans text-xs text-[#5A6E60] hover:text-[#E0A458] transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full font-sans bg-[#E0A458] text-[#2C1B0A] text-sm font-medium px-6 py-3 rounded-full
                         hover:bg-[#eeb672] transition-colors disabled:opacity-60 disabled:cursor-not-allowed
                         mt-2"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </Button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="h-px flex-1 bg-[#24352C]" />
            <span className="font-sans text-xs text-[#5A6E60] uppercase tracking-[0.15em]">or</span>
            <div className="h-px flex-1 bg-[#24352C]" />
          </div>

          <button
            type="button"
            className="w-full font-sans border border-[#24352C] text-[#F3EEE1] text-sm font-medium px-6 py-3 rounded-full
                       hover:border-[#5DCAA5]/60 hover:text-[#5DCAA5] transition-colors"
          >
            Continue with Google
          </button>

          <p className="font-sans mt-8 text-sm text-[#9BB2A0]">
            New to Jharkhand Trove?{' '}
            <Link href="/signup" className="text-[#E0A458] hover:text-[#eeb672] transition-colors">
              Create an account
            </Link>
          </p>
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