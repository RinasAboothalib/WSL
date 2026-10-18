import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Send,
  ChevronDown,
  Building2,
  ArrowRight
} from 'lucide-react';
import { WSLLogo } from '../components/WSLLogo';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { WSL_OFFICES } from '../data/wslData';

export const ContactPage: React.FC = () => {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>('dubai');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'Austria',
    office: 'Dubai (Burjuman HQ)',
    message: ''
  });

  const activeOffice = WSL_OFFICES.find((o) => o.id === selectedOfficeId) || WSL_OFFICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello WSL Consultants,\n\nI would like to book a consultation.\n*Name:* ${formData.name || 'Prospective Student'}\n*Destination:* ${formData.destination}\n*Office:* ${formData.office}\n*Note:* ${formData.message || 'Please guide me on university admissions and study visas.'}`
    );
    window.open(`https://wa.me/971547710629?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* =========================================================================
          FULL-PAGE HERO SECTION (100vh / min-h-screen)
         ========================================================================= */}
      <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-10 overflow-hidden bg-white">
        {/* Background Image with Luminous Light Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/wsl_leadership_board_1792299829974.jpg"
            alt="WSL Consultants Dubai Corporate Headquarters"
            className="w-full h-full object-cover object-center filter brightness-[0.92] saturate-[0.8]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
        </div>

        {/* Hero Center Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs"
              >
                <WSLLogo size={24} />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Official UAE & South Asia Headquarters
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08] text-balance"
              >
                Direct Access. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
                  Dubai & Lahore Offices.
                </span>
              </motion.h1>

              {/* Quick Branch Selector Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap items-center gap-2 pt-1"
              >
                {WSL_OFFICES.map((office) => (
                  <button
                    key={office.id}
                    onClick={() => {
                      setSelectedOfficeId(office.id);
                      const el = document.getElementById('contact-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 rounded-xl bg-white/90 hover:bg-blue-50 border border-slate-200 text-xs font-bold text-slate-800 shadow-xs transition-all hover:border-blue-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    <Building2 className="w-3.5 h-3.5 text-blue-800" />
                    <span>{office.city} Office ({office.country})</span>
                  </button>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById('contact-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-4 text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-md shadow-blue-900/25 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Free Assessment Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-4 text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Branch Directory & Maps</span>
                </button>
              </motion.div>

              {/* Verified Trust Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.35 }}
                className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500"
              >
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Physical Walk-in & Virtual Video Consultations
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Direct Advisory Line: +971 54 771 0629
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  No Hidden Fees · Free Profile Evaluation
                </span>
              </motion.div>
            </div>

            {/* Right Column: Hero Metrics / Office Quick Info Card */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl shadow-slate-300/60 space-y-5 max-w-sm w-full"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-extrabold text-blue-900 uppercase tracking-wider">
                    Dubai Corporate HQ
                  </span>
                  <MapPin className="w-4 h-4 text-blue-700" />
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <span className="text-[10px] text-blue-800 font-extrabold uppercase block">
                      Physical Location
                    </span>
                    <p className="text-xs font-bold text-slate-900 mt-0.5 leading-snug">
                      Office No. 201-54, 2nd Floor, R308 Building (Adidas Bldg), Near Burjuman Mall, Dubai
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-[10px] text-emerald-800 font-extrabold uppercase block">
                      Direct Hotlines
                    </span>
                    <p className="text-xs font-bold text-slate-900 mt-0.5">
                      Tel: +971 54 771 0629
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-500 font-extrabold uppercase block">
                      Operating Schedule
                    </span>
                    <p className="text-xs font-bold text-slate-900 mt-0.5">
                      Monday – Saturday · 9:00 AM – 7:00 PM GST
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Smooth Scroll Cue */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="pt-4 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex flex-wrap items-center gap-6 font-semibold text-slate-700">
              <span>Dubai HQ (Burjuman)</span>
              <span>·</span>
              <span>Lahore Regional Centre</span>
              <span>·</span>
              <span>Direct Phone: +971 54 771 0629</span>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('contact-form');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 text-blue-900 hover:text-blue-700 font-bold transition-colors cursor-pointer"
            >
              <span>Submit Assessment or View Maps</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT FORM & BRANCH DIRECTORY SECTION
         ========================================================================= */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block mb-1">
            Free Profile Evaluation
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Schedule an Appointment or File Assessment
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Assessment & Inquiry Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg">
            <h3 className="text-2xl font-black text-slate-900 mb-6">
              Send Your Profile for Assessment
            </h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-blue-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Mansoor"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-blue-700">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. tariq@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp <span className="text-blue-700">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +971 50 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Country
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-700 focus:bg-white"
                    >
                      <option value="Austria">Austria</option>
                      <option value="Italy">Italy (DSU Scholarships)</option>
                      <option value="Canada">Canada (PGWP)</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Poland">Poland</option>
                      <option value="Other / Undecided">Other / Undecided</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nearest Branch Office
                  </label>
                  <select
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-700 focus:bg-white"
                  >
                    <option value="Dubai (Burjuman HQ)">Dubai HQ (Near Burjuman Mall)</option>
                    <option value="Lahore (Gulberg Office)">Lahore (Rakhshanda Heights, Gulberg)</option>
                    <option value="Online Video Consultation">Remote / Online Video Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Academic Background & Queries
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your current qualification, grades, and degree of interest..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:bg-white resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Free Assessment Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon size={18} color="#059669" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Your personal contact information is held with strict confidentiality.</span>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Assessment Request Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. A senior counselor from our{' '}
                  <span className="text-blue-900 font-bold">{formData.office}</span> will contact you within 24 hours at{' '}
                  <span className="text-slate-900 font-bold">{formData.phone}</span>.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <WhatsAppIcon size={16} color="#FFFFFF" />
                    <span>Open in WhatsApp Now</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-2.5 px-4 text-xs text-slate-700 hover:text-slate-900 bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Office Directory & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Branch Switcher */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 border border-slate-200 rounded-2xl">
              {WSL_OFFICES.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOfficeId(office.id)}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    selectedOfficeId === office.id
                      ? 'bg-white text-blue-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {office.city} Office
                </button>
              ))}
            </div>

            {/* Selected Office Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{activeOffice.title}</h3>
                  <span className="text-xs text-blue-700 font-mono font-bold">{activeOffice.country}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                  <span>{activeOffice.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-800 shrink-0" />
                  <a href={`tel:${activeOffice.phone.replace(/\s+/g, '')}`} className="text-blue-900 font-bold hover:underline">
                    {activeOffice.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-800 shrink-0" />
                  <a href={`mailto:${activeOffice.email}`} className="text-slate-700 hover:text-blue-900">
                    {activeOffice.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-blue-800 shrink-0" />
                  <span className="text-slate-500">{activeOffice.hours}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${activeOffice.whatsapp.replace(/\D/g, '')}?text=Hello%20WSL%20Consultants,%20I%20would%20like%20to%20connect%20with%20the%20${activeOffice.city}%20office.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <WhatsAppIcon size={18} color="#059669" />
                  <span>Direct WhatsApp ({activeOffice.city})</span>
                </a>
              </div>
            </div>

            {/* Official Social Links Box */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                Official Media Channels
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://web.facebook.com/wslconsultants.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800 hover:text-blue-900 transition-colors"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-700" />
                </a>
                <a
                  href="https://www.instagram.com/wsluae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-50 hover:bg-pink-50 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800 hover:text-pink-900 transition-colors"
                >
                  <span>Instagram @wsluae</span>
                  <ExternalLink className="w-3.5 h-3.5 text-pink-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
