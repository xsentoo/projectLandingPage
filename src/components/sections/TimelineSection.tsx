import React from 'react';
import { User, Target, BarChart2, Sparkles } from 'lucide-react';
import AnimatedTitle from '../ui/AnimatedTitle';
import TimelineStep from '../ui/TimelineStep';
import { useLanguage } from '../../context/LanguageContext';

const TimelineSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-dark-900" 
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(15, 10, 25, 0.95), rgba(15, 10, 25, 1))'
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedTitle text={t('howItWorksTitle')} />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <TimelineStep 
            icon={User}
            title={t('step1')}
            description={t('step1Desc')}
            step={1}
            delay={0.1}
          />
          
          <TimelineStep 
            icon={Target}
            title={t('step2')}
            description={t('step2Desc')}
            step={2}
            delay={0.3}
          />
          
          <TimelineStep 
            icon={BarChart2}
            title={t('step3')}
            description={t('step3Desc')}
            step={3}
            delay={0.5}
          />
          
          <TimelineStep 
            icon={Sparkles}
            title={t('step4')}
            description={t('step4Desc')}
            step={4}
            delay={0.7}
            isLast
          />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;