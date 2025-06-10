import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center group">
      <a href="/" className="flex items-center space-x-4">
        {/* Logo Image */}
        <div className="relative">
          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-gray-200 transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              OS
            </div>
          </div>
          {/* effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-md transition-all duration-300"></div>
        </div>

        {/* Logo Text */}
        <div className="leading-tight">
          <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent tracking-wide">
            株式会社 OneStep
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5 tracking-wide">
            Innovation & Excellence
          </p>
        </div>
      </a>
    </div>
  );
};

export default Logo;