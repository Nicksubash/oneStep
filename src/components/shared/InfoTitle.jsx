import React from 'react';

const InfoTitle = ({ backgroundImage, title, description, highlightText }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 text-center text-white"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg leading-relaxed whitespace-pre-line">
          {description}
          {highlightText && (
            <strong className="block mt-3 text-blue-300 text-xl">{highlightText}</strong>
          )}
        </p>
      </div>
    </section>
  );
};

export default InfoTitle;
