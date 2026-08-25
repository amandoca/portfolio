import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { messages } from "@/i18n";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "pt",
    supportedLngs: Object.keys(messages),
    fallbackLng: "pt",

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: false,
    },

    resources: Object.fromEntries(
      Object.entries(messages).map(([language, translation]) => [
        language,
        { translation },
      ]),
    ),
  });

export default i18n;
