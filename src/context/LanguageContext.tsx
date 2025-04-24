import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { translations, LanguageKey } from '../constants/translations';

type LanguageContextType = {
  language: LanguageKey;
  t: (key: string) => string;
  changeLanguage: (lang: LanguageKey) => void;
};

const defaultContext: LanguageContextType = {
  language: 'en',
  t: (key: string) => key,
  changeLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(defaultContext);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageKey>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as LanguageKey) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const translationObj = translations[language];
    return translationObj[key] || key;
  };

  const changeLanguage = (lang: LanguageKey) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return React.useContext(LanguageContext);
};