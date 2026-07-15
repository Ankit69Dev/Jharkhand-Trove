import { Users, CalendarDays, UtensilsCrossed } from 'lucide-react';
import { TRIBAL_GROUPS, FESTIVALS, FOOD_ITEMS } from '@/lib/cultureData';

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

export default function CulturePage() {
  return (
    <main className="relative bg-[#0A1410] min-h-screen overflow-hidden">
      {/* Ambient corner motifs — quiet texture, not literal illustration */}
      <TribalMotif className="absolute -top-4 right-0 w-72 h-72 text-[#5DCAA5] pointer-events-none" />
      <TribalMotif className="absolute bottom-0 -left-10 w-72 h-72 text-[#E0A458] rotate-180 pointer-events-none" />
      <section className="px-6 md:px-16 pt-32 pb-16 max-w-4xl mx-auto">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7DA98A] mb-5">
          Culture
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#F3EEE1] leading-tight">
          Living traditions, not a photo gallery.
        </h1>
        <p className="font-sans text-[#9BB2A0] text-base leading-relaxed mt-5 max-w-xl">
          Jharkhand is home to 32 recognized Scheduled Tribes, making up
          roughly a quarter of the state's population. This is the calendar,
          the communities, and the food behind that fact.
        </p>
      </section>

      {/* Tribal groups */}
      <section className="px-6 md:px-16 pb-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Users size={20} className="text-[#E0A458]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">Tribal communities</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {TRIBAL_GROUPS.map((tribe) => (
            <div
              key={tribe.name}
              className="border border-[#22352B] rounded-2xl p-6 bg-[#0C1712]"
            >
              <h3 className="font-serif text-lg text-[#F3EEE1] mb-1">{tribe.name}</h3>
              <p className="font-sans text-xs text-[#5DCAA5] mb-1">{tribe.share}</p>
              <p className="font-sans text-xs text-[#5A6E60] mb-3">{tribe.region}</p>
              <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
                {tribe.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Festival calendar */}
      <section className="px-6 md:px-16 pb-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <CalendarDays size={20} className="text-[#E0A458]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">Festival calendar</h2>
        </div>
        <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed mb-8 max-w-xl">
          Dates shown are for 2026 — several of these shift year to year
          with the lunar calendar, so treat them as a close guide rather than
          fixed.
        </p>
        <div className="space-y-4">
          {FESTIVALS.map((festival) => (
            <div
              key={festival.name}
              className="border border-[#22352B] rounded-2xl p-6 bg-[#0C1712] grid sm:grid-cols-[140px_1fr] gap-4"
            >
              <div>
                <p className="font-serif text-lg text-[#F3EEE1]">{festival.name}</p>
                <p className="font-sans text-xs text-[#E0A458] mt-1">
                  {festival.date2026}
                </p>
                <p className="font-sans text-[11px] text-[#5A6E60] mt-1">
                  {festival.tribes}
                </p>
              </div>
              <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
                {festival.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Food */}
      <section className="px-6 md:px-16 pb-24 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <UtensilsCrossed size={20} className="text-[#E0A458]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">Food</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {FOOD_ITEMS.map((item) => (
            <div
              key={item.name}
              className="border border-[#22352B] rounded-2xl p-5 bg-[#0C1712]"
            >
              <h3 className="font-serif text-base text-[#F3EEE1] mb-2">
                {item.name}
              </h3>
              <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}