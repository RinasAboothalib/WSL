import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Building2,
  Award,
  FileCheck,
  Compass,
  PlaneTakeoff,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { WSLLogo } from '../components/WSLLogo';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { RedServiceRibbon } from '../components/RedServiceRibbon';
import { YouTubeShowcase } from '../components/YouTubeShowcase';
import {
  WSL_DESTINATIONS,
  WSL_SERVICES,
  WSL_PROCESS_STEPS,
  WSL_SUCCESS_STORIES,
  WSL_OFFICES,
  WSL_FAQS,
  WSL_INSTAGRAM_REELS,
  WSL_TEAM,
  Destination,
  YouTubeVideo
} from '../data/wslData';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (dest?: string, service?: string) => void;
  onOpenLightbox: (media: any) => void;
  onSelectYouTubeVideo: (video: YouTubeVideo) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenLightbox,
  onSelectYouTubeVideo
}) => {
  const [selectedDestTab, setSelectedDestTab] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const filteredDestinations =
    selectedDestTab === 'all'
      ? WSL_DESTINATIONS
      : selectedDestTab === 'europe'
      ? WSL_DESTINATIONS.filter((d) => ['austria', 'italy', 'czech-republic'].includes(d.id))
      : WSL_DESTINATIONS.filter((d) => ['canada', 'united-kingdom', 'united-states'].includes(d.id));

  const serviceIconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-blue-800" />,
    Building2: <Building2 className="w-6 h-6 text-blue-800" />,
    Award: <Award className="w-6 h-6 text-blue-800" />,
    FileCheck: <FileCheck className="w-6 h-6 text-blue-800" />,
    Compass: <Compass className="w-6 h-6 text-blue-800" />,
    PlaneTakeoff: <PlaneTakeoff className="w-6 h-6 text-blue-800" />
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* =========================================================================
          SECTION 1: TRUE FULL-PAGE HERO SECTION (100vh / min-h-screen)
         ========================================================================= */}
      <section className="relative min-h-[100dvh] flex flex-col justify-between pt-20 pb-4 sm:pt-24 sm:pb-8 overflow-hidden bg-white">
        {/* Cinematic Backdrop with Light Tint & Architectural Glow */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/wsl_hero_cinematic_1792299790302.jpg"
            alt="International students at modern university campus"
            className="w-full h-full object-cover object-center filter brightness-[0.9] saturate-[0.85]"
            referrerPolicy="no-referrer"
          />
          {/* Luminous Light Theme Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
        </div>

        {/* Center Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-6">
              {/* Badge with official logo emblem */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs max-w-full"
              >
                <WSLLogo size={20} />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-900 truncate">
                  WSL Consultants UAE · Dubai & Lahore
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.12] sm:leading-[1.08] text-balance"
              >
                Global Education. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
                  Trusted Visa Pathways.
                </span>
              </motion.h1>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2"
              >
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-md shadow-blue-900/25 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free Profile Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('destinations-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Study Destinations</span>
                </button>
              </motion.div>

              {/* Verified Trust Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.45 }}
                className="pt-2 sm:pt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs font-medium text-slate-500"
              >
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Licensed UAE Consultancy
                </span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Italian DSU Scholarship Leaders
                </span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  14+ Years Track Record
                </span>
              </motion.div>
            </div>

            {/* Right Column: Hero Showcase Card with Official Emblem & Floating Country Badges */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl shadow-slate-300/60 text-center space-y-4 max-w-sm w-full relative"
              >
                {/* Floating Destination Badge: Austria */}
                <div className="absolute -top-4 -left-4 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="text-sm">🇦🇹</span>
                  <span>Austria</span>
                </div>

                {/* Floating Destination Badge: Italy */}
                <div className="absolute -bottom-4 -right-4 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="text-sm">🇮🇹</span>
                  <span>Italy (DSU 100%)</span>
                </div>

                <div className="flex justify-center pt-2">
                  <WSLLogo size={130} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 font-sans tracking-tight">
                    WSL CONSULTANTS
                  </h3>
                  <p className="text-xs uppercase font-extrabold tracking-widest text-blue-700 mt-0.5">
                    DUBAI & LAHORE
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-left text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Success Rate</span>
                    <span className="text-base font-black text-blue-900">90%+</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Visas Issued</span>
                    <span className="text-base font-black text-slate-900">10,000+</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Key Metrics & Smooth Scroll Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pr-16 sm:pr-0 pb-1 sm:pb-0">
          <div className="pt-3 sm:pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-semibold text-slate-700">
              <span>Austria & Italy Specialists</span>
              <span className="hidden sm:inline">·</span>
              <span>Canada PGWP Admissions</span>
              <span className="hidden sm:inline">·</span>
              <span>UK & US Visa Processing</span>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('destinations-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:flex items-center gap-1.5 text-blue-900 hover:text-blue-700 font-bold transition-colors cursor-pointer"
            >
              <span>Explore Study Abroad Options</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SIGNATURE RED SERVICES RIBBON (FROM USER'S REFERENCE)
         ========================================================================= */}
      <RedServiceRibbon />

      {/* =========================================================================
          SECTION 2: 4-COLUMN TRUST & CREDIBILITY METRICS
         ========================================================================= */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1"
            >
              <span className="text-3xl sm:text-4xl font-black text-blue-900 tabular-nums">14+</span>
              <p className="text-sm font-bold text-slate-900">Years of Direct Experience</p>
              <p className="text-xs text-slate-500">Operating since 2011 across UAE & Pakistan.</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1"
            >
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tabular-nums">10,000+</span>
              <p className="text-sm font-bold text-slate-900">Successful Applications</p>
              <p className="text-xs text-slate-500">Admissions & visas secured across Europe and the West.</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1"
            >
              <span className="text-3xl sm:text-4xl font-black text-blue-900 tabular-nums">90%+</span>
              <p className="text-sm font-bold text-slate-900">Visa Approval Rate</p>
              <p className="text-xs text-slate-500">Rigorous pre-submission vetting and interview coaching.</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1"
            >
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tabular-nums">2</span>
              <p className="text-sm font-bold text-slate-900">Physical Consultancies</p>
              <p className="text-xs text-slate-500">Dubai Burjuman Headquarters & Lahore Gulberg Office.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: STUDY-ABROAD DESTINATIONS (NO PARAGRAPH UNDER MAIN HEADING)
         ========================================================================= */}
      <section id="destinations-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10"
        >
          <div>
            <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
              Top Study Abroad Portfolios
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Study Abroad Destinations
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setSelectedDestTab('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedDestTab === 'all'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Countries
            </button>
            <button
              onClick={() => setSelectedDestTab('europe')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedDestTab === 'europe'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Europe & Schengen
            </button>
            <button
              onClick={() => setSelectedDestTab('western')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedDestTab === 'western'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              UK, USA & Canada
            </button>
          </div>
        </motion.div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest: Destination, idx) => (
            <motion.div
              key={dest.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.country}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-md border border-slate-200 text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-xs">
                    <span className="font-mono text-blue-700 font-extrabold">{dest.code}</span>
                    <span>{dest.country}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {dest.country}
                    </h3>
                    <p className="text-xs text-blue-700 font-semibold mt-0.5">
                      {dest.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {dest.overview}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">Tuition:</span>
                      <span className="text-slate-900 font-semibold text-right">{dest.averageTuition}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">Work Rights:</span>
                      <span className="text-slate-700 text-right">{dest.workRights}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">Timeline:</span>
                      <span className="text-blue-900 font-bold text-right">{dest.visaProcessingTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-2.5">
                <button
                  onClick={() => onOpenConsultation(dest.country)}
                  className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors text-center cursor-pointer shadow-xs"
                >
                  Consult for {dest.country}
                </button>
                <button
                  onClick={() => onNavigate('/destinations')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-900 transition-colors cursor-pointer"
                  title="View full requirements"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OFFICIAL YOUTUBE SHOWCASE (@WSLConsultants)
         ========================================================================= */}
      <YouTubeShowcase onSelectVideo={onSelectYouTubeVideo} />

      {/* =========================================================================
          SECTION 5: CORE SERVICES (NO PARAGRAPH UNDER MAIN HEADING)
         ========================================================================= */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
              Consultancy Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Professional Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WSL_SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 24 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                      {serviceIconMap[service.iconName] || <GraduationCap className="w-6 h-6 text-blue-800" />}
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-slate-200/60 space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-blue-800 font-bold block mb-1">
                      Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <button
                    onClick={() => onOpenConsultation(undefined, service.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-900 hover:text-white border border-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-between cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE 6-STEP ROADMAP (NO PARAGRAPH UNDER MAIN HEADING)
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
            Structured Client Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Consultation & Visa Roadmap
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WSL_PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-black text-blue-900 font-sans tabular-nums">
                  {step.step}
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-600 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                  {step.timeline}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: AUTHENTIC TEAM SECTION (WITH USER'S UPLOADED TEAM MEMBERS)
         ========================================================================= */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
              Leadership & Counselors
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Professional Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WSL_TEAM.map((member, idx) => (
              <motion.div
                key={member.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md hover:border-blue-300 transition-all text-center"
              >
                <div className="space-y-3">
                  {/* Avatar / Portrait container */}
                  <div className="w-24 h-24 rounded-full mx-auto overflow-hidden bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center">
                    {member.id === 'tanveer-abbas' ? (
                      <img
                        src="/src/assets/images/wsl_leadership_board_1792299829974.jpg"
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : member.id === 'saba-tanveer' ? (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-950 font-black text-2xl font-serif">
                        ST
                      </div>
                    ) : member.id === 'infal-butt' ? (
                      <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center text-amber-950 font-black text-xl font-serif">
                        IB
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center text-emerald-950 font-black text-xl font-serif">
                        IS
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs text-blue-800 font-semibold mt-0.5">{member.role}</p>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">{member.office}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    {member.experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: VERIFIED SUCCESS STORIES
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10"
        >
          <div>
            <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
              Verified Client Outcomes
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Recent Visa Approvals
            </h2>
          </div>

          <button
            onClick={() => onNavigate('/success-stories')}
            className="px-4 py-2 text-xs font-bold text-blue-900 hover:text-blue-700 border border-blue-200 hover:border-blue-400 rounded-lg transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WSL_SUCCESS_STORIES.slice(0, 3).map((story, idx) => (
            <motion.div
              key={story.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 text-blue-900 font-bold flex items-center justify-center text-sm">
                      {story.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{story.studentName}</h4>
                      <p className="text-xs text-slate-500">{story.origin}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-blue-900 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                    {story.destination}
                  </span>
                </div>

                <div className="text-xs text-slate-600 border-y border-slate-100 py-2.5 space-y-0.5">
                  <p className="font-bold text-slate-900">{story.university}</p>
                  <p className="text-blue-800 font-semibold">{story.program}</p>
                  <p className="text-[11px] text-slate-500">{story.visaCategory}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {story.approvalImage && (
                <button
                  onClick={() =>
                    onOpenLightbox({
                      title: `${story.studentName} — ${story.destination} Visa Grant`,
                      subtitle: story.university,
                      image: story.approvalImage!,
                      description: `${story.studentName} successfully received ${story.visaCategory} for ${story.program} at ${story.university}.`
                    })
                  }
                  className="text-xs text-blue-900 hover:text-blue-700 flex items-center gap-1 pt-2 self-start font-bold cursor-pointer"
                >
                  <span>View Documentation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: DUAL HUBS (DUBAI BURJUMAN & LAHORE)
         ========================================================================= */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
              Visit Our Branches
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Consultancy Offices in Dubai & Lahore
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WSL_OFFICES.map((office) => (
              <div
                key={office.id}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                      <MapPin className="w-5 h-5 text-blue-800 shrink-0" />
                      <span>{office.title}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-900 px-2 py-0.5 rounded-full bg-blue-100 border border-blue-200">
                      {office.city}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {office.address}
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 border-t border-slate-200/60 pt-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-blue-800" />
                      <span>{office.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-800" />
                      <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-blue-900 font-bold hover:underline">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                  <a
                    href={`https://wa.me/${office.whatsapp.replace(/\D/g, '')}?text=Hello%20WSL%20Consultants,%20I%20would%20like%20to%20inquire%20with%20the%20${office.city}%20office.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    <WhatsAppIcon size={18} color="#059669" />
                    <span>WhatsApp {office.city}</span>
                  </a>
                  <button
                    onClick={() => onOpenConsultation(undefined, undefined)}
                    className="py-3 px-5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                  >
                    Book In-Person
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FAQS ACCORDION
         ========================================================================= */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {WSL_FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200/80 overflow-hidden transition-colors shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                  <span
                    className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-blue-900 font-bold text-sm shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: CLOSING CONSULTATION CTA
         ========================================================================= */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-indigo-950 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Admissions Open for 2025 – 2026 Intakes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white text-balance">
            Begin Your International Journey Today
          </h2>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-blue-950 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Free Profile Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/971547710629?text=Hello%20WSL%20Consultants,%20I%20would%20like%20to%20inquire%20about%20study%20visas."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 text-sm font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
            >
              <WhatsAppIcon size={20} color="#064e3b" />
              <span>Direct WhatsApp (+971 54 771 0629)</span>
            </a>
          </div>

          <p className="text-xs text-blue-200/80 pt-2 font-medium">
            Burjuman Dubai Office: Monday – Saturday 10:00 AM – 7:00 PM GST
          </p>
        </div>
      </section>
    </div>
  );
};
