import React from 'react';
import AnimatedTitle from '../ui/AnimatedTitle';
import Accordion from '../ui/Accordion';
import { useLanguage } from '../../context/LanguageContext';

const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-dark-900/95" 
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(110, 66, 184, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(255, 54, 217, 0.08) 0%, transparent 40%)'
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedTitle text={t('faqTitle')} />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion title={t('faq1Q')}>
            <p>{t('faq1A')}</p>
          </Accordion>
          
          <Accordion title={t('faq2Q')}>
            <p>{t('faq2A')}</p>
          </Accordion>
          
          <Accordion title={t('faq3Q')}>
            <p>{t('faq3A')}</p>
          </Accordion>
          
          <Accordion title={t('faq4Q')}>
            <p>{t('faq4A')}</p>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;