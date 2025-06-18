import React, { useState, useEffect } from 'react';
import { services } from './ServiceData';
import { useFloatingPositions } from '../CustomHooks/useFloatingPositions';
import FloatingServiceItem from '../shared/FloatingServiceItem';
import BackgroundEffects from '../shared/BackgroundEffect';
import AnimatedText from '../shared/AnimatedText';

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const positions = useFloatingPositions(services.length);

  // Add scroll tracking for scroll-based effects
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-gradient-to-br from-brand-primary via-slate-800 to-slate-900 py-20 px-4 min-h-screen overflow-hidden relative">
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Only */}
        <div className="text-center mb-4">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-2">
            事業内容
          </h2>
        </div>

        {/* AnimatedText Below h2, separate from heading */}
        <div className="mb-12 max-w-4xl mx-auto px-4 text-center ">
          <AnimatedText
    text="📘 One Step株式会社とは？"
    className="text-white text-xl font-semibold mb-2 block"
    delay={1600}
  />
  <AnimatedText
    text="私たちは、日本で働きたい外国人と、信頼できる企業をつなぐ「人の架け橋」です。ただのマッチングではなく、「文化」「目標」「未来」までも支えることが、私たちのミッションです。"
    className="text-white text-base leading-relaxed block"
    delay={1800}
  />
</div>



        {/* Floating Services Box */}
        <div className="relative h-[600px] bg-brand-navy backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none rounded-3xl" />
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
