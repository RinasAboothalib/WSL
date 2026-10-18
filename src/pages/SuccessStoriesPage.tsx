import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  ArrowUpRight,
  Filter,
  ArrowRight,
  ChevronDown,
  Award,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { WSLLogo } from '../components/WSLLogo';
import { WSL_SUCCESS_STORIES, SuccessStory } from '../data/wslData';

interface SuccessStoriesPageProps {
  onOpenConsultation: (dest?: string) => void;
  onOpenLightbox: (media: any) => void;
}

export const SuccessStoriesPage: React.FC<SuccessStoriesPageProps> = ({
  onOpenConsultation,
  onOpenLightbox
}) => {
  const [filterCountry, setFilterCountry] = useState<string>('all');

  const filteredStories =
    filterCountry === 'all'
      ? WSL_SUCCESS_STORIES
      : WSL_SUCCESS_STORIES.filter((s) => s.destination.toLowerCase() === filterCountry.toLowerCase());

  const countries = ['all', 'Italy', 'Austria', 'Canada', 'United Kingdom', 'Czech Republic'];

  const handleSelectFilter = (country: string) => {
    setFilterCountry(country);
    const el = document.getElementById('stories-section');
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
            src="/src/assets/images/wsl_student_success_story_1792299830701.jpg"
            alt="Student celebrating study visa approval"
            className="w-full h-full object-cover object-top filter brightness-[0.92] saturate-[0.85]"
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
                  WSL Verified Approvals · UAE & South Asia Students
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.12] sm:leading-[1.08] text-balance"
              >
                Real Students. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
                  Proven Visa Approvals.
                </span>
              </motion.h1>

              {/* Quick Destination Filter Pills */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none max-w-full pt-1"
              >
                {countries.map((c) => (
                  <button
                    key={c}
                    onClick={() => handleSelectFilter(c)}
                    className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-white/90 hover:bg-blue-50 border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-800 shadow-xs transition-all hover:border-blue-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <span>{c === 'all' ? 'All Approvals' : `${c} Visas`}</span>
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
                  onClick={() => onOpenConsultation()}
                  className="px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-md shadow-blue-900/25 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Schedule Free Profile Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('stories-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Browse Student Approvals</span>
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
                  100% Authentic Consular Grant Letters
                </span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Verified Italian DSU Scholarships
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
                    Demonstrated Track Record
                  </span>
                  <Award className="w-4 h-4 text-blue-700" />
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[10px] text-blue-800 font-extrabold uppercase block">
                      Success Ratio
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      90%+ Visa Success Rate
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-[10px] text-emerald-800 font-extrabold uppercase block">
                      Scholarship Value
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      €8.5M+ DSU Regional Grants
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-500 font-extrabold uppercase block">
                      Total Alumni Placed
                    </span>
                    <p className="text-sm font-black text-slate-900 mt-0.5">
                      10,000+ International Students
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
              <span>Austria Approvals</span>
              <span className="hidden sm:inline">·</span>
              <span>Italy DSU Grants</span>
              <span className="hidden sm:inline">·</span>
              <span>Canada Visas</span>
              <span className="hidden sm:inline">·</span>
              <span>UK & Czech Republic</span>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('stories-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:flex items-center gap-1.5 text-blue-900 hover:text-blue-700 font-bold transition-colors cursor-pointer"
            >
              <span>Explore Student Stories & Case Studies</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FILTER & STORIES SECTION
         ========================================================================= */}
      <section id="stories-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
            Client Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Verified Visas & Student Experiences
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <span className="text-xs text-slate-500 font-bold flex items-center gap-1.5 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-blue-700" /> Filter:
          </span>
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setFilterCountry(c)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                filterCountry.toLowerCase() === c.toLowerCase()
                  ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20 scale-105'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {c === 'all' ? 'All Destinations' : c}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-blue-100 border border-blue-200 text-blue-900 font-bold flex items-center justify-center text-sm">
                      {story.initials}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                        {story.studentName}
                      </h3>
                      <p className="text-xs text-slate-500">{story.origin}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-900 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                    {story.destination}
                  </span>
                </div>

                {/* University and degree summary */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-0.5 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                    <Building2 className="w-3.5 h-3.5 text-blue-800" />
                    <span>{story.university}</span>
                  </div>
                  <p className="text-blue-800 font-semibold pl-5">{story.program}</p>
                  <p className="text-slate-500 pl-5">{story.visaCategory}</p>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {story.approvalImage ? (
                  <button
                    onClick={() =>
                      onOpenLightbox({
                        title: `${story.studentName} — ${story.destination} Visa Grant`,
                        subtitle: `${story.university} · ${story.program}`,
                        image: story.approvalImage!,
                        description: `Official visa granted for ${story.studentName}. Guided through complete admissions, scholarships, and consular filing by WSL Consultants UAE.`
                      })
                    }
                    className="text-xs text-blue-900 hover:text-blue-700 flex items-center gap-1 font-bold cursor-pointer"
                  >
                    <span>View Approval Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-xs text-slate-500">Verified Client File</span>
                )}

                <button
                  onClick={() => onOpenConsultation(story.destination)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-900 hover:text-white text-slate-700 border border-slate-200 text-xs font-bold transition-all cursor-pointer"
                >
                  Apply Similarly
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Be Our Next Success Story
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
            Every file begins with an honest, comprehensive evaluation. Schedule your session today with WSL Consultants Dubai or Lahore.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3.5 text-xs font-bold text-blue-950 bg-white hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <span>Schedule Free Profile Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
