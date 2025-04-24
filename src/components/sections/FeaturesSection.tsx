import React from 'react';
import { Flame, TrendingUp, Trophy } from 'lucide-react';
import AnimatedTitle from '../ui/AnimatedTitle';
import FeatureCard from '../ui/FeatureCard';
import { useLanguage } from '../../context/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-dark-900/95" 
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 54, 217, 0.08) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(110, 66, 184, 0.08) 0%, transparent 40%)'
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedTitle text={t('featuresTitle')} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Flame}
            title={t('workoutsTitle')}
            description={t('workoutsDesc')}
            delay={0.1}
            color="orange"
          />
          
          <FeatureCard 
            icon={TrendingUp}
            title={t('progressionTitle')}
            description={t('progressionDesc')}
            delay={0.3}
            color="blue"
          />
          
          <FeatureCard 
            icon={Trophy}
            title={t('transformationsTitle')}
            description={t('transformationsDesc')}
            delay={0.5}
            color="yellow"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;