'use client';

import { motion } from 'framer-motion';
import { Trees, Landmark, Store } from 'lucide-react';

const STATS = [
  { value: '24', label: 'Districts' },
  { value: '32%', label: 'Forest cover' },
  { value: '3', label: 'Major tribal festivals' },
];

const FEATURES = [
  {
    icon: Trees,
    title: 'Eco tourism',
    body: 'Waterfalls, forest trails, and national parks most guides never mention, mapped and made plannable.',
  },
  {
    icon: Landmark,
    title: 'Living culture',
    body: 'Sarhul, Karma, Sohrai — festivals and traditions from the state\u2019s tribal communities, in context, not as a footnote.',
  },
  {
    icon: Store,
    title: 'Local marketplace',
    body: 'Buy directly from artisans and homestays. Tourism revenue that reaches the communities behind it.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0F1C16] px-6 md:px-16 py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7DA98A] mb-5">
            About Jharkhand Trove
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F3EEE1] leading-tight max-w-2xl">
            Built for a state most maps forget.
          </h2>
          <p className="font-sans text-[#9BB2A0] text-base md:text-lg leading-relaxed mt-6 max-w-xl">
            Jharkhand rarely makes the shortlist — overshadowed by better-marketed
            neighbors, its waterfalls and tribal heritage left off most travel
            itineraries entirely. Jharkhand Trove exists to change that: real
            routes, real festivals, real people, in one place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-6 mt-16 max-w-md border-t border-[#22352B] pt-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-[#E0A458]">{stat.value}</p>
              <p className="font-sans text-xs text-[#7DA98A] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-[#22352B] rounded-2xl p-7 bg-[#0C1712]"
            >
              <feature.icon size={22} className="text-[#E0A458]" strokeWidth={1.6} />
              <h3 className="font-serif text-xl text-[#F3EEE1] mt-5">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed mt-2">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}