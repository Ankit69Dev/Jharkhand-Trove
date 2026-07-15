'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Trees, Landmark, Mountain, Palette, Compass } from 'lucide-react';
import {
  EXPLORE_DESTINATIONS,
  CATEGORY_LABELS,
  type ExploreCategory,
  type ExploreDestination,
} from '@/lib/exploreData';
import Explore360Modal from '@/components/Explore360Model';


const CATEGORY_ICONS: Record<ExploreCategory, typeof Waves> = {
  waterfall: Waves,
  national_park: Trees,
  heritage: Landmark,
  hill_station: Mountain,
  tribal_village: Palette,
};

const FILTERS: Array<{ key: ExploreCategory | 'all'; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'waterfall', label: CATEGORY_LABELS.waterfall },
  { key: 'national_park', label: CATEGORY_LABELS.national_park },
  { key: 'tribal_village', label: CATEGORY_LABELS.tribal_village },
  { key: 'heritage', label: CATEGORY_LABELS.heritage },
  { key: 'hill_station', label: CATEGORY_LABELS.hill_station },
];

function TribalMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35">
        <path d="M10 100 Q 55 40, 100 100 T 190 100" />
        <path d="M10 130 Q 55 70, 100 130 T 190 130" />
        {[20, 55, 90, 125, 160].map((x) => (
          <circle key={x} cx={x} cy="30" r="4" fill="currentColor" stroke="none" />
        ))}
      </g>
    </svg>
  );
}

export default function ExplorePage() {
  const [active, setActive] = useState<ExploreCategory | 'all'>('all');
  const [view360, setView360] = useState<ExploreDestination | null>(null);

  const filtered = useMemo(() => {
    if (active === 'all') return EXPLORE_DESTINATIONS;
    return EXPLORE_DESTINATIONS.filter((d) => d.category === active);
  }, [active]);

  return (
    <main className="relative bg-[#0A1410] min-h-screen px-6 md:px-32 pb-24 overflow-hidden">
      {/* Ambient corner motifs — quiet texture, not literal illustration */}
      <TribalMotif className="absolute -top-4 right-0 w-72 h-72 text-[#5DCAA5] pointer-events-none" />
      <TribalMotif className="absolute bottom-0 -left-10 w-72 h-72 text-[#E0A458] rotate-180 pointer-events-none" />
      <section className="relative grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 pt-32 pb-16 gap-10">
        <div>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7DA98A] mb-5">
            Explore Jharkhand
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#F3EEE1] leading-tight">
            Waterfalls, forests, and villages most maps skip.
          </h1>
          <p className="font-sans text-[#9BB2A0] text-base leading-relaxed mt-5 max-w-md">
            {EXPLORE_DESTINATIONS.length} real destinations across five
            categories — drag the globe to see where Jharkhand sits, then
            filter below to find what you're actually looking for.
          </p>
        </div>

        <div className="relative h-[360px] md:h-[460px] w-full">
        </div>
      </section>

      <section className="px-6 md:px-16 pb-24">
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`font-sans text-sm px-4 py-2 rounded-full border transition-colors ${
                active === f.key
                  ? 'bg-[#E0A458] text-[#2C1B0A] border-[#E0A458]'
                  : 'border-[#24352C] text-[#9BB2A0] hover:border-[#E0A458]/50 hover:text-[#E0A458]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((dest) => {
              const Icon = CATEGORY_ICONS[dest.category];
              return (
                <div
                  key={dest.id}
                  className="border border-[#22352B] rounded-2xl p-6 bg-[#0C1712] flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon size={20} className="text-[#E0A458]" strokeWidth={1.6} />
                    <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-[#5A6E60]">
                      {dest.district}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-[#F3EEE1]">{dest.name}</h3>
                  <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed mt-2 flex-1">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-sans text-xs text-[#5DCAA5]">
                      {CATEGORY_LABELS[dest.category]}
                    </span>
                    <button
                      onClick={() => setView360(dest)}
                      className="font-sans text-xs flex items-center gap-1.5 text-[#9BB2A0] hover:text-[#E0A458] transition-colors"
                    >
                      <Compass size={13} />
                      360° view
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="font-sans text-[#5A6E60] text-sm">
            Nothing in this category yet.
          </p>
        )}
      </section>



      {view360 && (
        <Explore360Modal
          name={view360.name}
          lat={view360.lat}
          lng={view360.lng}
          panoramaUrl={view360.panoramaUrl}
          onClose={() => setView360(null)}
        />
      )}
    </main>
  );
}