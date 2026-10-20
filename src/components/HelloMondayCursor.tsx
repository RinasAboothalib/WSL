import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { soundFX } from '../utils/soundEffects';

export const HelloMondayCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'pointer' | 'badge'>('default');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse coordinates with spring physics
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const lastTargetRef = useRef<Element | null>(null);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== 'undefined') {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target === lastTargetRef.current) return;
      lastTargetRef.current = target;

      // Find closest interactive element or custom cursor target
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      const clickableTarget = target.closest('button, a, input, select, textarea, [role="button"]') as HTMLElement | null;

      if (cursorTarget) {
        const customText = cursorTarget.getAttribute('data-cursor') || 'EXPLORE';
        setCursorText(customText.toUpperCase());
        setCursorVariant('badge');
        soundFX.playPop(580);
      } else if (clickableTarget) {
        setCursorText(null);
        setCursorVariant('pointer');
        soundFX.playPop(480);
      } else {
        setCursorText(null);
        setCursorVariant('default');
      }
    };

    const handleMouseDown = () => {
      setIsMouseDown(true);
      soundFX.playClick();
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Magnetic Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center font-sans"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform'
        }}
        animate={{
          scale: isMouseDown ? 0.88 : cursorVariant === 'badge' ? 1 : cursorVariant === 'pointer' ? 1.35 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorVariant === 'badge' && cursorText ? (
          // Hello Monday Signature Interactive Action Pill Badge
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="px-3.5 py-1.5 rounded-full bg-blue-900 text-amber-300 border border-amber-300/40 shadow-xl shadow-blue-950/40 backdrop-blur-md flex items-center gap-1.5 text-[11px] font-black tracking-widest whitespace-nowrap"
          >
            <span>{cursorText}</span>
            <span className="text-white text-xs">↗</span>
          </motion.div>
        ) : cursorVariant === 'pointer' ? (
          // Hover ring over buttons / links
          <div className="w-10 h-10 rounded-full border-2 border-blue-600/70 bg-blue-500/10 backdrop-blur-xs flex items-center justify-center transition-all duration-150">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          </div>
        ) : (
          // Subtle default dot with soft trailing halo
          <div className="relative flex items-center justify-center">
            <div className="w-3.5 h-3.5 rounded-full bg-blue-900/80 shadow-md transition-all duration-150" />
            <div className="absolute w-7 h-7 rounded-full border border-blue-900/25 animate-ping opacity-30" />
          </div>
        )}
      </motion.div>
    </div>
  );
};
