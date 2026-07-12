'use client';

import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TextPressure from '@/components/TextPressure';

// ---------------------------------------------------------------------------
// MOCK DATA — replace each block with a Prisma query once the schema exists.
// ---------------------------------------------------------------------------

type ActiveTrip = {
  id: string;
  destination: string;
  totalDays: number;
  plannedDays: number;
  coverImage: string;
} | null;

// TODO: prisma.itinerary.findFirst({ where: { userId, status: 'active' } })
const activeTrip: ActiveTrip = {
  id: 'trip_1',
  destination: 'Netarhat',
  totalDays: 3,
  plannedDays: 2,
  coverImage: '/images/netarhat.jpg',
};

type SavedPlace = {
  id: string;
  name: string;
  category: 'waterfalls' | 'national-parks' | 'tribal-villages' | 'heritage-sites' | 'hill-stations';
  image: string;
};

// TODO: prisma.savedPlace.findMany({ where: { userId } })
const savedPlaces: SavedPlace[] = [
  { id: 'sp_1', name: 'Hundru Falls', category: 'waterfalls', image: '/images/hundru.jpg' },
  { id: 'sp_2', name: 'Betla National Park', category: 'national-parks', image: '/images/betla.jpg' },
  { id: 'sp_3', name: 'Netarhat', category: 'hill-stations', image: '/images/netarhat-thumb.jpg' },
];

type CultureEvent = {
  id: string;
  name: string;
  region: string;
  startsInDays: number;
} | null;

// TODO: query filtered by region overlap with savedPlaces / activeTrip
const upcomingEvent: CultureEvent = {
  id: 'ev_1',
  name: 'Sarhul Festival',
  region: 'Netarhat & surrounding villages',
  startsInDays: 21,
};

type MarketplaceItem = {
  id: string;
  name: string;
  artisan: string;
  price: string;
  image: string;
};

// TODO: prisma.product.findMany({ where: { region: ... }, take: 3 })
const marketplacePicks: MarketplaceItem[] = [
  { id: 'mp_1', name: 'Sohrai wall art print', artisan: 'Meena Devi, Hazaribagh', price: '₹850', image: '/images/sohrai.jpg' },
  { id: 'mp_2', name: 'Bamboo craft basket', artisan: 'Ram Kumar, Khunti', price: '₹450', image: '/images/bamboo.jpg' },
];

type SustainabilityBadge = { placeName: string; load: 'low' | 'moderate' | 'high' };

// TODO: live visitor-load data joined against savedPlaces/activeTrip
const sustainabilityBadges: SustainabilityBadge[] = [
  { placeName: 'Hundru Falls', load: 'moderate' },
  { placeName: 'Netarhat', load: 'low' },
];

const loadColor: Record<SustainabilityBadge['load'], string> = {
  low: '#5DCAA5',
  moderate: '#E0A458',
  high: '#E07A5F',
};

