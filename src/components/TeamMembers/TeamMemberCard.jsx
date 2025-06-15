import React from 'react';

export default function TeamMemberCard({ image, nameJp, nameEn, titleJp, aboutJp, index = 0 }) {
  const isEven = index % 2 === 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div
        className={`flex flex-col md:flex-row ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        } items-start md:gap-16 gap-8`}
      >
        {/* Profile Image */}
        <div className="w-full md:w-80 md:h-80 flex-shrink-0 mx-auto md:mx-0">
          <div className="w-full h-full overflow-hidden rounded-xl shadow-md">
            <img
              src={image}
              alt={nameJp}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name */}
          <h2
            className={`text-3xl md:text-5xl font-bold text-brand-primary mb-2 ${
              isEven ? 'text-left' : 'text-left md:text-right'
            }`}
          >
            {nameJp}
          </h2>

          {/* English Name */}
          <p
            className={`text-lg md:text-xl text-brand-navyBright mb-4 font-light ${
              isEven ? 'text-left' : 'text-left md:text-right'
            }`}
          >
            {nameEn}
          </p>

          {/* Title */}
          <h3
            className={`text-base md:text-lg text-brand-navy mb-8 font-medium ${
              isEven ? 'text-left' : 'text-left md:text-right'
            }`}
          >
            {titleJp}
          </h3>

          {/* Profile Section */}
          <div className={`${isEven ? 'text-left' : 'text-left md:text-right'}`}>
            <h4 className="text-blue-600 font-bold text-lg mb-4 tracking-wide">
              PROFILE
            </h4>
            <div
              className={`text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line ${
                isEven ? 'max-w-2xl' : 'max-w-2xl md:ml-auto'
              }`}
            >
              {aboutJp}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
