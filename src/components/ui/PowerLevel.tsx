import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PowerLevel: React.FC = () => {
  const [power, setPower] = useState(9000);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setPower(prevPower => prevPower + Math.floor(Math.random() * 10) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-yellow-400 font-mono animate-pulse-slow">
      <Zap size={18} className="text-yellow-400" />
      <div className="flex items-center">
        <span className="mr-2">{t('powerLevel')}:</span>
        <span className="font-bold tracking-wider">{power.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default PowerLevel;