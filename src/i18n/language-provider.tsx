"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import pt from "./pt.json";
import es from "./es.json";

type Language = "pt" | "es";
type Translations = Record<string, string>;

/** Texto escrito direto nos dados (projetos), nos dois idiomas. */
export type Localized = Record<Language, string>;

const translations: Record<Language, Translations> = { pt, es };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tl: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
  t: (key) => key,
  tl: (value) => value.pt,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("idioma") as Language | null;
    if (saved && (saved === "pt" || saved === "es")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("idioma", lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] ?? key;
    },
    [language]
  );

  const tl = useCallback((value: Localized): string => value[language] ?? value.pt, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
