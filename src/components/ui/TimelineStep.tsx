import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface TimelineStepProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  step: number;
  delay: number;
  isLast?: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  step, 
  delay,
  isLast = false
}) => {
  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute left-6 top-8 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-700/30 -z-10" />
      )}
      
      <motion.div 
        className="flex gap-6 mb-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <Icon size={20} className="text-white" />
          </div>
          <div className="absolute w-5 h-5 bg-accent-500 rounded-full -top-1 -right-1 flex items-center justify-center animate-pulse">
            <span className="text-xs font-bold text-white">{step}</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-display font-bold mb-1 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineStep;