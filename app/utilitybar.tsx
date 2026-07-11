'use client';

import Link from 'next/link';
import { Globe, Phone, LogIn } from 'lucide-react';

export default function UtilityBar() {
  return (
    <div className="hidden md:block bg-[#16241D] text-[#9BB2A0] text-xs border-b border-[#22352B]">
      <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Phone size={12} />
            Tourist helpline: 1800-XXX-XXXX
          </span>
          <Link href="/events" className="hover:text-[#E0A458] transition-colors">
            Upcoming festivals
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1.5 hover:text-[#E0A458] transition-colors">
            <Globe size={12} />
            English
          </button>
          <Link href="/signin" className="flex items-center gap-1.5 hover:text-[#E0A458] transition-colors">
            <LogIn size={12} />
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}