import React, { useLayoutEffect } from 'react';
import { motion } from 'motion/react';
import { WSLLogo } from './WSLLogo';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  // Ensure the page scroll resets to the top invisibly while the curtain is covering the screen
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Primary Directional Curtain (BigMan & NeoMed inspired sliding curtain) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: '-100%' }}
        exit={{ y: '0%' }}
        transition={{
          duration: 0.48,
          ease: [0.76, 0, 0.24, 1]
        }}
        style={{ willChange: 'transform' }}
        className="fixed inset-0 z-50 bg-[#0A1628] flex flex-col items-center justify-center pointer-events-none shadow-2xl"
      >
        {/* Prominent Website Logo Card during Page Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 text-center px-6"
        >
          <div className="p-4 sm:p-5 rounded-3xl bg-white shadow-2xl shadow-blue-950/70 border border-slate-200/90 flex items-center justify-center">
            <WSLLogo size={72} withText={true} />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] font-extrabold tracking-[0.22em] text-white/95 uppercase font-sans">
              Global Education & Visa Consultancy
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
          <span className="text-[9px] font-mono tracking-widest text-blue-300 uppercase">
            Dubai HQ · Lahore Regional Centre
          </span>
        </motion.div>

        {/* Cinematic Leading Trim Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-400 to-blue-500 shadow-lg shadow-amber-400/50" />
      </motion.div>

      {/* Secondary Depth Layer */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: '-100%' }}
        exit={{ y: '0%' }}
        transition={{
          duration: 0.56,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.03
        }}
        style={{ willChange: 'transform' }}
        className="fixed inset-0 z-40 bg-[#1E3A8A] pointer-events-none"
      />

      {/* Page Content Flow Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
