'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  User as UserIcon,
} from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
  exact?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/dashboard' , exact: true },
  { label: 'Explore', href: '/dashboard/explore' },
  { label: 'Plan a trip', href: '/plan' },
  { label: 'Marketplace', href: '/dashboard/marketplace' },
  { label: 'Culture', href: '/dashboard/culture' },
  { label: 'Transport', href: '/dashboard/transport' },
  { label: 'Sustainability', href: '/dashboard/sustainability' },
];

export default function AuthNavbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', onClickOutside);

    return () =>
      document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const initial =
    session?.user?.name?.[0]?.toUpperCase() ?? '?';


 const isActive = (item: NavItem) => {
  if (!pathname) return false;

  if (item.exact) {
    return pathname === item.href;
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
};


  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >

      <motion.nav
        animate={{
          width: scrolled
            ? 'min(940px, 94vw)'
            : 'min(1180px, 96vw)',
          paddingTop: scrolled ? 8 : 14,
          paddingBottom: scrolled ? 8 : 14,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
        className={`flex items-center justify-between rounded-full px-6 border transition-colors duration-300 ${
          scrolled
            ? 'bg-[#0A1410]/85 backdrop-blur-md border-[#2A3B31] shadow-lg shadow-black/30'
            : 'bg-[#0A1410]/40 backdrop-blur-sm border-white/10'
        }`}
      >

        <Link
          href="/dashboard"
          className="font-serif text-lg text-[#F3EEE1] tracking-tight shrink-0"
        >
          Johar <span className="text-[#5DCAA5]">Jharkhand</span>
        </Link>


        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-6 mx-6">

          {NAV_ITEMS.map((item) => {
            const active = isActive(item);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-sans text-sm whitespace-nowrap transition-colors ${
                  active
                    ? 'text-[#E0A458]'
                    : 'text-[#9BB2A0] hover:text-[#E0A458]'
                }`}
              >

                {item.label}

                {active && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#E0A458] rounded-full"
                  />
                )}

              </Link>
            );
          })}

        </div>



        <div className="flex items-center gap-3 shrink-0">

          <button
            aria-label="Search"
            className="p-2 text-[#9BB2A0] hover:text-[#E0A458] transition-colors"
          >
            <Search size={17}/>
          </button>



          {/* Profile dropdown */}
          <div
            className="relative hidden md:block"
            ref={menuRef}
          >

            <button
              onClick={() =>
                setMenuOpen((v)=>!v)
              }
              className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border border-[#24352C] hover:border-[#E0A458]/50 transition-colors"
            >

              {session?.user?.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name ?? 'Profile'}
                  className="w-7 h-7 rounded-full object-cover"
                />
              ) : (
                <div className="w-7 h-7 rounded-full bg-[#E0A458] text-[#2C1B0A] text-xs font-semibold flex items-center justify-center">
                  {initial}
                </div>
              )}


              <ChevronDown
                size={14}
                className={`text-[#9BB2A0] transition-transform ${
                  menuOpen ? 'rotate-180' : ''
                }`}
              />

            </button>



            {menuOpen && (

              <motion.div
                initial={{
                  opacity:0,
                  y:-8
                }}
                animate={{
                  opacity:1,
                  y:0
                }}
                className="absolute right-0 top-12 w-52 bg-[#0F1C16] border border-[#2A3B31] rounded-xl overflow-hidden shadow-xl"
              >

                <div className="px-4 py-3 border-b border-[#22352B]">

                  <p className="text-sm text-[#F3EEE1] truncate">
                    {session?.user?.name ?? 'Traveler'}
                  </p>

                  <p className="text-xs text-[#5A6E60] truncate">
                    {session?.user?.email}
                  </p>

                </div>


                <Link
                  href="/profile"
                  onClick={()=>setMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-[#9BB2A0] hover:bg-[#152218]"
                >
                  <UserIcon size={15}/>
                  Profile
                </Link>


                <button
                  onClick={() =>
                    signOut({
                      callbackUrl:'/'
                    })
                  }
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-[#9BB2A0] hover:bg-[#152218] hover:text-[#E0703D]"
                >
                  <LogOut size={15}/>
                  Sign out
                </button>


              </motion.div>

            )}

          </div>



          <button
            className="lg:hidden text-[#F3EEE1] p-1"
            onClick={()=>setMobileOpen(v=>!v)}
          >
            {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>


        </div>


      </motion.nav>



      {/* Mobile menu */}
      {mobileOpen && (

        <motion.div
          initial={{
            opacity:0,
            y:-10
          }}
          animate={{
            opacity:1,
            y:0
          }}
          className="lg:hidden fixed top-20 left-4 right-4 bg-[#0F1C16] border border-[#2A3B31] rounded-2xl p-5 flex flex-col gap-4"
        >

          {NAV_ITEMS.map((item)=>{

            const active = isActive(item);

            return (

              <Link
                key={item.href}
                href={item.href}
                onClick={()=>setMobileOpen(false)}
                className={`text-sm ${
                  active
                    ? 'text-[#E0A458]'
                    : 'text-[#9BB2A0]'
                }`}
              >
                {item.label}
              </Link>

            );

          })}


          <div className="pt-3 border-t border-[#22352B] flex items-center gap-3">

            <div className="w-8 h-8 rounded-full bg-[#E0A458] flex items-center justify-center text-xs">
              {initial}
            </div>


            <p className="flex-1 text-sm text-[#F3EEE1]">
              {session?.user?.name}
            </p>


            <button
              onClick={()=>signOut({
                callbackUrl:'/'
              })}
              className="text-xs text-[#E0703D]"
            >
              Sign out
            </button>


          </div>


        </motion.div>

      )}

    </motion.header>
  );
}