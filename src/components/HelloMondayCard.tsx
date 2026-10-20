import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface HelloMondayCardProps {
  children: React.ReactNode;
  className?: string;
  cursorBadge?: string;
  onClick?: () => void;
  maxTilt?: number;
}

export const HelloMondayCard: React.FC<HelloMondayCardProps> = ({
  children,
  className = '',
  cursorBadge = 'EXPLORE',
  onClick,
  maxTilt = 7
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse offset within the card normalized between -0.5 and 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth tilt recovery
  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 220 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 220 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Dynamic light sheen position
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    setSheenPos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      whileTap={{ scale: 0.98 }}
      className={`relative rounded-3xl overflow-hidden transition-shadow duration-300 ${
        isHovered ? 'shadow-2xl shadow-blue-900/15' : 'shadow-md shadow-slate-200/60'
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      data-cursor={cursorBadge}
    >
      {/* Card Content */}
      <div className="relative z-10 h-full w-full">{children}</div>

      {/* Dynamic Specular Reflection Sheen */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${sheenPos.x}% ${sheenPos.y}%, rgba(255,255,255,0.25), transparent 70%)`
          }}
        />
      )}
    </motion.div>
  );
};
