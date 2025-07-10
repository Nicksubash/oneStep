import React from 'react';
import { useLanguagePersistence } from '../CustomHooks/useLanguagePersistence';

const LanguageSwitcher = () => {
  const { changeLanguage, currentLanguage } = useLanguagePersistence();

  return (
    <div className="flex items-center bg-gray-50 rounded-full p-1">
      <button
        className={`px-3 py-1.5 text-sm font-medium rounded-full shadow-sm transition-all duration-200 hover:shadow-md ${currentLanguage === 'ja' ? 'bg-white text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
        onClick={() => changeLanguage('ja')}
        disabled={currentLanguage === 'ja'}
      >
        🇯🇵 JP
      </button>
      <button
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${currentLanguage === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-indigo-600'}`}
        onClick={() => changeLanguage('en')}
        disabled={currentLanguage === 'en'}
      >
        🇺🇸 EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;