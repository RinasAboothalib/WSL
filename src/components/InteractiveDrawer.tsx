import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Building2, Calendar, Coins, Clock, Sparkles } from 'lucide-react';
import { Destination, VisaService } from '../data/wslData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WSLLogo } from './WSLLogo';
import { soundFX } from '../utils/soundEffects';

interface InteractiveDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  item: Destination | VisaService | null;
  type: 'destination' | 'service';
  onBookConsultation: (dest?: string, service?: string) => void;
}

export const InteractiveDrawer: React.FC<InteractiveDrawerProps> = ({
  isOpen,
  onClose,
  item,
  type,
  onBookConsultation
}) => {
  useEffect(() => {
    if (isOpen) {
      soundFX.playChime();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!item) return null;

  const isDestination = type === 'destination';
  const dest = isDestination ? (item as Destination) : null;
  const serv = !isDestination ? (item as VisaService) : null;

  const displayTitle = isDestination ? dest?.country : serv?.title;
  const displaySubtitle = isDestination ? dest?.tagline : serv?.idealFor;
  const displayImage = isDestination
    ? dest?.image
    : '/src/assets/images/wsl_visa_consultation_1792299791395.jpg';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Slide-over Panel (Hello Monday Style) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white shadow-2xl flex flex-col h-full z-10 overflow-y-auto"
          >
            {/* Top Bar with Logo & Close Button */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <WSLLogo size={32} />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  {isDestination ? 'Destination Portfolio' : 'Visa Service Dossier'}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Banner */}
            <div className="relative h-60 w-full overflow-hidden shrink-0 bg-slate-900">
              <img
                src={displayImage}
                alt={displayTitle}
                className="w-full h-full object-cover object-center filter brightness-[0.88]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase border border-white/30">
                  {isDestination ? `Study in ${dest?.country}` : 'Official WSL Service'}
                </span>
                <h3 className="text-2xl font-black text-white mt-2 leading-tight">
                  {displayTitle}
                </h3>
                {displaySubtitle && (
                  <p className="text-xs text-amber-300 font-semibold mt-1">
                    {displaySubtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-6 flex-1">
              {/* Description */}
              <p className="text-slate-700 leading-relaxed text-sm">
                {isDestination ? dest?.overview : serv?.fullDesc}
              </p>

              {/* Destination Specific Info */}
              {isDestination && dest && (
                <>
                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
                      <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                        <Coins className="w-4 h-4 text-amber-500" />
                        <span>Average Tuition</span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 mt-1">{dest.averageTuition}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                      <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>Primary Intakes</span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 mt-1">{dest.intakes.join(' · ')}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                      <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider">
                        <Clock className="w-4 h-4 text-indigo-600" />
                        <span>Visa Processing</span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 mt-1">{dest.visaProcessingTime}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
                      <div className="flex items-center gap-2 text-purple-900 font-bold text-xs uppercase tracking-wider">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span>Work Rights</span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 mt-1">{dest.workRights}</p>
                    </div>
                  </div>

                  {/* Scholarships Notice */}
                  {dest.scholarshipOpportunities && (
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                      <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>Scholarship Overview</span>
                      </div>
                      <p className="text-xs text-amber-950 font-medium mt-1 leading-relaxed">
                        {dest.scholarshipOpportunities}
                      </p>
                    </div>
                  )}

                  {/* Partner Universities */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2.5">
                      Partner & Recommended Universities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.popularUniversities.map((uni, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-800"
                        >
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Requirements */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2.5">
                      Admission & Visa Criteria
                    </h4>
                    <div className="space-y-2">
                      {dest.keyRequirements.map((req, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Service Specific Info */}
              {!isDestination && serv && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                    Service Scope & Deliverables
                  </h4>
                  <div className="space-y-2.5">
                    {serv.deliverables.map((feat: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="sticky bottom-0 z-20 bg-slate-50 border-t border-slate-200 p-6 flex flex-col gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBookConsultation(isDestination ? dest?.country : undefined, !isDestination ? serv?.title : undefined);
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-lg shadow-blue-900/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Book Free Assessment for {displayTitle}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/971547710629?text=${encodeURIComponent(
                  `Hello WSL Consultants Dubai, I would like to inquire about ${displayTitle}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <WhatsAppIcon size={18} color="#FFFFFF" />
                <span>Quick WhatsApp with Dubai Advisor</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
