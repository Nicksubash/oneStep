import React from 'react';

const MegaMenuNavigation = ({ 
  menuName, 
  currentPage, 
  totalItems, 
  onPageChange, 
  getTotalPages 
}) => {
  const page = currentPage[menuName] || 0;
  const totalPages = getTotalPages(totalItems);

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">
          {(page * 4) + 1}-{Math.min((page + 1) * 4, totalItems)} of {totalItems} items
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(menuName, 'prev')}
          disabled={page === 0}
          className={`p-2 rounded-lg border transition-all duration-200 ${
            page === 0 
              ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
              : 'border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex items-center space-x-1">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(menuName, index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                page === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => onPageChange(menuName, 'next')}
          disabled={page >= totalPages - 1}
          className={`p-2 rounded-lg border transition-all duration-200 ${
            page >= totalPages - 1
              ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
              : 'border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MegaMenuNavigation;