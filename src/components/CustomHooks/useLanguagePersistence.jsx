import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguagePersistence = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Load saved language on component mount
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  return { changeLanguage, currentLanguage: i18n.language };
}; 