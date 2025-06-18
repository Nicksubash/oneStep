import React, { useState, useEffect } from 'react';

const AnimatedText = ({ text, className = "", delay = 0, scrollScale = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scaleValue = scrollScale ? Math.max(1, 1 + scrollY * 0.002) : 1;
  // Remove the opacity calculation that was causing the issue
  // const opacity = Math.max(0.3, 1 - scrollY * 0.003);

  return (
    <span
      className={`inline-block transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{
        transform: scrollScale 
          ? `translateY(${isVisible ? 0 : 32}px) scale(${scaleValue})`
          : `translateY(${isVisible ? 0 : 32}px)`,
        // Remove the opacity override
        // opacity: isVisible ? opacity : 0
      }}
    >
      {text}
    </span>
  );
};

export default AnimatedText;