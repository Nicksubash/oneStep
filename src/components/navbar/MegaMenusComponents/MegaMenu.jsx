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

  // Get visible items to determine grid columns
  const visibleItems = getVisibleItems(link.megaMenu.sections, link.name);

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

        {/* Dynamic Items Grid */}
        <div className={`grid ${
          visibleItems.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
          visibleItems.length === 2 ? 'grid-cols-2 max-w-2xl mx-auto' :
          visibleItems.length === 3 ? 'grid-cols-3 max-w-4xl mx-auto' :
          'grid-cols-4'
        } gap-6`}>
          {visibleItems.map((section, sectionIndex) => (
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