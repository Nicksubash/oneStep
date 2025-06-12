import React from 'react';

const SearchButton = () => {
  return (
    <button className="p-2.5 bg-gray-50 hover:bg-indigo-50 rounded-xl transition-all duration-200 group">
      <svg
        className="w-5 h-5 text-gray-600 group-hover:text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  );
};

export default SearchButton;