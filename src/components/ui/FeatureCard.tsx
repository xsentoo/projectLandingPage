import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay, color }) => {
  return (
    <motion.div 
      className="card-feature"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ 
        y: -8,
        boxShadow: `0 10px 25px -5px rgba(${color === 'orange' ? '249, 115, 22' : color === 'blue' ? '56, 189, 248' : '234, 179, 8'}, 0.2)` 
      }}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-${color === 'orange' ? 'orange' : color === 'blue' ? 'sky' : 'yellow'}-500/10`}>
        <Icon 
          size={24} 
          className={`text-${color === 'orange' ? 'orange' : color === 'blue' ? 'sky' : 'yellow'}-400`} 
        />
      </div>
      <h3 className="text-xl font-display font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;