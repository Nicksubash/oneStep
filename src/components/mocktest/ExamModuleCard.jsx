import { useState } from 'react';
import PropTypes from 'prop-types';

const MockModuleCard = ({ header, title, description, buttonText, onButtonClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative max-w-2xl mx-auto bg-white rounded-xl overflow-hidden mb-6 transition-all duration-300 border border-gray-100
        hover:-translate-y-1 hover:shadow-xl group ${isHovered ? 'shadow-lg' : 'shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        
      {/* Gradient Header Section */}
      <div className="bg-gradient-to-r  from-purple-600 to-blue-600 px-6 py-4 backdrop-blur-sm bg-opacity-90 shadow-sm relative">
      <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
          {header}
          <span className="absolute right-6 top-4 opacity-80 group-hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
        </h3>
      </div>

      {/* Content Container */}
      <div className="px-6 py-5 space-y-4">
        {/* Title Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
          <div className="h-1 w-12 bg-emerald-100 rounded-full" />
        </div>

        {/* Description Section */}
        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>

        {/* Progress/Metadata Row */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
            </svg>
            <span>45 mins</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm6 4a1 1 0 10-2 0v1H7a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
            <span>30 Questions</span>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <button 
          onClick={onButtonClick}
          className="w-full flex items-center justify-between px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg 
            hover:bg-emerald-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 
            focus:ring-offset-2 hover:shadow-md"
        >
          <span>{buttonText}</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

MockModuleCard.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

MockModuleCard.defaultProps = {
  buttonText: "Start Now",
  onButtonClick: () => console.log("Module action triggered")
};

export default MockModuleCard;