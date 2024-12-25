import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/translationEN';
import de from './locales/translationDE';
import pl from './locales/translationPL';

const savedLanguage = localStorage.getItem('language') || 'pl';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      pl: { translation: pl },
    },
    lng: savedLanguage,
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;