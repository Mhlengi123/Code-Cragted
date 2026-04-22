import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activePage: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', hash: '#home' },
    { name: 'About Us', hash: '#about' },
    { name: 'Case Studies', hash: '#portfolio' },
    { name: 'Pricing', hash: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white border-gray-200 py-3 shadow-md' : 'bg-transparent border-transparent py-4'}`}>
      <div className={`max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center ${isScrolled ? 'text-primary' : 'text-white'}`}>
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Geometric Logo Icon */}
            <div className="absolute inset-0 bg-accent rounded-full opacity-20 animate-pulse" />
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-accent fill-current relative z-10">
               <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="currentColor" strokeWidth="4" />
               <path d="M50 20 L80 50 L50 80 L20 50 Z" />
               <circle cx="50" cy="50" r="10" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col -gap-1">
            <span className={`font-black text-xl tracking-tighter leading-none ${isScrolled ? 'text-primary' : 'text-white'}`}>
              CODE<span className="text-accent">CRAFTED</span>
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-60">Design & Dev</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.hash}
              className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-accent ${
                activePage === link.hash.substring(1) ? 'text-accent' : (isScrolled ? 'text-primary/70' : 'text-white/70')
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#briefing"
            className={`px-6 py-2 font-bold transition-all text-xs uppercase tracking-widest border ${
              isScrolled ? 'bg-primary text-white hover:bg-accent border-primary' : 'bg-accent text-white hover:bg-white hover:text-primary border-accent'
            }`}
          >
            Request Briefing
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.hash}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium px-4 py-2 rounded-lg ${
                    activePage === link.hash.substring(1) ? 'bg-secondary text-accent' : 'text-primary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-accent text-white px-6 py-3 rounded-xl text-center font-bold"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
