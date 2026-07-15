import { Trees, Users, Leaf, TrainFront } from 'lucide-react';
import {
  FOREST_STAT,
  POLICY_NOTE,
  VISITOR_LOAD_NOTES,
  RESPONSIBLE_TRAVEL_GUIDELINES,
  CARBON_NOTE,
} from '@/lib/sustainabilityData';

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

export default function SustainabilityPage() {
  return (
    <main className="relative bg-[#0A1410] min-h-screen px-6 md:px-16 pb-24 overflow-hidden">
      {/* Ambient corner motifs — quiet texture, not literal illustration */}
      <TribalMotif className="absolute -top-4 right-0 w-72 h-72 text-[#5DCAA5] pointer-events-none" />
      <TribalMotif className="absolute bottom-0 -left-10 w-72 h-72 text-[#E0A458] rotate-180 pointer-events-none" />
      <section className="px-6 md:px-16 pt-32 pb-16 max-w-4xl mx-auto">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7DA98A] mb-5">
          Sustainability
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#F3EEE1] leading-tight">
          Travel that doesn't cost the place its future.
        </h1>
        <p className="font-sans text-[#9BB2A0] text-base leading-relaxed mt-5 max-w-xl">
          Jharkhand's tourism potential is tied directly to its forests,
          rivers, and tribal communities staying intact — not a separate
          concern from the trip itself.
        </p>
      </section>

      {/* Forest stat + policy */}
      <section className="px-6 md:px-16 pb-16 max-w-4xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-6">
        <div className="border border-[#22352B] rounded-2xl p-7 bg-[#0C1712] flex flex-col justify-center">
          <Trees size={22} className="text-[#5DCAA5] mb-4" strokeWidth={1.6} />
          <p className="font-serif text-4xl text-[#E0A458]">{FOREST_STAT.value}</p>
          <p className="font-sans text-sm text-[#9BB2A0] mt-2">{FOREST_STAT.label}</p>
          <p className="font-sans text-xs text-[#5A6E60] leading-relaxed mt-4">
            {FOREST_STAT.note}
          </p>
        </div>
        <div className="border border-[#22352B] rounded-2xl p-7 bg-[#0C1712]">
          <h2 className="font-serif text-xl text-[#F3EEE1] mb-3">
            {POLICY_NOTE.title}
          </h2>
          <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
            {POLICY_NOTE.body}
          </p>
        </div>
      </section>

      {/* Visitor load */}
      <section className="px-6 md:px-16 pb-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <Users size={20} className="text-[#E0A458]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">
            Visitor load, by site
          </h2>
        </div>
        <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed mb-6 max-w-xl">
          We don't have live visitor-count data to show you — nobody
          publishes that for these sites. What we do have is what actually
          determines whether a visit goes smoothly.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {VISITOR_LOAD_NOTES.map((note) => (
            <div
              key={note.title}
              className="border border-[#22352B] rounded-2xl p-5 bg-[#0C1712]"
            >
              <h3 className="font-serif text-base text-[#F3EEE1] mb-2">
                {note.title}
              </h3>
              <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Carbon note */}
      <section className="px-6 md:px-16 pb-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <TrainFront size={20} className="text-[#E0A458]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">{CARBON_NOTE.title}</h2>
        </div>
        <div className="border border-[#22352B] rounded-2xl p-6 bg-[#0C1712]">
          <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
            {CARBON_NOTE.body}
          </p>
        </div>
      </section>

      {/* Responsible travel guidelines */}
      <section className="px-6 md:px-16 pb-24 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Leaf size={20} className="text-[#E0A458]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">
            Responsible travel guidelines
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {RESPONSIBLE_TRAVEL_GUIDELINES.map((item) => (
            <div
              key={item.title}
              className="border border-[#22352B] rounded-2xl p-5 bg-[#0C1712]"
            >
              <h3 className="font-serif text-base text-[#F3EEE1] mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}