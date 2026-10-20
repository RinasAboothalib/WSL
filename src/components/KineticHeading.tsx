import React from 'react';
import { motion } from 'motion/react';

interface KineticHeadingProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClass?: string;
  immediate?: boolean;
}

export const KineticHeading: React.FC<KineticHeadingProps> = ({
  children,
  as: Component = 'h2',
  className = '',
  delay = 0,
  highlightWords = [],
  highlightClass = 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-850 to-indigo-900',
  immediate
}) => {
  // If not explicitly set, h1 headings should trigger immediately on page mount without waiting for scroll
  const shouldAnimateImmediate = immediate ?? Component === 'h1';
  const words = children.trim().split(/\s+/);

  return (
    <Component className={`flex flex-wrap items-baseline gap-x-[0.28em] gap-y-1 ${className}`}>
      {words.map((word, index) => {
        const isHighlight = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span key={index} className="inline-block overflow-hidden pb-[0.08em]">
            <motion.span
              className={`inline-block will-change-transform ${isHighlight ? highlightClass : ''}`}
              initial={{ y: '115%', opacity: 0 }}
              {...(shouldAnimateImmediate
                ? { animate: { y: '0%', opacity: 1 } }
                : {
                    whileInView: { y: '0%', opacity: 1 },
                    viewport: { once: true, amount: 0.1 }
                  })}
              transition={{
                duration: 0.65,
                delay: delay + index * 0.045,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
};
