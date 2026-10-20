import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, ArrowRight, ChevronDown } from 'lucide-react';
import { WSLLogo } from '../components/WSLLogo';
import { KineticHeading } from '../components/KineticHeading';
import { KineticMarquee } from '../components/KineticMarquee';
import { HelloMondayCard } from '../components/HelloMondayCard';
import { WSL_TEAM } from '../data/wslData';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation, onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* =========================================================================
          FULL-PAGE HERO SECTION (100vh / min-h-screen)
         ========================================================================= */}
      <section className="relative min-h-[100dvh] flex flex-col justify-between pt-20 pb-4 sm:pt-24 sm:pb-8 overflow-hidden bg-white">
        {/* Background Image with Luminous Light Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/wsl_leadership_board_1792299829974.jpg"
            alt="WSL Consultants Leadership"
            className="w-full h-full object-cover object-top filter brightness-[0.92] saturate-[0.8]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
        </div>

        {/* Hero Center Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-10">
          <div className="max-w-3xl space-y-3.5 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs max-w-full"
            >
              <WSLLogo size={20} />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-900 truncate">
                About WSL Consultants · Dubai & Lahore
              </span>
            </motion.div>

            <div className="space-y-3">
              <KineticHeading
                as="h1"
                delay={0.06}
                immediate={true}
                className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.12] sm:leading-[1.08]"
                highlightWords={['Integrity', 'Educational', 'Excellence.']}
              >
                14+ Years of Integrity & Educational Excellence.
              </KineticHeading>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl"
              >
                Founded in 2011, WSL Consultants has built a sterling reputation guiding thousands of students toward verified degrees and permanent international careers across Europe and beyond.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2"
            >
              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-md shadow-blue-900/25 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Free Profile Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('leadership-details');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Meet Leadership Team</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar: Key Indicators & Scroll Cue */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pr-16 sm:pr-0 pb-1 sm:pb-0">
          <div className="pt-3 sm:pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs font-semibold text-slate-600">
              <span>Founded in 2011</span>
              <span className="hidden sm:inline">·</span>
              <span>Licensed UAE & Pakistan Entity</span>
              <span className="hidden sm:inline">·</span>
              <span>10,000+ Students Placed</span>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('leadership-details');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:flex items-center gap-1.5 text-blue-900 hover:text-blue-700 font-bold transition-colors cursor-pointer"
            >
              <span>Explore Our Leadership & Mission</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Hello Monday Kinetic Marquee */}
      <KineticMarquee theme="accent" speed={24} />

      {/* =========================================================================
          LEADERSHIP SHOWCASE SECTION
         ========================================================================= */}
      <section id="leadership-details" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HelloMondayCard
          cursorBadge="LEADERSHIP"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/80 shadow-md"
        >
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
              <img
                src="/src/assets/images/wsl_leadership_board_1792299829974.jpg"
                alt="Saba Tanveer and Tanveer Abbas - Executive Leadership"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase font-bold text-blue-800">Founders & Executive Directors</span>
            <KineticHeading
              as="h2"
              className="text-2xl sm:text-3xl font-black text-slate-900"
            >
              A Personal Commitment from Saba Tanveer & Tanveer Abbas
            </KineticHeading>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              "When we established WSL Consultants in 2011, our goal was simple: provide transparent, realistic advice to students seeking higher education in Europe and the West. Every student who walks into our Dubai or Lahore office receives honest assessment—not empty promises."
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-slate-900 font-bold block text-sm">Saba Tanveer</span>
                <span className="text-blue-800 font-semibold">Chief Executive Officer</span>
                <p className="mt-1">Strategist in European University Partnerships & DSU Scholarship allocations.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-slate-900 font-bold block text-sm">Tanveer Abbas</span>
                <span className="text-blue-800 font-semibold">Managing Director</span>
                <p className="mt-1">Head of Diplomatic Legalization, Hague Apostille, and Case Compliance.</p>
              </div>
            </div>
          </div>
        </HelloMondayCard>
      </section>

      {/* =========================================================================
          CORE PRINCIPLES
         ========================================================================= */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
              Our Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Why Students Choose WSL Consultants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Factual & Transparent Advice</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                We never guarantee admissions or visas, because consular decisions belong solely to embassies. Instead, we ensure your dossier complies 100% with immigration rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Deep European Specialization</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Expert technical knowledge of Italian Universitaly portals, regional DSU scholarship income calculation (ISEE Parificato), and Austrian student residence permits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Post-Arrival Student Network</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Over a decade of successful cohorts means WSL has an active network of senior alumni across Vienna, Milan, Rome, Prague, London, and Toronto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SENIOR COUNSELORS
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
            Advisory Council
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Senior Admissions Counselors
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WSL_TEAM.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4 hover:shadow-md transition-all text-center"
            >
              <div className="w-20 h-20 rounded-full mx-auto overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center text-blue-900 font-bold text-lg font-serif">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs text-blue-700 font-semibold">{member.role}</p>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">{member.office}</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {member.bio}
              </p>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  {member.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CLOSING CTA
         ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Ready to Begin Your Educational Journey?
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto">
            Book an appointment with our leadership and admissions board at our Dubai Burjuman office or connect remotely.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 text-xs font-bold text-blue-950 bg-white hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <span>Schedule Free Evaluation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
