import React from 'react';

const LanguageSwitcher = () => {
  return (
    <div className="flex items-center bg-gray-50 rounded-full p-1">
      <button className="px-3 py-1.5 text-sm font-medium bg-white text-indigo-600 rounded-full shadow-sm transition-all duration-200 hover:shadow-md">
        🇯🇵 JP
      </button>
      <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200">
        🇺🇸 EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;