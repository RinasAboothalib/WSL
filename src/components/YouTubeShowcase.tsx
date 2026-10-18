import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Eye, Clock, ArrowUpRight, Youtube } from 'lucide-react';
import { WSL_YOUTUBE_VIDEOS, YouTubeVideo } from '../data/wslData';

interface YouTubeShowcaseProps {
  onSelectVideo: (video: YouTubeVideo) => void;
}

export const YouTubeShowcase: React.FC<YouTubeShowcaseProps> = ({ onSelectVideo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'Austria Student Visa', label: 'Austria' },
    { id: 'Italy & DSU Scholarships', label: 'Italy' },
    { id: 'Visa After Refusals', label: 'Refusals Case Studies' },
    { id: 'Behind The Scenes', label: 'Behind The Scenes' },
    { id: 'USA & North America', label: 'USA & Canada' }
  ];

  const filteredVideos =
    activeCategory === 'all'
      ? WSL_YOUTUBE_VIDEOS
      : WSL_YOUTUBE_VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Channel Banner & Statistics Strip */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-600 via-red-700 to-rose-800 text-white shadow-xl shadow-red-700/15 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-md">
              <Youtube className="w-9 h-9" />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                <span className="text-xl sm:text-2xl font-black font-sans tracking-tight">
                  WSL Consultants
                </span>
                <span className="text-xs uppercase font-extrabold px-2 py-0.5 rounded-full bg-white/20 border border-white/25">
                  Official Channel
                </span>
              </div>
              <p className="text-xs sm:text-sm text-red-100 font-medium">
                @WSLConsultants · 163,000+ Subscribers · 1,200+ Guides & Student Interviews
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@WSLConsultants"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5 shrink-0"
          >
            <span>Subscribe on YouTube</span>
            <ArrowUpRight className="w-4 h-4 text-red-600" />
          </a>
        </motion.div>

        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-wider text-red-600 font-extrabold block mb-1">
              Video Masterclasses & Student Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Official YouTube Channel Videos
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl overflow-x-auto scrollbar-none self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-red-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* YouTube Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 22 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectVideo(video)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-red-300 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail with duration badge and play button */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-13 h-13 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all">
                      <Play className="w-6 h-6 fill-white text-white ml-1" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono font-bold text-white">
                    {video.duration}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-slate-900 shadow-xs">
                    {video.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                    {video.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Bottom stats and action */}
              <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50/60">
                <span className="flex items-center gap-1 font-medium">
                  <Eye className="w-3.5 h-3.5 text-slate-400" /> {video.views}
                </span>

                <span className="text-red-600 font-bold group-hover:underline flex items-center gap-1 text-[11px]">
                  <span>Watch Video</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
