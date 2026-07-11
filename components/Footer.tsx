import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0A1410] border-t border-[#1C2B23] px-6 md:px-16 pt-10 pb-6">
      <div className="max-w-5xl mx-auto">
        <div>
          <p className="font-serif text-lg text-[#F3EEE1]">
            Jharkhand<span className="text-[#5DCAA5]">Trove</span>
          </p>
          <p className="font-sans text-sm text-[#7A8F80] mt-2 whitespace-nowrap">
            Eco and cultural tourism for Jharkhand — waterfalls, forest trails, and tribal festivals, planned properly.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" aria-label="Instagram" className="text-[#7A8F80] hover:text-[#E0A458] transition-colors">
              <FaInstagram size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#7A8F80] hover:text-[#E0A458] transition-colors">
              <FaLinkedin size={16} />
            </a>
            <a href="#" aria-label="GitHub" className="text-[#7A8F80] hover:text-[#E0A458] transition-colors">
              <FaGithub size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mt-8 pt-4 border-t border-[#1C2B23]">
          <p className="font-sans text-xs text-[#5A6E60]">
            &copy; {new Date().getFullYear()} Jharkhand Trove. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}