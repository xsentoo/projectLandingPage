import React from 'react';
import { Heart, Instagram, Twitter, Github } from 'lucide-react';
import Logo from '../ui/Logo';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-primary-800/30 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Logo size="md" />
            <p className="mt-4 text-gray-400 max-w-md">
              FitnessAnime transforms your workout routine into an epic anime journey. 
              Train, level up, and unlock transformations as you become stronger.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-display text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary-300 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-primary-300 transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-primary-300 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-300 transition">
                  {t('privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-300 transition">
                  {t('termsOfService')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} FitnessAnime. {t('footerRights')}.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary-300 transition hover:animate-spin-slow"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary-300 transition hover:animate-spin-slow"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary-300 transition hover:animate-spin-slow"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-xs flex items-center justify-center">
          <span>{t('madeWith')}</span>
          <Heart size={12} className="mx-1 text-accent-500" />
          <span>by Thayaparan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;