import React from 'react';

interface WSLLogoProps {
  className?: string;
  size?: number | string;
  withText?: boolean;
}

export const WSLLogo: React.FC<WSLLogoProps> = ({
  className = '',
  size = 48,
  withText = false
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 select-none drop-shadow-sm"
        aria-label="WSL Consultants Logo"
      >
        <defs>
          {/* Radial gradient for the silver badge background */}
          <radialGradient
            id="silverBadgeGradient"
            cx="50%"
            cy="45%"
            r="50%"
            fx="45%"
            fy="40%"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </radialGradient>

          {/* Linear gradient for metallic rim */}
          <linearGradient id="blueRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          {/* Airplane yellow gradient */}
          <linearGradient id="airplaneYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE033" />
            <stop offset="100%" stopColor="#FACC15" />
          </linearGradient>

          {/* Shadow filter */}
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Outer Deep Blue Ring */}
        <circle
          cx="200"
          cy="200"
          r="192"
          fill="url(#silverBadgeGradient)"
          stroke="#203874"
          strokeWidth="14"
        />

        {/* Inner thin border line */}
        <circle
          cx="200"
          cy="200"
          r="184"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Red Dashed Flight Path Arc */}
        <path
          d="M 80 235 C 65 140, 120 85, 205 78"
          fill="none"
          stroke="#DC2626"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="4 9"
        />

        {/* Airplane Group: Angled ascending towards top-right */}
        <g transform="translate(205, 55) rotate(42)" filter="url(#softShadow)">
          {/* Main Fuselage */}
          <path
            d="M 0 -38 C 7 -38, 11 -20, 11 25 C 11 45, 6 58, 0 60 C -6 58, -11 45, -11 25 C -11 -20, -7 -38, 0 -38 Z"
            fill="url(#airplaneYellow)"
            stroke="#D97706"
            strokeWidth="1.2"
          />

          {/* Red Cockpit & Nose Accent */}
          <path
            d="M -3 -36 C -1 -38, 1 -38, 3 -36 C 4 -32, 4 -28, 0 -26 C -4 -28, -4 -32, -3 -36 Z"
            fill="#EF4444"
          />

          {/* Left Wing (Red with yellow core) */}
          <path
            d="M -8 -2 L -58 14 C -61 15, -60 18, -55 18 L -9 8 Z"
            fill="#DC2626"
          />
          <path
            d="M -8 -1 L -45 12 L -9 6 Z"
            fill="#FACC15"
          />

          {/* Right Wing (Red with yellow core) */}
          <path
            d="M 8 -2 L 58 14 C 61 15, 60 18, 55 18 L 9 8 Z"
            fill="#DC2626"
          />
          <path
            d="M 8 -1 L 45 12 L 9 6 Z"
            fill="#FACC15"
          />

          {/* Tail Stabilizers */}
          <path
            d="M -5 45 L -26 53 C -28 54, -27 57, -23 56 L -5 51 Z"
            fill="#DC2626"
          />
          <path
            d="M 5 45 L 26 53 C 28 54, 27 57, 23 56 L 5 51 Z"
            fill="#DC2626"
          />

          {/* Fuselage Passenger Windows */}
          <circle cx="0" cy="-14" r="2" fill="#DC2626" />
          <circle cx="0" cy="-6" r="2" fill="#DC2626" />
          <circle cx="0" cy="2" r="2" fill="#DC2626" />
          <circle cx="0" cy="10" r="2" fill="#DC2626" />
          <circle cx="0" cy="18" r="2" fill="#DC2626" />
          <circle cx="0" cy="26" r="2" fill="#DC2626" />
        </g>

        {/* Big Bold WSL Text */}
        <text
          x="200"
          y="245"
          textAnchor="middle"
          fill="#1E293B"
          fontSize="125"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, Inter, sans-serif"
          letterSpacing="-4"
        >
          WSL
        </text>

        {/* CONSULTANTS Text underneath */}
        <text
          x="200"
          y="298"
          textAnchor="middle"
          fill="#273344"
          fontSize="35"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, Inter, sans-serif"
          letterSpacing="4"
        >
          CONSULTANTS
        </text>
      </svg>

      {withText && (
        <div className="flex flex-col select-none">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-sans">
              WSL
            </span>
            <span className="text-xs uppercase tracking-widest text-blue-700 font-extrabold px-1.5 py-0.5 rounded bg-blue-50 border border-blue-200">
              UAE
            </span>
          </div>
          <span className="text-[10px] tracking-[0.22em] uppercase font-bold text-slate-600 mt-1">
            CONSULTANTS
          </span>
        </div>
      )}
    </div>
  );
};
