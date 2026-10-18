import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

interface MediaLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  media: {
    title: string;
    subtitle?: string;
    image: string;
    description?: string;
    linkUrl?: string;
    linkLabel?: string;
  } | null;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({ isOpen, onClose, media }) => {
  if (!isOpen || !media) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
        />

        {/* Lightbox Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22 }}
          className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-slate-900"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-slate-700 hover:text-slate-950 hover:bg-white shadow-md transition-colors cursor-pointer"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Image display */}
            <div className="md:col-span-7 bg-slate-100 flex items-center justify-center min-h-[300px] md:min-h-[440px]">
              <img
                src={media.image}
                alt={media.title}
                className="w-full h-full max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content panel */}
            <div className="md:col-span-5 p-6 flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-slate-200">
              <div className="space-y-4">
                {media.subtitle && (
                  <span className="text-xs uppercase tracking-wider text-blue-700 font-extrabold block">
                    {media.subtitle}
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {media.title}
                </h3>
                {media.description && (
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {media.description}
                  </p>
                )}
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex flex-col gap-2">
                {media.linkUrl && (
                  <a
                    href={media.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>{media.linkLabel || 'View on Official Instagram'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="w-full py-2 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
