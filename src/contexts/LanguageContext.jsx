import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('language') || 'tr';
    });

    useEffect(() => {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const t = (key) => {
        if (!translations[key]) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
        // Return translation or fallback to English if missing, otherwise key
        return translations[key][lang] || translations[key]['en'] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
