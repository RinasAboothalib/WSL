import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { WSLLogo } from './WSLLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WSL_DESTINATIONS, WSL_SERVICES } from '../data/wslData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDestination?: string;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedDestination,
  preselectedService
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    office: 'Dubai (Burjuman HQ)',
    destination: preselectedDestination || 'Austria',
    service: preselectedService || 'student-visa',
    currentEducation: "Bachelor's Degree",
    intakeYear: '2025 / 2026',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Valid phone / WhatsApp number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello WSL Consultants, I would like to schedule a free profile consultation.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Destination:* ${formData.destination}\n` +
      `*Service:* ${formData.service}\n` +
      `*Current Education:* ${formData.currentEducation}\n` +
      `*Target Intake:* ${formData.intakeYear}\n` +
      `*Preferred Office:* ${formData.office}\n` +
      `*Notes:* ${formData.notes || 'Please review my study visa eligibility.'}`
    );
    window.open(`https://wa.me/971547710629?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-slate-900"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
            <div className="flex items-center gap-3">
              <WSLLogo size={32} />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-blue-700 font-extrabold block">
                  Free Assessment
                </span>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  Book Profile Consultation
                </h3>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-blue-700">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Fatima Al-Zahra"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:bg-white transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-blue-700">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. student@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:bg-white transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp / Phone <span className="text-blue-700">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +971 50 123 4567"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:bg-white transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Office
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Destination
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-700 focus:bg-white"
                    >
                      {WSL_DESTINATIONS.map((dest) => (
                        <option key={dest.id} value={dest.country}>
                          {dest.country}
                        </option>
                      ))}
                      <option value="Germany">Germany</option>
                      <option value="Poland">Poland</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Other / Undecided">Other / Undecided</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-700 focus:bg-white"
                    >
                      {WSL_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Current Qualification
                    </label>
                    <select
                      value={formData.currentEducation}
                      onChange={(e) => setFormData({ ...formData, currentEducation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-700 focus:bg-white"
                    >
                      <option value="High School / A-Levels">High School / A-Levels / Intermediate</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Currently Enrolled">Currently Enrolled</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Intake
                    </label>
                    <select
                      value={formData.intakeYear}
                      onChange={(e) => setFormData({ ...formData, intakeYear: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-700 focus:bg-white"
                    >
                      <option value="Autumn / Winter 2025">Autumn / Winter 2025</option>
                      <option value="Spring / Summer 2026">Spring / Summer 2026</option>
                      <option value="Autumn / Winter 2026">Autumn / Winter 2026</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Notes / Specific Questions
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention any specific program or scholarship queries..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:bg-white resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Profile Evaluation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-5 py-3 text-sm font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon size={18} color="#059669" />
                    <span>Instant WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                  <span>Strict confidentiality: We never share your data.</span>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Consultation Request Received
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our counselor for{' '}
                  <span className="font-bold text-blue-900">{formData.destination}</span> at our{' '}
                  <span className="font-bold text-slate-900">{formData.office}</span> will contact you within 24 hours at{' '}
                  <span className="text-slate-900 font-semibold">{formData.phone}</span>.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <WhatsAppIcon size={18} color="#FFFFFF" />
                    <span>Connect on WhatsApp Now</span>
                  </button>
                  <button
                    onClick={resetAndClose}
                    className="w-full sm:w-auto px-4 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
