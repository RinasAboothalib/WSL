import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { WSLLogo } from './WSLLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WSL_OFFICES } from '../data/wslData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="bg-slate-100/90 text-slate-600 border-t border-slate-200/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Column with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <WSLLogo size={46} withText={true} />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md font-normal">
              WSL Consultants is a premier international education and visa advisory firm with 14+ years of expertise. We assist students from the UAE and worldwide in securing direct university admissions, 100% regional scholarships, and compliant visa grants.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://web.facebook.com/wslconsultants.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-blue-900 hover:border-blue-400 hover:bg-blue-50 transition-all text-xs font-bold"
                aria-label="Official Facebook"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/wsluae/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-pink-600 hover:border-pink-400 hover:bg-pink-50 transition-all text-xs font-bold"
                aria-label="Official Instagram"
              >
                IG
              </a>
              <a
                href="https://wa.me/971547710629?text=Hello%20WSL%20Consultants,%20I%20would%20like%20to%20inquire%20about%20study%20visas."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 shadow-xs flex items-center justify-center text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300 transition-all"
                aria-label="Official WhatsApp"
              >
                <WhatsAppIcon size={20} color="#059669" />
              </a>
              <a
                href="https://wslconsultants.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-blue-900 hover:border-blue-400 hover:bg-blue-50 transition-all"
                aria-label="Official Website"
                title="Official Portal"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Licensed Educational Consultancy in UAE & Pakistan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-slate-900">Navigation</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  About Us & Leadership
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Study Destinations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Visa & Admission Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/success-stories')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Contact & Assessment
                </button>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-slate-900">Study Abroad</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <button onClick={() => onNavigate('/destinations')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Study in Austria (Low Tuition)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Study in Italy (DSU Scholarships)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Study in Canada (PGWP Rights)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Study in United Kingdom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Study in United States
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations')} className="hover:text-blue-900 transition-colors cursor-pointer">
                  Czech Republic & Poland
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Consultation */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-slate-900">Direct Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-slate-900 font-bold text-xs">Dubai Head Office</p>
                <p className="text-xs text-slate-500">R308 Adidas Bldg, Near Burjuman Mall</p>
                <a href="tel:+971547710629" className="text-blue-800 hover:underline text-xs flex items-center gap-1 font-semibold mt-0.5">
                  <Phone className="w-3 h-3" /> +971 54 771 0629
                </a>
              </div>
              <div>
                <p className="text-slate-900 font-bold text-xs">Lahore Office</p>
                <p className="text-xs text-slate-500">Rakhshanda Heights, Multan Rd, Gulberg</p>
                <a href="tel:+923000701444" className="text-blue-800 hover:underline text-xs flex items-center gap-1 font-semibold mt-0.5">
                  <Phone className="w-3 h-3" /> +92 300 070 1444
                </a>
              </div>
              <div className="pt-1">
                <a href="mailto:info@wslconsultants.ae" className="text-slate-700 hover:text-blue-900 text-xs flex items-center gap-1 font-medium">
                  <Mail className="w-3 h-3 text-blue-800" /> info@wslconsultants.ae
                </a>
              </div>
              <button
                onClick={onOpenConsultation}
                className="w-full mt-2 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Office Address Details Strip */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 border-b border-slate-200">
          {WSL_OFFICES.map((office) => (
            <div key={office.id} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                <MapPin className="w-3.5 h-3.5 text-blue-800" />
                <span>{office.title}</span>
              </div>
              <p className="text-slate-600">{office.address}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-blue-700" /> {office.hours}
                </span>
                <span>{office.poBox || 'Direct Office Contact'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright and Legal Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WSL Consultants UAE (wslconsultants.ae). All rights reserved.</p>
          <p className="max-w-xl text-center md:text-right text-[11px] text-slate-500">
            WSL Consultants is an independent educational and visa consultancy firm. Admissions and visa decisions are exclusively at the discretion of respective university authorities and consular visa offices.
          </p>
        </div>
      </div>
    </footer>
  );
};
