import { Plane, TrainFront, Bus, TriangleAlert } from 'lucide-react';
import { AIRPORT, RAIL_JUNCTIONS, LAST_MILE_NOTES } from '@/lib/transportData';

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

export default function TransportPage() {
  return (
    <main className="relative bg-[#0A1410] min-h-screen  overflow-hidden">
      {/* Ambient corner motifs — quiet texture, not literal illustration */}
      <TribalMotif className="absolute -top-4 right-0 w-72 h-72 text-[#5DCAA5] pointer-events-none" />
      <TribalMotif className="absolute bottom-0 -left-10 w-72 h-72 text-[#E0A458] rotate-180 pointer-events-none" />
      <section className="px-6 md:px-16 pt-32 pb-16 max-w-4xl mx-auto">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#7DA98A] mb-5">
          Plan your journey
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#F3EEE1] leading-tight">
          Getting to Jharkhand, and around it.
        </h1>
        <p className="font-sans text-[#9BB2A0] text-base leading-relaxed mt-5 max-w-xl">
          The gap between reaching a city and reaching the actual destination
          is the real planning problem here — this covers both.
        </p>
      </section>

      {/* By air */}
      <section className="px-6 md:px-16 pb-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Plane size={20} className="text-[#E0A458]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">By air</h2>
        </div>
        <div className="border border-[#22352B] rounded-2xl p-6 bg-[#0C1712]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-serif text-lg text-[#F3EEE1]">{AIRPORT.name}</h3>
            <span className="font-sans text-xs text-[#5DCAA5]">{AIRPORT.code}</span>
          </div>
          <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
            {AIRPORT.note}
          </p>
        </div>
      </section>

      {/* By rail */}
      <section className="px-6 md:px-16 pb-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <TrainFront size={20} className="text-[#E0A458]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">By rail</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {RAIL_JUNCTIONS.map((station) => (
            <div
              key={station.code}
              className="border border-[#22352B] rounded-2xl p-5 bg-[#0C1712]"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-base text-[#F3EEE1]">{station.name}</h3>
                <span className="font-sans text-[10px] tracking-[0.1em] uppercase text-[#5DCAA5]">
                  {station.code}
                </span>
              </div>
              <p className="font-sans text-xs text-[#5A6E60] mb-2">{station.city}</p>
              <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
                {station.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* By bus */}
      <section className="px-6 md:px-16 pb-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Bus size={20} className="text-[#E0A458]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">By bus</h2>
        </div>
        <div className="border border-[#22352B] rounded-2xl p-6 bg-[#0C1712] space-y-4">
          <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
            JSRTC (Jharkhand State Road Transport Corporation) runs intercity
            services between Ranchi, Jamshedpur, Dhanbad, and Bokaro, plus
            interstate routes to Kolkata, Patna, and Bhubaneswar. Fares are
            budget-friendly and tickets are available at bus stands or
            onboard for shorter routes.
          </p>
          <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed">
            Private operators run more frequent departures and AC/sleeper
            coaches on longer routes — worth it for anything over a
            few hours.
          </p>
        </div>
      </section>

      {/* Last-mile connectivity */}
      <section className="px-6 md:px-16 pb-24 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <TriangleAlert size={20} className="text-[#E0703D]" strokeWidth={1.6} />
          <h2 className="font-serif text-2xl text-[#F3EEE1]">
            Last-mile connectivity
          </h2>
        </div>
        <p className="font-sans text-sm text-[#9BB2A0] leading-relaxed mb-6 max-w-xl">
          This is the part most guides skip. Reaching a city in Jharkhand is
          easy; reaching the waterfall, park, or village from there often
          isn't.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {LAST_MILE_NOTES.map((note) => (
            <div
              key={note.title}
              className="border border-[#2E2118] rounded-2xl p-5 bg-[#1A140F]"
            >
              <h3 className="font-serif text-base text-[#F3EEE1] mb-2">
                {note.title}
              </h3>
              <p className="font-sans text-sm text-[#B99B7E] leading-relaxed">
                {note.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}