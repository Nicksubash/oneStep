import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="flex items-center bg-gray-50 rounded-full p-1">
      <button
        className={`px-3 py-1.5 text-sm font-medium rounded-full shadow-sm transition-all duration-200 hover:shadow-md ${currentLang === 'ja' ? 'bg-white text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
        onClick={() => i18n.changeLanguage('ja')}
        disabled={currentLang === 'ja'}
      >
        🇯🇵 JP
      </button>
      <button
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${currentLang === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-indigo-600'}`}
        onClick={() => i18n.changeLanguage('en')}
        disabled={currentLang === 'en'}
      >
        🇺🇸 EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;