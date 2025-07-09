import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher';
import Button from '../../shared/Button';

const MobileMenu = ({ isOpen, navLinks, activeLink, onLinkClick, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl">
        <div className="p-6 flex flex-col h-full">
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

          <nav className="space-y-2 flex-1 overflow-y-auto">
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
                    ? "bg-gradient-to-r from-brand-primary to-brand-navy text-white shadow-lg"
                    : "text-gray-700 hover:bg-brand-navy hover:text-brand-primary"
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-base">{link.name}</span>
                  {link.subtitle && (
                    <span className="text-xs text-white-500">{link.subtitle}</span>
                  )}
                </div>
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
            <Button 
              href="/contact" 
              onClick={onClose} 
              className="w-full block text-center mb-6 py-4 px-6 rounded-2xl text-lg font-bold shadow-lg bg-gradient-to-r from-brand-primary to-brand-navy hover:from-brand-navy hover:to-brand-primary"
            >
              お問い合わせ
            </Button>
            <div className="flex items-center justify-between mt-6">
              <span className="text-sm text-gray-600">言語 / Language</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;