import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { ConsultationModal } from './components/ConsultationModal';
import { MediaLightbox } from './components/MediaLightbox';
import { YouTubeVideoModal } from './components/YouTubeVideoModal';
import { HelloMondayCursor } from './components/HelloMondayCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { InteractiveDrawer } from './components/InteractiveDrawer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { ServicesPage } from './pages/ServicesPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { ContactPage } from './pages/ContactPage';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { YouTubeVideo, Destination, VisaService } from './data/wslData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    if (path === '' || path === '/') return '/';
    return path;
  });

  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [preselectedDest, setPreselectedDest] = useState<string | undefined>();
  const [preselectedServ, setPreselectedServ] = useState<string | undefined>();

  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeMedia, setActiveMedia] = useState<any>(null);

  const [youtubeModalOpen, setYoutubeModalOpen] = useState<boolean>(false);
  const [activeYouTubeVideo, setActiveYouTubeVideo] = useState<YouTubeVideo | null>(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  const handleOpenConsultation = (dest?: string, service?: string) => {
    setPreselectedDest(dest);
    setPreselectedServ(service);
    setConsultationOpen(true);
  };

  const handleOpenLightbox = (media: any) => {
    setActiveMedia(media);
    setLightboxOpen(true);
  };

  const handleSelectYouTubeVideo = (video: YouTubeVideo) => {
    setActiveYouTubeVideo(video);
    setYoutubeModalOpen(true);
  };

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [drawerItem, setDrawerItem] = useState<Destination | VisaService | null>(null);
  const [drawerType, setDrawerType] = useState<'destination' | 'service'>('destination');

  const handleOpenDrawer = (item: Destination | VisaService, type: 'destination' | 'service') => {
    setDrawerItem(item);
    setDrawerType(type);
    setDrawerOpen(true);
  };

  const renderActivePage = () => {
    switch (currentPath) {
      case '/about':
        return (
          <AboutPage
            onOpenConsultation={() => handleOpenConsultation()}
            onNavigate={handleNavigate}
          />
        );
      case '/destinations':
        return (
          <DestinationsPage
            onOpenConsultation={(country) => handleOpenConsultation(country)}
            onOpenDrawer={(dest) => handleOpenDrawer(dest, 'destination')}
          />
        );
      case '/services':
        return (
          <ServicesPage
            onOpenConsultation={(dest, service) => handleOpenConsultation(dest, service)}
            onOpenDrawer={(serv) => handleOpenDrawer(serv, 'service')}
          />
        );
      case '/success-stories':
        return (
          <SuccessStoriesPage
            onOpenConsultation={(country) => handleOpenConsultation(country)}
            onOpenLightbox={handleOpenLightbox}
          />
        );
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onOpenLightbox={handleOpenLightbox}
            onSelectYouTubeVideo={handleSelectYouTubeVideo}
            onOpenDrawer={handleOpenDrawer}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Hello Monday Signature Interactive Magnetic Cursor */}
      <HelloMondayCursor />

      {/* Kinetic Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content with Directional Page Transition */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <PageTransition key={currentPath}>
            {renderActivePage()}
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Hello Monday Slide-over Interactive Detail Drawer */}
      <InteractiveDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        item={drawerItem}
        type={drawerType}
        onBookConsultation={(dest, serv) => handleOpenConsultation(dest, serv)}
      />

      {/* Free Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        preselectedDestination={preselectedDest}
        preselectedService={preselectedServ}
      />

      {/* Media Lightbox */}
      <MediaLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        media={activeMedia}
      />

      {/* YouTube Video Player Modal */}
      <YouTubeVideoModal
        isOpen={youtubeModalOpen}
        onClose={() => setYoutubeModalOpen(false)}
        video={activeYouTubeVideo}
      />

      {/* Floating Instant WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center group">
        <a
          href="https://wa.me/971547710629?text=Hello%20WSL%20Consultants,%20I%20would%20like%20to%20consult%20with%20an%20education%20advisor."
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="chat"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-emerald-500/35 hover:scale-105 active:scale-95 transition-all focus:outline-none"
          title="Direct WhatsApp with WSL Dubai Advisor"
          aria-label="Direct WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          <WhatsAppIcon size={26} color="#FFFFFF" className="relative z-10 drop-shadow-xs" />
        </a>
      </div>
    </div>
  );
}
