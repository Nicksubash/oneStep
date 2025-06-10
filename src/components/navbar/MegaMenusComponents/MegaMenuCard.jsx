import React from 'react';

const MegaMenuCard = ({ section, index }) => {
  return (
    <a
      href={section.href}
      className="group/card relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      {/* Background Image */}
      <div className="relative h-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/card:scale-110"
          style={{ 
            backgroundImage: `url(${section.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Icon Overlay */}
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
            {section.icon}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 group-hover/card:text-indigo-600 transition-colors duration-200">
          {section.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {section.description}
        </p>
      </div>
      
      {/* Hover Arrow */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  );
};

export default MegaMenuCard;