// ---------------------------------------------------------------------------
// Decorative motif — a simple Sohrai/Kohvar-inspired line-and-dot pattern,
// used as a quiet watermark rather than literal folk art reproduction.
// ---------------------------------------------------------------------------

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

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export default function DashboardPage() {
  const { data: session } = useSession();
  const firstName = session?.user?.name?.split(' ')[0] ?? 'there';
  const hasAnyActivity = activeTrip || savedPlaces.length > 0;

  return (
    <main className="relative bg-[#0A1410] min-h-screen px-6 md:px-16 pt-32 pb-24 overflow-hidden">
      {/* Ambient corner motifs — quiet texture, not literal illustration */}
      <TribalMotif className="absolute -top-4 right-0 w-72 h-72 text-[#5DCAA5] pointer-events-none" />
      <TribalMotif className="absolute bottom-0 -left-10 w-72 h-72 text-[#E0A458] rotate-180 pointer-events-none" />

      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mb-14"
      >
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7DA98A] mb-3">
          {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
        </p>
        <TextPressure
          segments={[
            { text: 'Welcome', color: '#F3EEE1' },
            { text: ' back, ', color: '#F3EEE1' },
            { text: firstName, color: '#5DCAA5' },
          ]}
          className="font-serif text-[10vw] md:text-[3.6vw] leading-[0.95] tracking-tight"
        />
      </motion.div>

      {!hasAnyActivity ? (
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 border border-[#24352C] rounded-3xl p-12 text-center max-w-xl"
        >
          <p className="font-sans text-[#9BB2A0] mb-6">
            You haven&apos;t started exploring yet. Pick a trail on the map or let the
            planner build you a route.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/explore"
              className="font-sans bg-[#E0A458] text-[#2C1B0A] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#eeb672] transition-colors"
            >
              Explore the map
            </Link>
            <Link
              href="/plan"
              className="font-sans border border-[#24352C] text-[#F3EEE1] text-sm font-medium px-6 py-3 rounded-full hover:border-[#5DCAA5]/60 hover:text-[#5DCAA5] transition-colors"
            >
              Plan a trip
            </Link>
          </div>
        </motion.div>
      ) : (
        // Bento grid — mixed card sizes instead of a uniform stack
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-6 gap-5 max-w-6xl">
          {/* Active trip — large hero tile, spans 4 cols */}
          <motion.section
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden border border-[#24352C] min-h-[320px] group"
          >
            {activeTrip ? (
              <>
                <Image
                  src={activeTrip.coverImage}
                  alt={activeTrip.destination}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1410] via-[#0A1410]/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#7DA98A] mb-2">
                    Active trip · Day {activeTrip.plannedDays} of {activeTrip.totalDays}
                  </p>
                  <h2 className="font-serif text-4xl text-[#F3EEE1] mb-5">
                    {activeTrip.destination}
                  </h2>
                  <Link
                    href={`/plan/${activeTrip.id}`}
                    className="font-sans w-fit bg-[#E0A458] text-[#2C1B0A] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#eeb672] transition-colors"
                  >
                    Continue planning →
                  </Link>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col justify-center items-start p-8">
                <p className="font-sans text-[#9BB2A0] mb-5">No trip in progress yet.</p>
                <Link
                  href="/plan"
                  className="font-sans bg-[#E0A458] text-[#2C1B0A] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#eeb672] transition-colors"
                >
                  Start planning
                </Link>
              </div>
            )}
          </motion.section>

          {/* Culture nudge — festival "ticket" tile, spans 2 cols */}
          {upcomingEvent && (
            <motion.section
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 relative rounded-3xl border border-dashed border-[#5DCAA5]/50 p-6 flex flex-col justify-between bg-[#0F1D16]"
            >
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#7DA98A] mb-2">
                  Coming up
                </p>
                <p className="font-serif text-2xl text-[#F3EEE1] leading-tight mb-1">
                  {upcomingEvent.name}
                </p>
                <p className="font-sans text-sm text-[#9BB2A0]">{upcomingEvent.region}</p>
              </div>
              <div className="flex items-end justify-between mt-6">
                <span className="font-serif text-5xl text-[#5DCAA5] leading-none">
                  {upcomingEvent.startsInDays}
                </span>
                <Link
                  href="/culture"
                  className="font-sans text-xs text-[#5DCAA5] hover:text-[#7DA98A] transition-colors"
                >
                  days away →
                </Link>
              </div>
            </motion.section>
          )}

          {/* Saved places — scattered, slightly rotated cards for a hand-picked feel */}
          {savedPlaces.length > 0 && (
            <motion.section
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:col-span-6"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-serif text-2xl text-[#F3EEE1]">Places you&apos;ve saved</h3>
                <Link href="/explore" className="font-sans text-xs text-[#9BB2A0] hover:text-[#E0A458] transition-colors">
                  View on map →
                </Link>
              </div>
              <div className="flex gap-6 overflow-x-auto pb-4">
                {savedPlaces.map((place, i) => (
                  <motion.div
                    key={place.id}
                    initial={{ rotate: i % 2 === 0 ? -3 : 3, opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ rotate: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-52 rounded-2xl overflow-hidden border border-[#24352C] bg-[#111E17] shadow-lg shadow-black/30"
                  >
                    <div className="relative h-32 w-full">
                      <Image src={place.image} alt={place.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <p className="font-sans text-sm text-[#F3EEE1]">{place.name}</p>
                      <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-[#7DA98A] mt-1">
                        {place.category.replace('-', ' ')}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Marketplace — spans 3 cols */}
          {marketplacePicks.length > 0 && (
            <motion.section
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-3 border border-[#24352C] rounded-3xl p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-serif text-xl text-[#F3EEE1]">From artisans near you</h3>
                <Link href="/marketplace" className="font-sans text-xs text-[#9BB2A0] hover:text-[#E0A458] transition-colors">
                  Marketplace →
                </Link>
              </div>
              <div className="space-y-4">
                {marketplacePicks.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-sans text-sm text-[#F3EEE1]">{item.name}</p>
                      <p className="font-sans text-xs text-[#9BB2A0]">{item.artisan}</p>
                    </div>
                    <p className="font-sans text-sm text-[#E0A458]">{item.price}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Sustainability — spans 3 cols, dial-like badges */}
          {sustainabilityBadges.length > 0 && (
            <motion.section
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="md:col-span-3 border border-[#24352C] rounded-3xl p-6"
            >
              <h3 className="font-serif text-xl text-[#F3EEE1] mb-5">Visitor load, right now</h3>
              <div className="space-y-4">
                {sustainabilityBadges.map((badge) => (
                  <div key={badge.placeName} className="flex items-center gap-4">
                    <span
                      className="w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0"
                      style={{ borderColor: loadColor[badge.load] }}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: loadColor[badge.load] }}
                      />
                    </span>
                    <div>
                      <p className="font-sans text-sm text-[#F3EEE1]">{badge.placeName}</p>
                      <p className="font-sans text-xs text-[#5A6E60] capitalize">{badge.load} load</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      )}
    </main>
  );
}