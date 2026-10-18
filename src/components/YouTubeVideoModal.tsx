import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Play, Eye, Clock } from 'lucide-react';
import { YouTubeVideo } from '../data/wslData';

interface YouTubeVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: YouTubeVideo | null;
}

export const YouTubeVideoModal: React.FC<YouTubeVideoModalProps> = ({ isOpen, onClose, video }) => {
  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22 }}
          className="relative max-w-3xl w-full bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-slate-900"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-extrabold text-red-600">
                Official YouTube Video · @WSLConsultants
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Frame */}
          <div className="relative aspect-video bg-black w-full overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Content details */}
          <div className="p-6 space-y-4">
            <div>
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-1.5 font-medium">
                <span className="text-blue-900 font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                  {video.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {video.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {video.views}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {video.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {video.description}
            </p>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Watch Channel on YouTube (@WSLConsultants)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Player
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
