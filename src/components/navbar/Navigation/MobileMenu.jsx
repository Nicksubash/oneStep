import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher';
import ContactButton from '../ContactButton';

const MobileMenu = ({ isOpen, navLinks, activeLink, onLinkClick, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold text-gray-900">
              メニュー
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  onLinkClick(link.name);
                  onClose();
                }}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeLink === link.name
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-base">{link.name.ja}</span>
                  <span className="text-xs opacity-75">{link.name.en}</span>
                </div>
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">言語 / Language</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">
                  🇯🇵 JP
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  🇺🇸 EN
                </button>
              </div>
            </div>
            <ContactButton href="/contact" onClick={onClose}>
              お問い合わせ
            </ContactButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;