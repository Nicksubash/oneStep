import React from 'react';
import MegaMenuNavigation from './MegaMenuNavigation';
import MegaMenuCard from './MegaMenuCard';

const MegaMenu = ({ 
  link, 
  isActive, 
  currentPage, 
  onPageChange, 
  onMouseEnter, 
  onMouseLeave, 
  getVisibleItems, 
  getTotalPages 
}) => {
  if (!link.megaMenu || !isActive) return null;

  return (
    <div 
      className="fixed left-0 right-0 mx-auto top-[8.5rem] w-screen max-w-screen-2xl bg-white shadow-2xl rounded-b-2xl z-50 border border-gray-100"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto p-8">
        {/* Navigation Controls */}
        {link.megaMenu.sections.length > 4 && (
          <MegaMenuNavigation
            menuName={link.name}
            currentPage={currentPage}
            totalItems={link.megaMenu.sections.length}
            onPageChange={onPageChange}
            getTotalPages={getTotalPages}
          />
        )}

        {/* Items Grid */}
        <div className="grid grid-cols-4 gap-6">
          {getVisibleItems(link.megaMenu.sections, link.name).map((section, sectionIndex) => (
            <MegaMenuCard
              key={sectionIndex}
              section={section}
              index={sectionIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;