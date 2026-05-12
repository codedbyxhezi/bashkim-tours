"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { messages, Locale } from "@/lib/i18n";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof messages.de;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("de");

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;

    if (savedLocale === "de" || savedLocale === "sq" || savedLocale === "mk") {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = messages[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}