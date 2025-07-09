import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { enTranslations, ptTranslations } from '../locales/translations';

type Language = 'pt' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, replacements?: { [key: string]: string }) => string;
}

const translations = {
    pt: ptTranslations,
    en: enTranslations,
};

// Function to get a nested property from an object using a dot-separated string
const getNestedTranslation = (obj: any, key: string): string | undefined => {
  return key.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);
};

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage or browser language, default to 'pt'
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'pt' || savedLang === 'en') {
      return savedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'en' ? 'en' : 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    const langCode = language === 'pt' ? 'pt-BR' : 'en';
    document.documentElement.lang = langCode;
    
    if (language === 'pt') {
        document.title = 'Lucas Baccelli - Portfólio';
    } else {
        document.title = 'Lucas Baccelli - Portfolio';
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = useCallback((key: string, replacements?: { [key: string]: string }): string => {
    let translation = getNestedTranslation(translations[language], key);
    
    if (!translation) {
      console.warn(`Translation key "${key}" not found for language "${language}".`);
      return key;
    }

    if (replacements) {
      Object.keys(replacements).forEach(placeholder => {
        translation = translation!.replace(`{${placeholder}}`, replacements[placeholder]);
      });
    }

    return translation;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
