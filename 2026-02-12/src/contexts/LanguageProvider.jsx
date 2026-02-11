import React, { useCallback, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const translations = {
  ko: {
    greeting: "안녕하세요",
    welcome: "환영합니다",
    changeLanguage: "언어 변경",
  },
  en: {
    greeting: "Hello",
    welcome: "Welcome",
    changeLanguage: "Change Language",
  },
};

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ko");

  // useCallback으로 t 고정
  const t = useCallback(
    (key) => translations[language]?.[key] ?? key,
    [language],
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
