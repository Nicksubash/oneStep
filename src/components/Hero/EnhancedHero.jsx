import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaShoePrints } from "react-icons/fa";
import BackgroundCarousel from './BackgroundCarousel';
import AnimatedText from '../shared/AnimatedText';
import Button from '../shared/Button';

const EnhancedHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-white text-gray-800 min-h-screen">
      <BackgroundCarousel />

      <section className="relative min-h-screen overflow-hidden pointer-events-none">
        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          style={{
            opacity: Math.max(0, 1 - scrollY * 0.01),
            transform: `translateX(-50%) translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gradient-to-b from-white to-blue-200 rounded-full mt-2 animate-bounce"></div>
            <div className="absolute -bottom-8 text-xs text-white whitespace-nowrap animate-pulse drop-shadow-lg">
              {t('enhancedHero.scrollHint')}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHero;