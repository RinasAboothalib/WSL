import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WSLLogo } from './WSLLogo';

interface KineticMarqueeProps {
  items?: string[];
  speed?: number; // duration in seconds
  reverse?: boolean;
  className?: string;
  theme?: 'dark' | 'light' | 'accent';
}

const DEFAULT_ITEMS = [
  'GLOBAL EDUCATION',
  'DIRECT ADMISSIONS',
  'DUBAI HEADQUARTERS',
  'LAHORE REGIONAL CENTRE',
  'UP TO 100% SCHOLARSHIPS',
  '98.4% VISA SUCCESS',
  'AUSTRIA · ITALY · CZECH REPUBLIC · UNITED KINGDOM · UNITED STATES · CANADA',
  '14+ YEARS OF EXCELLENCE',
  'ZERO APPLICATION HASSLE',
  'OFFICIAL VISA GUIDANCE'
];

export const KineticMarquee: React.FC<KineticMarqueeProps> = ({
  items = DEFAULT_ITEMS,
  speed = 28,
  reverse = false,
  className = '',
  theme = 'dark'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const themeClasses = {
    dark: 'bg-[#0B1528] text-white border-y border-slate-800',
    light: 'bg-white text-slate-900 border-y border-slate-200/80 shadow-xs',
    accent: 'bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-amber-300 border-y border-amber-400/20 shadow-md'
  };

  // Duplicate items 4 times to ensure seamless infinite scroll
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden py-3 sm:py-4 select-none ${themeClasses[theme]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="scroll"
    >
      <div className="flex w-max">
        <motion.div
          className="flex items-center gap-6 sm:gap-10 whitespace-nowrap will-change-transform"
          animate={{
            x: reverse ? ['0%', '-50%'] : ['-50%', '0%']
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: isHovered ? speed * 2.2 : speed,
            ease: 'linear'
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 sm:gap-8">
              <span className="text-xs sm:text-sm font-black tracking-[0.2em] uppercase font-sans flex items-center gap-2">
                {item}
              </span>
              <div className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-inherit to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-inherit to-transparent pointer-events-none z-10" />
    </div>
  );
};
