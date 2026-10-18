import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  Calendar,
  Coins,
  Briefcase,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Globe2,
  Sparkles
} from 'lucide-react';
import { WSLLogo } from '../components/WSLLogo';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { WSL_DESTINATIONS, Destination } from '../data/wslData';

interface DestinationsPageProps {
  onOpenConsultation: (country?: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ onOpenConsultation }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(WSL_DESTINATIONS[0].id);

  const activeDest = WSL_DESTINATIONS.find((d) => d.id === selectedCountry) || WSL_DESTINATIONS[0];

  const handleSelectCountry = (id: string) => {
    setSelectedCountry(id);
    const el = document.getElementById('destinations-dossier');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* =========================================================================
          FULL-PAGE HERO SECTION (100vh / min-h-screen)
         ========================================================================= */}
      <section className="relative min-h-[100dvh] flex flex-col justify-between pt-20 pb-4 sm:pt-24 sm:pb-8 overflow-hidden bg-white">
        {/* Background Image with Luminous Light Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/wsl_dest_austria_1792299790020.jpg"
            alt="European university campus architecture"
            className="w-full h-full object-cover filter brightness-[0.92] saturate-[0.85]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
        </div>

        {/* Hero Center Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs max-w-full"
              >
                <WSLLogo size={20} />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-900 truncate">
                  WSL Global Portfolios · Europe, UK & North America
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.12] sm:leading-[1.08] text-balance"
              >
                World-Class Campuses. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
                  Direct Global Pathways.
                </span>
              </motion.h1>

              {/* Quick Destination Selectors */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none max-w-full pt-1"
              >
                {WSL_DESTINATIONS.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => handleSelectCountry(dest.id)}
                    className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-white/90 hover:bg-blue-50 border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-800 shadow-xs transition-all hover:border-blue-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <span>{dest.country}</span>
                    <span className="text-[10px] font-mono text-blue-700">({dest.code})</span>
                  </button>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2"
              >
                <button
                  onClick={() => onOpenConsultation(activeDest.country)}
                  className="px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-md shadow-blue-900/25 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Destination Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('destinations-dossier');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Country Dossiers</span>
                </button>
              </motion.div>

              {/* Verified Trust Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.35 }}
                className="pt-2 sm:pt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs font-medium text-slate-500"
              >
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Direct Public & Private University Applications
                </span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  DSU & Merit Scholarships
                </span>
              </motion.div>
            </div>

            {/* Right Column: Hero Metrics Card */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl shadow-slate-300/60 space-y-5 max-w-sm w-full"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-extrabold text-blue-900 uppercase tracking-wider">
                    Key Global Highlights
                  </span>
                  <Globe2 className="w-4 h-4 text-blue-700" />
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[10px] text-blue-800 font-extrabold uppercase block">
                      European Tuition
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      €0 to Low Fees (€363 / sem)
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-[10px] text-emerald-800 font-extrabold uppercase block">
                      Regional Scholarships
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      100% Free Tuition + Stipend (Italy DSU)
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-500 font-extrabold uppercase block">
                      Post-Study Work Permits
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      1 to 3 Years (UK PSW & Canada PGWP)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quick Switcher & Smooth Scroll Cue */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pr-16 sm:pr-0 pb-1 sm:pb-0">
          <div className="pt-3 sm:pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-semibold text-slate-700">
              <span>Austria (Europe)</span>
              <span className="hidden sm:inline">·</span>
              <span>Italy (DSU Grant)</span>
              <span className="hidden sm:inline">·</span>
              <span>Canada (Direct Entry)</span>
              <span className="hidden sm:inline">·</span>
              <span>United Kingdom & USA</span>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('destinations-dossier');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:flex items-center gap-1.5 text-blue-900 hover:text-blue-700 font-bold transition-colors cursor-pointer"
            >
              <span>Explore Destination Dossiers</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN DESTINATION SHOWCASE & DEEP DIVE SECTION
         ========================================================================= */}
      <section id="destinations-dossier" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Title */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
            Official Country Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Select a Destination for Full Guidelines
          </h2>
        </div>

        {/* Country Quick Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {WSL_DESTINATIONS.map((dest) => {
            const isSelected = dest.id === selectedCountry;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedCountry(dest.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20 scale-105'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">{dest.code}</span>
                <span>{dest.country}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Country Dossier Card */}
        <div className="rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Hero */}
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full bg-slate-100">
              <img
                src={activeDest.image}
                alt={activeDest.country}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-xs font-mono font-bold text-blue-900 border border-slate-200 shadow-xs">
                  Code: {activeDest.code}
                </span>
                <h2 className="text-3xl font-black text-white mt-2">
                  Study in {activeDest.country}
                </h2>
                <p className="text-xs text-amber-300 font-bold mt-1">
                  {activeDest.tagline}
                </p>
              </div>
            </div>

            {/* Dossier Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1.5">
                  Country Overview
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {activeDest.overview}
                </p>
              </div>

              {/* Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Coins className="w-3.5 h-3.5 text-blue-800" />
                    <span className="font-bold text-slate-700">Tuition Costs</span>
                  </div>
                  <p className="text-xs text-slate-900 font-bold">{activeDest.averageTuition}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Briefcase className="w-3.5 h-3.5 text-blue-800" />
                    <span className="font-bold text-slate-700">Work Rights</span>
                  </div>
                  <p className="text-xs text-slate-900 font-bold">{activeDest.workRights}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-blue-800" />
                    <span className="font-bold text-slate-700">Intakes</span>
                  </div>
                  <p className="text-xs text-slate-900 font-bold">{activeDest.intakes.join(', ')}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-blue-800" />
                    <span className="font-bold text-slate-700">Visa Processing</span>
                  </div>
                  <p className="text-xs text-slate-900 font-bold">{activeDest.visaProcessingTime}</p>
                </div>
              </div>

              {/* Key Universities */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Partner & Recommended Universities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeDest.popularUniversities.map((uni: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-900 text-xs font-semibold border border-blue-100 flex items-center gap-1.5"
                    >
                      <Building2 className="w-3 h-3 text-blue-700" />
                      {uni}
                    </span>
                  ))}
                </div>
              </div>

              {/* Admission Criteria */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Standard Admission Requirements
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeDest.keyRequirements.map((req: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenConsultation(activeDest.country)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition-all shadow-md shadow-blue-900/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for {activeDest.country}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/971547710629?text=Hello%20WSL%20Consultants,%20I%20am%20interested%20in%20studying%20in%20${encodeURIComponent(activeDest.country)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon size={16} color="#059669" />
                  <span>Ask Advisor via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Overview Grid of All Destinations */}
        <div className="mt-16">
          <h3 className="text-xl font-black text-slate-900 mb-6">
            All Study Abroad Destinations at a Glance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WSL_DESTINATIONS.map((dest) => (
              <div
                key={dest.id}
                onClick={() => handleSelectCountry(dest.id)}
                className="group p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video w-full rounded-xl overflow-hidden mb-3 bg-slate-100 relative">
                    <img
                      src={dest.image}
                      alt={dest.country}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs text-[10px] font-mono font-bold text-blue-900">
                      {dest.code}
                    </span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 group-hover:text-blue-900 transition-colors">
                    {dest.country}
                  </h4>
                  <p className="text-xs text-blue-700 font-semibold mt-0.5">
                    {dest.tagline}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate">{dest.averageTuition}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-900 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
