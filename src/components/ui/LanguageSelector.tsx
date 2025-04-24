import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { LanguageKey } from '../../constants/translations';

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleLanguageChange = (lang: LanguageKey) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className="flex items-center gap-2 text-white hover:text-primary-300 transition duration-300"
        onClick={toggleDropdown}
        aria-label="Select language"
      >
        <Globe size={20} />
        <span>{t('language')}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-dark-800 border border-primary-600/50 rounded-lg shadow-lg shadow-primary-900/50 p-2 z-50 animate-slide-down">
          <button
            className={`w-full text-left px-4 py-2 rounded hover:bg-primary-700/30 transition ${language === 'en' ? 'bg-primary-700/50' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            English
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded hover:bg-primary-700/30 transition ${language === 'fr' ? 'bg-primary-700/50' : ''}`}
            onClick={() => handleLanguageChange('fr')}
          >
            Français
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;