import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TimelineSection from './components/sections/TimelineSection';
import FaqSection from './components/sections/FaqSection';
import ParticleEffect from './components/ui/ParticleEffect';
import ScanlineEffect from './components/ui/ScanlineEffect';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = 'FitnessAnime - Train Like a Hero';
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background effects */}
        <ParticleEffect />
        <ScanlineEffect />
        
        {/* Main content */}
        <Header />
        
        <main>
          <HeroSection />
          <FeaturesSection />
          <TimelineSection />
          <FaqSection />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;