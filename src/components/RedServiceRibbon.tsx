import React from 'react';
import { Scale, ShieldCheck, Globe, GraduationCap, Plane, Award } from 'lucide-react';

export const RedServiceRibbon: React.FC = () => {
  const items = [
    { label: 'Visa Assistance', icon: <Scale className="w-5 h-5" /> },
    { label: 'Travel Planning', icon: <Globe className="w-5 h-5" /> },
    { label: 'Admission Assistance', icon: <GraduationCap className="w-5 h-5" /> },
    { label: 'Scholarship Guidance', icon: <Award className="w-5 h-5" /> },
    { label: 'Document Attestation', icon: <ShieldCheck className="w-5 h-5" /> },
    { label: 'Pre-Departure Briefing', icon: <Plane className="w-5 h-5" /> }
  ];

  return (
    <div className="w-full bg-[#B91C1C] text-white py-3 overflow-hidden shadow-inner select-none">
      <div className="flex items-center gap-8 whitespace-nowrap animate-[marquee_25s_linear_infinite] motion-reduce:animate-none">
        {/* Double the list for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-2.5 px-4 text-xs sm:text-sm font-extrabold tracking-wider uppercase">
            <span className="p-1 rounded-md bg-white/15 text-white">
              {item.icon}
            </span>
            <span>{item.label}</span>
            <span className="text-white/40 ml-3">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};
