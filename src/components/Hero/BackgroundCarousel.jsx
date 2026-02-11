import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { services as serviceData } from '../Hero/ServiceData';
import AnimatedText from '../shared/AnimatedText';

const BackgroundCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = t('services', { returnObjects: true }) || [];

  const images = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2070&q=80'
  ];

  // Auto advance images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Determine dynamic button link and text
  const getButtonData = (index) => {
    if (index === 0) {
      return {
        text: t('enhancedHero.ctaCompany'),
        link: '/services'
      };
    }
    const service = serviceData[index - 1];
    return {
      text: t('common.readMore') || 'View more →',
      link: service?.href || '/services'
    };
  };

  const buttonData = getButtonData(currentImageIndex);

  const handleNavigate = (path) => {
    if (path.includes('#')) {
      // Handle hash links if needed, though Link usually handles them. 
      // Programmatic navigation might need extra care for hashes in some React Router versions.
      // But simple navigate(path) usually works.
      navigate(path);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Image Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40" />

          {/* Slide Specific Content */}
          <div className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-1000 transform ${index === currentImageIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}>
            <div className="container mx-auto max-w-5xl text-center text-white">
              {index === 0 ? (
                /* Slide 1: Main Impact Headlines (Simple Design) */
                <div className="max-w-4xl mx-auto space-y-4">
                  <AnimatedText
                    text={t('enhancedHero.newHeadline1_main')}
                    className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight drop-shadow-2xl"
                    delay={200}
                  />
                  <AnimatedText
                    text={t('enhancedHero.newHeadline1_sub')}
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-100 mb-6 block drop-shadow-xl"
                    delay={400}
                  />
                  <div className="pt-4">
                    <AnimatedText
                      text={t('enhancedHero.newHeadline2')}
                      className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-200 drop-shadow-xl"
                      delay={600}
                    />
                  </div>
                  <AnimatedText
                    text={t('enhancedHero.newHeadline3')}
                    className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-medium max-w-3xl mx-auto opacity-80"
                    delay={900}
                  />
                </div>
              ) : (
                /* Slides 2+: Business Service Details (Simple Design) */
                <div className="max-w-4xl mx-auto space-y-6">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-blue-300 uppercase bg-blue-900/40 rounded-full border border-blue-400/20">
                    {t('whatWeDo.title')}
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight drop-shadow-2xl">
                    {services[index - 1]?.title || ''}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
                  <p className="text-sm sm:text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto opacity-90">
                    {services[index - 1]?.description || ''}
                  </p>
                </div>
              )}

              {/* Dynamic Action Link (View more style) */}
              <div
                key={`btn-${currentImageIndex}`}
                className="mt-12 flex justify-center"
                style={{
                  animation: 'fadeInUp 0.8s ease-out forwards',
                }}>
                <button
                  onClick={() => handleNavigate(buttonData.link)}
                  className="mt-4 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-emerald-400 transition-all duration-300 shadow-lg flex items-center gap-2"
                >
                  {buttonData.text.includes('→') ? buttonData.text : `${buttonData.text} →`}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-50 px-4 flex justify-between pointer-events-none">
        <button
          type="button"
          onClick={prevImage}
          className="pointer-events-auto w-12 h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition border border-white/10 group"
          aria-label="Previous"
        >
          <svg className="w-6 h-6 text-white/70 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextImage}
          className="pointer-events-auto w-12 h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition border border-white/10 group"
          aria-label="Next"
        >
          <svg className="w-6 h-6 text-white/70 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Modern Bars Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-2 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToImage(index)}
            className="group relative h-1 focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`h-full transition-all duration-500 overflow-hidden rounded-full ${index === currentImageIndex ? 'w-16 bg-white' : 'w-8 bg-white/20 hover:bg-white/40'}`}>
              {index === currentImageIndex && (
                <div className="h-full bg-brand-primary animate-[progress_8s_linear_infinite]" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundCarousel;