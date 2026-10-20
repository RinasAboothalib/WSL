import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WSLLogo } from './WSLLogo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Services', path: '/services' },
    { label: 'Success Stories', path: '/success-stories' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand with official logo) — Zone 2 (Nav Links) — Zone 3 (1 Primary Action) */}
          <div className="flex items-center justify-between gap-3 sm:gap-8">
            {/* Zone 1: Official Logo and single clean brand text */}
            <button
              onClick={() => handleLinkClick('/')}
              className="flex items-center gap-2 sm:gap-3 text-left group whitespace-nowrap shrink-0 focus:outline-none"
            >
              <WSLLogo size={40} withText={true} />
            </button>

            {/* Zone 2: 4-5 Nav Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-blue-900 font-bold'
                        : 'text-slate-600 hover:text-blue-700'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={onOpenConsultation}
                data-cursor="apply"
                className="hidden sm:flex px-4 py-2.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm shadow-blue-900/20 transition-all hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap shrink-0 items-center gap-1.5 cursor-pointer"
              >
                <span>Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-800 hover:text-blue-900 hover:bg-slate-100 transition-colors cursor-pointer focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl p-6 lg:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-left text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors cursor-pointer ${
                    currentPath === link.path
                      ? 'bg-blue-50 text-blue-900 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 text-center text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
