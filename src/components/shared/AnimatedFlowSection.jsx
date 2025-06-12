import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import AnimatedFlowStep from './AnimatedFlowStep';

const AnimatedFlowSection = ({ 
  title, 
  steps, 
  descriptions, 
  colorScheme = "indigo",
  className = ""
}) => {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <AnimatedSection className={className}>
      <section>
        <AnimatedSection delay={200}>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{title}</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-4 gap-8 text-center relative">
          {/* Dotted line */}
          <div className="hidden md:block absolute top-[30px] left-0 w-full">
            <div className="w-3/4 mx-auto border-t-2 border-dashed border-gray-300"></div>
          </div>

          {steps.map((_, index) => (
            <AnimatedSection key={index} delay={400 + index * 200}>
              <div className="relative">
                <AnimatedFlowStep
                  step={index}
                  index={index}
                  isHovered={hoveredStep === index}
                  onHover={setHoveredStep}
                  onLeave={() => setHoveredStep(null)}
                  steps={steps}
                  descriptions={descriptions}
                  colorScheme={colorScheme}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default AnimatedFlowSection;