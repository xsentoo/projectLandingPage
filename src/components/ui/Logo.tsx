import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-10',
    lg: 'h-24',
  };

  return (
    <div className={`font-display font-bold flex items-center gap-2 animate-float`}>
      <img 
        src="./JustLogo.png" 
        alt="FitnessAnime Logo" 
        className={`${sizeClasses[size]} animate-glow`}
      />
      
    </div>
  );
};

export default Logo;