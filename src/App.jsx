import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

// Layout & UI
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import CustomCursor from './components/layout/CustomCursor';
import Chatbot from './components/ui/Chatbot';

// Sections
import HeroSection from './components/sections/HeroSection';
import RobotInvitation from './components/sections/RobotInvitation';
import PromoVideo from './components/sections/PromoVideo';
import VideoGallery from './components/sections/VideoGallery';
import CanvaShowcase from './components/sections/CanvaShowcase';
import KTFStudio from './components/sections/KTFStudio';
import Vision from './components/sections/Vision';
import Archive from './components/sections/Archive';
import Program from './components/sections/Program';
import Participation from './components/sections/Participation';
import ParticipantsList from './components/sections/ParticipantsList';
import Testimonials from './components/sections/Testimonials';
import Articles from './components/sections/Articles';
import Sponsors from './components/sections/Sponsors';
import FAQ from './components/sections/FAQ';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/905353629473?text=Merhaba%2C+K%C3%BCt%C3%BCphane+ve+Teknoloji+Festivali+hakk%C4%B1nda+bilgi+almak+istiyorum."
    target="_blank"
    rel="noopener noreferrer"
    title="WhatsApp"
    className="fixed bottom-5 left-5 z-50 transition-transform transform hover:scale-110"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      width="56"
      height="56"
      loading="lazy"
      decoding="async"
      className="w-14 h-14 drop-shadow-md"
    />
  </a>
);

const AppContent = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.scroll-animate');

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page transition-colors duration-300">
      <CustomCursor />
      <Header />

      <main>
        <HeroSection />
        <RobotInvitation />
        <PromoVideo />
        <VideoGallery />
        <CanvaShowcase />
        <KTFStudio />
        <Vision />
        <Archive />
        <Program />
        <Participation />
        <ParticipantsList />
        <Testimonials />
        <Articles />
        <Sponsors />
        <FAQ />
      </main>

      <Footer />
      <Chatbot />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<AppContent />} />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
