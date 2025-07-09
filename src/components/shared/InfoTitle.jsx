import React from 'react';

const InfoTitle = ({ backgroundImage, title, description, highlightText, highlightAlign ='center'}) => {

  const highlightAlignClass = highlightAlign === 'left' ? 'text-left' : 'text-center';
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-2 text-center text-white"
      style={{ minHeight: '300px' }}
    >
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')`, zIndex: 0 }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed whitespace-pre-line">
          {description}
        </p>

        {highlightText && (
          <p className={`mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-brand-light ${highlightAlignClass}`}>
            {highlightText}
          </p>
        )}
      </div>
    </section>
  );
};

export default InfoTitle;