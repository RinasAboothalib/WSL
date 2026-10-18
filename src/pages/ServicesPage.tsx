import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Building2,
  Award,
  FileCheck,
  Compass,
  PlaneTakeoff,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { WSLLogo } from '../components/WSLLogo';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { WSL_SERVICES, VisaService } from '../data/wslData';

interface ServicesPageProps {
  onOpenConsultation: (country?: string, service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(WSL_SERVICES[0].id);

  const activeService = WSL_SERVICES.find((s) => s.id === selectedServiceId) || WSL_SERVICES[0];

  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-blue-900" />,
    Building2: <Building2 className="w-6 h-6 text-blue-900" />,
    Award: <Award className="w-6 h-6 text-blue-900" />,
    FileCheck: <FileCheck className="w-6 h-6 text-blue-900" />,
    Compass: <Compass className="w-6 h-6 text-blue-900" />,
    PlaneTakeoff: <PlaneTakeoff className="w-6 h-6 text-blue-900" />
  };

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    const el = document.getElementById('services-breakdown');
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
            src="/src/assets/images/wsl_visa_consultation_1792299791395.jpg"
            alt="WSL Consultants personalized visa guidance"
            className="w-full h-full object-cover object-center filter brightness-[0.92] saturate-[0.85]"
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
                  WSL Advisory Spectrum · Dubai & Lahore
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.12] sm:leading-[1.08] text-balance"
              >
                Expert Advisory. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
                  Zero-Error Visa Approvals.
                </span>
              </motion.h1>

              {/* Quick Service Pills */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none max-w-full pt-1"
              >
                {WSL_SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectService(s.id)}
                    className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-white/90 hover:bg-blue-50 border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-800 shadow-xs transition-all hover:border-blue-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <span>{s.title}</span>
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
                  onClick={() => onOpenConsultation(undefined, activeService.id)}
                  className="px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-md shadow-blue-900/25 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Service Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('services-breakdown');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View All Services</span>
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
                  A-to-Z Legalization & Attestation
                </span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Official Mock Interview Prep
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
                    Full Spectrum Guarantees
                  </span>
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[10px] text-blue-800 font-extrabold uppercase block">
                      University Applications
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      Direct Submission to Accredited Institutions
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-[10px] text-emerald-800 font-extrabold uppercase block">
                      Legal Compliance
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      MOFA, Apostille, CIMEA & DOV Attestation
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-500 font-extrabold uppercase block">
                      Visa Precision
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      Checklist Audited Prior to Embassy Submission
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Smooth Scroll Cue */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pr-16 sm:pr-0 pb-1 sm:pb-0">
          <div className="pt-3 sm:pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-semibold text-slate-700">
              <span>Study Abroad Visas</span>
              <span className="hidden sm:inline">·</span>
              <span>Scholarship Legalization</span>
              <span className="hidden sm:inline">·</span>
              <span>Visit Visas</span>
              <span className="hidden sm:inline">·</span>
              <span>Post-Arrival Assistance</span>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('services-breakdown');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:flex items-center gap-1.5 text-blue-900 hover:text-blue-700 font-bold transition-colors cursor-pointer"
            >
              <span>Explore All 6 Advisory Services</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN SERVICE BREAKDOWN & DETAIL VIEW
         ========================================================================= */}
      <section id="services-breakdown" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
            End-to-End Service Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Detailed Service Deliverables
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Service Selector Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {WSL_SERVICES.map((service, idx) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-3.5 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-900 text-white border-blue-900 shadow-md shadow-blue-900/15 scale-[1.02]'
                      : 'bg-white border-slate-200/80 text-slate-800 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-900'
                    }`}
                  >
                    {iconMap[service.iconName] || <GraduationCap className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold leading-snug">{service.title}</h3>
                    <span className={`text-[11px] font-mono ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>
                      Scope 0{idx + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card */}
          <div className="lg:col-span-8 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                {iconMap[activeService.iconName]}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold">
                  Service Specifications
                </span>
                <h2 className="text-2xl font-black text-slate-900">
                  {activeService.title}
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {activeService.fullDesc}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                Target Profile / Ideal Candidate:
              </span>
              <p className="text-xs text-blue-900 font-bold">
                {activeService.idealFor}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                Key Scope Deliverables:
              </h4>
              <div className="space-y-2">
                {activeService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenConsultation(undefined, activeService.id)}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Book Consultation for this Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`https://wa.me/971547710629?text=Hello%20WSL%20Consultants,%20I%20have%20questions%20regarding%20${encodeURIComponent(activeService.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <WhatsAppIcon size={16} color="#059669" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Quality Assurance Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Consular Quality Assurance & Compliance
              </h4>
              <p className="text-xs text-slate-600 max-w-xl">
                Every file is scrutinized against current embassy checklists and attested via authorized diplomatic channels before submission.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenConsultation()}
            className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-colors cursor-pointer shadow-md shadow-blue-900/20 whitespace-nowrap"
          >
            Request Free File Audit
          </button>
        </div>
      </section>
    </div>
  );
};
