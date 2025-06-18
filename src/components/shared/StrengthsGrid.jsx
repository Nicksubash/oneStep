import React from 'react';
import AnimatedSection from './AnimatedSection';

const StrengthsGrid = ({ title = "One Stepの強み", strengths = [] }) => {
  const visibleStrengths = strengths.slice(0, 4);

  return (
    <AnimatedSection>
      <section className="bg-brand-light rounded-xl p-12">
        <AnimatedSection delay={200}>
          <h2 className="text-3xl font-bold text-center text-red-900 mb-12">{title}</h2>
        </AnimatedSection>

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(visibleStrengths.length, 4)} gap-8`}>
          {visibleStrengths.map((strength, index) => (
            <AnimatedSection key={index} delay={300 + index * 200}>
              <div className="h-full flex flex-col bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center">
                <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-bold text-indigo-700 mb-3">{strength.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{strength.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default StrengthsGrid;
