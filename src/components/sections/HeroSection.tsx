import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const { t } = useLanguage();

  const handleDownloadClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div 
        className="absolute inset-0 -z-10 bg-dark-900" 
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(110, 66, 184, 0.15) 0%, rgba(15, 10, 25, 1) 70%)'
        }}
      />
      
      <div className="container mx-auto px-4 pt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <Logo size="lg" />
        </motion.div>
        
        <div className="mb-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold">
            <div className="fade-in-up">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-500">
                {t('heroPart1')}
              </span>
            </div>
            <div className="fade-in-up-delay-1">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-400">
                {t('heroPart2')}
              </span>
            </div>
            <div className="fade-in-up-delay-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-500">
                {t('heroPart3')}
              </span>
            </div>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-gray-300 max-w-xl mt-6 text-lg"
          >
            Train like your favorite anime hero. Level up, unlock transformations, and push beyond your limits.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button 
            onClick={handleDownloadClick}
            className="btn-primary relative overflow-hidden group"
          >
            <span className="relative z-10">{t('downloadButton')}</span>
            <span
              className="absolute inset-0 w-full h-full bg-white/10 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"
            ></span>
          </button>
        </motion.div>
        
        {/* Toast message */}
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: this, y: 50 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-800 border border-primary-600 px-6 py-3 rounded-lg shadow-lg z-50"
          >
            <p className="text-white font-medium">{t('comingSoon')} 🚀</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;