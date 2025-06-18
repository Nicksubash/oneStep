import React, { useState, useEffect } from 'react';
import { FaShoePrints } from "react-icons/fa";
import WalkingFootsteps from './WalkingFootsteps';
import AnimatedText from '../shared/AnimatedText'; 

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      <div 
        className="absolute inset-0 bg-gradient-to-tl from-transparent via-blue-50 to-purple-50 opacity-60"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      ></div>
    </div>
  );
};

const EnhancedHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-white text-gray-800 min-h-screen">
      <ParallaxBackground />
      
      <section className="relative min-h-screen overflow-hidden">
        <WalkingFootsteps />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline with scroll scaling */}
            <div className="mb-8">
              <AnimatedText
                text="「人」と「人」をつなぐ"
                className="text-2xl md:text-3xl font-medium text-gray-700 block mb-2"
                delay={300}
              />
              <AnimatedText
                text="有料職業紹介サービス"
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-brand-primary via-purple-600 to-brand-navy bg-clip-text text-transparent block mb-4"
                delay={600}
                scrollScale={true}
              />
            </div>

            {/* Hero Motivational Subtext */}
            <AnimatedText
              text="🌍 日本で働きたいあなたへ。その一歩が、あなたの未来を変える。"
              className="text-lg md:text-xl text-blue-700 font-semibold mb-4 block"
              delay={800}
            />
            <AnimatedText
              text="🎯 就職、転職、キャリアアップ——One Stepは、日本で頑張るあなたのはじめの一歩を全力で応援します。"
              className="text-lg md:text-xl text-purple-700 font-medium mb-8 block"
              delay={1000}
            />

            {/* Subtitle with fade effect on scroll */}
            <div 
              style={{
                opacity: Math.max(0.4, 1 - scrollY * 0.002),
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              <AnimatedText
                text="ようこそ、OneStep株式会社へ。私たちは、日本における国際人材の有料職業紹介、語学教育、そして異文化サポートを提供する信頼できるパートナーです。世界中の優秀な人材と日本の企業をつなぎ、グローバルなキャリアの成功を全力でサポートします。"
                className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 block"
                delay={1200}
              />
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
              style={{ 
                opacity: 0, 
                animation: 'fadeInUp 1s ease-out 1.5s forwards',
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-navy text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">お仕事をお探しの方</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy  to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-primary text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">企業様向けサービス</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary  to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* About Us Section */}
            
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          style={{
            opacity: Math.max(0, 1 - scrollY * 0.01),
            transform: `translateX(-50%) translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce"></div>
            <div className="absolute -bottom-8 text-xs text-gray-500 whitespace-nowrap animate-pulse">
              スクロールして詳細を見る
            </div>
          </div>
        </div>
      </section>      
    </div>
  );
};

export default EnhancedHero;