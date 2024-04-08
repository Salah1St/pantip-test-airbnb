import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "./en.json";
import TH from "./th.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EN,
    },
    th: {
      translation: TH,
    },
  },
  lng: "en", // Set the default language here
  fallbackLng: "en", // Fallback language in case a translation is missing
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
