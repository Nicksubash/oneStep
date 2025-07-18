import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { services } from './ServiceData';
import { useFloatingPositions } from '../CustomHooks/useFloatingPositions';
import FloatingServiceItem from '../shared/FloatingServiceItem';
import BackgroundEffects from '../shared/BackgroundEffect';
import AnimatedText from '../shared/AnimatedText';

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const positions = useFloatingPositions(services.length);
  const { t } = useTranslation();

  // Add scroll tracking for scroll-based effects
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className="bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2070&q=80')] py-20 px-4 min-h-screen overflow-hidden relative">
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0 backdrop-blur-sm" />
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Only */}
        <div className="text-center mb-4">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-2">
            {t('whatWeDo.title')}
          </h2>
        </div>

        {/* AnimatedText Below h2, separate from heading */}
        <div className="mb-12 max-w-4xl mx-auto px-4 text-center ">
          <AnimatedText
          text={t('whatWeDo.animated1')}
          className="text-white text-xl font-semibold mb-2 block"
          delay={1600}
          />
          <AnimatedText
          text={t('whatWeDo.animated2')}
          className="text-white text-base leading-relaxed block"
          delay={1800}
          />
        </div>

        {/* Floating Services Box */}
        <div className="relative h-[600px] bg-transparentm rounded-3xl border shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl" />

          {services.map((service, index) => (
            <FloatingServiceItem
              key={index}
              service={service}
              position={positions[index]}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}

        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine {
          animation: shine 1s ease-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
