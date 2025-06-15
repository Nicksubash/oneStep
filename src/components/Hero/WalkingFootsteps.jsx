import React, { useState, useEffect } from 'react';
import Feet from "../../image/feet.png";

const WalkingFootsteps = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const walkingProgress = scrollY * 0.8;
  const stepDistance = 80;
  const numberOfSteps = 18;

  // CSS filters for your specific colors
  const blueFilter = 'brightness(0) saturate(100%) invert(15%) sepia(89%) saturate(1654%) hue-rotate(215deg) brightness(95%) contrast(89%)'; // #1A3E8E
  const redFilter = 'brightness(0) saturate(100%) invert(15%) sepia(89%) saturate(1654%) hue-rotate(315deg) brightness(75%) contrast(95%)'; // #8b2555

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary walking path */}
      {Array.from({ length: numberOfSteps }, (_, i) => {
        const isLeftStep = i % 2 === 0;
        const baseX = -100 + (i * stepDistance);
        const x = baseX + walkingProgress;
        const baseY = window.innerHeight * 0.4;
        
        // Calculate visibility based on scroll position
        const currentStep = Math.floor((walkingProgress + 200) / stepDistance);
        const isVisible = 
          (isLeftStep && currentStep % 2 === 0) || 
          (!isLeftStep && currentStep % 2 === 1);
        
        // Walking animation physics
        const walkCycle = (walkingProgress + i * 20) * 0.02;
        const bounce = Math.sin(walkCycle) * 8;
        const rotation = isLeftStep ? 5 : -5;
        const lift = Math.max(0, Math.sin(walkCycle) * 15);
        const y = baseY + (isLeftStep ? -15 : 15) - lift;
        
        // Opacity transition
        const positionOpacity = Math.max(0, Math.min(0.7, (x + 150) / (window.innerWidth + 200)));
        const opacity = isVisible ? positionOpacity : 0;

        return (
          <div
            key={`step-${i}`}
            className="absolute transition-all duration-300 ease-out"
            style={{
              left: `${x}px`,
              top: `${y + bounce}px`,
              opacity,
              transform: `scale(${0.8 + (scrollY * 0.001)})`
            }}
          >
            <img 
              src={Feet} 
              alt="footstep" 
              className="w-12 h-12"
              style={{
                transform: `rotate(${isLeftStep ? 90 : 90}deg) scaleX(${isLeftStep ? -1 : 1})`,
                filter: `${isLeftStep ? blueFilter : redFilter} blur(${Math.max(0, 6 - i)}px)`
            }}
            />
          </div>
        );
      })}

      {/* Secondary path */}
      {Array.from({ length: 8 }, (_, i) => {
        const isLeftStep = i % 2 === 1;
        const baseX = 200 + (i * 90);
        const x = baseX + walkingProgress * 0.6;
        const baseY = 100 + (i * 25);
        
        const currentStep = Math.floor((walkingProgress * 0.6 + 100) / 90);
        const isVisible = 
          (isLeftStep && currentStep % 2 === 1) || 
          (!isLeftStep && currentStep % 2 === 0);
        
        const positionOpacity = Math.max(0, Math.min(0.5, (x - 100) / (window.innerWidth + 100)));
        const opacity = isVisible ? positionOpacity : 0;
        
        const walkCycle = (walkingProgress * 0.6 + i * 25) * 0.02;
        const bounce = Math.sin(walkCycle) * 4;
        const rotation = isLeftStep ? 10 : -10;
        const lift = Math.max(0, Math.sin(walkCycle) * 10);
        const y = baseY + (isLeftStep ? -15 : 15) - lift;
        
        return (
          <div
            key={`diagonal-${i}`}
            className="absolute transition-all duration-300 ease-out"
            style={{
              left: `${x}px`,
              top: `${y + bounce}px`,
              opacity,
              transform: `scale(${0.6 + (scrollY * 0.0008)})`
            }}
          >
            <img 
              src={Feet} 
              alt="footstep" 
              className="w-12 h-12"
              style={{
                transform: `rotate(${isLeftStep ? 90 : 90}deg) scaleX(${isLeftStep ? -1 : 1})`,
                filter: isLeftStep ? blueFilter : redFilter
              }}
            />
          </div>
        );
      })},
      {Array.from({ length: 8 }, (_, i) => {
        const isLeftStep = i % 2 === 1;
        const baseX = 200 + (i * 90);
        const x = baseX + walkingProgress * 0.6;
        const baseY = 100 + (i * 25);
        
        const currentStep = Math.floor((walkingProgress * 0.6 + 100) / 90);
        const isVisible = 
          (isLeftStep && currentStep % 2 === 1) || 
          (!isLeftStep && currentStep % 2 === 0);
        
        const positionOpacity = Math.max(0, Math.min(0.5, (x - 100) / (window.innerWidth + 100)));
        const opacity = isVisible ? positionOpacity : 0;
        
        const walkCycle = (walkingProgress * 0.6 + i * 25) * 0.02;
        const bounce = Math.sin(walkCycle) * 4;
        const rotation = isLeftStep ? 10 : -10;
        const lift = Math.max(0, Math.sin(walkCycle) * 10);
        const y = baseY + (isLeftStep ? -15 : 15) - lift;
        
        return (
          <div
            key={`diagonal-${i}`}
            className="absolute transition-all duration-300 ease-out"
            style={{
              left: `${x}px`,
              top: `${y + bounce}px`,
              opacity,
              transform: `scale(${0.6 + (scrollY * 0.0008)})`
            }}
          >
            <img 
              src={Feet} 
              alt="footstep" 
              className="w-12 h-12"
              style={{
                transform: `rotate(${isLeftStep ? 90 : 90}deg) scaleX(${isLeftStep ? -1 : 1})`,
                filter: isLeftStep ? blueFilter : redFilter
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WalkingFootsteps;