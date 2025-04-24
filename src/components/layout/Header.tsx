import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import PowerLevel from '../ui/PowerLevel';
import LanguageSelector from '../ui/LanguageSelector';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-900/90 backdrop-blur-md shadow-lg shadow-primary-900/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <LanguageSelector />
            <a href="#features" className="text-white hover:text-primary-300 transition duration-300">
              Features
            </a>
            <a href="#how-it-works" className="text-white hover:text-primary-300 transition duration-300">
              How It Works
            </a>
            <a href="#faq" className="text-white hover:text-primary-300 transition duration-300">
              FAQ
            </a>
          </nav>
          
          <div className="border-l border-primary-700/30 pl-6">
            <PowerLevel />
          </div>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <div className="pb-4">
                <LanguageSelector />
              </div>
              <a 
                href="#features" 
                className="text-white hover:text-primary-300 transition duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-white hover:text-primary-300 transition duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#faq" 
                className="text-white hover:text-primary-300 transition duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-2 border-t border-primary-700/30">
                <PowerLevel />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;