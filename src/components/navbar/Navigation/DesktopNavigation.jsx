import React from 'react';
import MegaMenu from '../MegaMenusComponents/MegaMenu';

const DesktopNavigation = ({ 
  navLinks, 
  activeLink, 
  activeMegaMenu, 
  currentPage,
  megaMenuTimeout,
  onLinkClick, 
  onPageChange,
  onMegaMenuEnter,
  onMegaMenuLeave,
  setActiveMegaMenu,
  setMegaMenuTimeout,
  getVisibleItems,
  getTotalPages
}) => {
  return (
    <div className="hidden md:block bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-center space-x-1">
          {navLinks.map((link, index) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => onMegaMenuEnter(link)}
              onMouseLeave={() => onMegaMenuLeave(link)}
            >
              <a
                href={link.href}
                onClick={() => onLinkClick(link.name)}
                className={`relative px-6 py-4 text-xl font-medium transition-all duration-300 flex items-center ${
                  activeLink === link.name
                    ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-slate-700"
                }`}
                style={{
                  clipPath:
                    index === 0
                      ? "polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)"
                      : index === navLinks.length - 1
                      ? "polygon(15px 0, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(15px 0, calc(100% - 15px) 0, 100% 100%, 0 100%)",
                }}
              >
                <span className="relative z-10 flex flex-col items-center leading-tight">
                  <span className="text-xl font-semibold">{link.name}</span>
                  {link.subtitle && (
                    <span className="text-xs text-gray-400 -mt-1">{link.subtitle}</span>
                  )}
                </span>
              </a>

              {/* Hover buffer for mega menu */}
              {link.megaMenu && (
                <div className="absolute top-full left-0 right-0 h-4 bg-transparent pointer-events-none"></div>
              )}

              <MegaMenu
                link={link}
                isActive={activeMegaMenu === link.name}
                currentPage={currentPage}
                onPageChange={onPageChange}
                onMouseEnter={() => {
                  if (megaMenuTimeout) {
                    clearTimeout(megaMenuTimeout);
                  }
                  setActiveMegaMenu(link.name);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setActiveMegaMenu(null);
                  }, 100);
                  setMegaMenuTimeout(timeout);
                }}
                getVisibleItems={getVisibleItems}
                getTotalPages={getTotalPages}
              />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DesktopNavigation;
