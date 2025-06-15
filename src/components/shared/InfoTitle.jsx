import React from 'react';

const InfoTitle = ({ backgroundImage, title, description, highlightText }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 text-center text-white"
      style={{ minHeight: '200px' }} 
    >
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url('${backgroundImage}')`, zIndex: 0 }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg leading-relaxed whitespace-pre-line">
          {description}
        </p>

        {highlightText && (
          <p className="mt-6 text-xl font-semibold  text-brand-light">
            {highlightText}
          </p>
        )}
      </div>
    </section>
  );
};

export default InfoTitle;