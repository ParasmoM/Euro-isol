import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const storedLang = localStorage.getItem('lang') || 'fr';
    const [currentLang, setCurrentLang] = useState(storedLang);

    useEffect(() => {
        localStorage.setItem('lang', currentLang);
    }, [currentLang]);

    const handleLanguageChange = (lang) => {
        setCurrentLang(lang);
    };

    return (
        <LanguageContext.Provider value={{ currentLang, handleLanguageChange }}>
            {children}
        </LanguageContext.Provider>
    );
};
