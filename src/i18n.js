import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import ja from './locales/ja/translation.json';

// Get the saved language from localStorage or default to 'ja'
const savedLanguage = localStorage.getItem('i18nextLng') || 'ja';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja }
    },
    lng: savedLanguage, // use saved language or default to 'ja'
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    // Add detection options for better language persistence
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n; 