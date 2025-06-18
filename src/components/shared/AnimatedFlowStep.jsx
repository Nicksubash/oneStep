import React from 'react';

const AnimatedFlowStep = ({ 
  step, 
  index, 
  isHovered, 
  onHover, 
  onLeave, 
  steps, 
  descriptions,
  colorScheme = "indigo" 
}) => {
  const colorClasses = {
    indigo: {
      gradient: 'from-brand-primary to-brand-navy',
      ring: 'ring-indigo-300',
      text: 'text-indigo-600',
      dot: 'bg-indigo-600'
    },
    blue: {
      gradient: 'from-blue-600 to-teal-600',
      ring: 'ring-blue-300',
      text: 'text-blue-600',
      dot: 'bg-blue-600'
    }
  };

  const colors = colorClasses[colorScheme] || colorClasses.indigo;

  return (
    <div 
      className={`flex flex-col items-center z-10 cursor-pointer transition-all duration-500 ease-out transform ${
        isHovered 
          ? 'scale-110 -translate-y-2' 
          : 'scale-100 translate-y-0'
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      <div className={`bg-gradient-to-r ${colors.gradient} text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-4 shadow-lg transition-all duration-500 ${
        isHovered 
          ? `shadow-2xl ring-4 ${colors.ring} ring-opacity-50` 
          : 'shadow-lg'
      }`}>
        {index + 1}
      </div>
      <h3 className={`font-bold text-lg mb-2 transition-all duration-300 ${
        isHovered ? colors.text : 'text-gray-900'
      }`}>
        {steps[index]}
      </h3>
      <p className={`text-sm text-gray-600 text-center transition-all duration-500 ${
        isHovered 
          ? 'text-gray-800 font-medium transform scale-105' 
          : 'text-gray-600'
      }`}>
        {descriptions[index]}
      </p>
      {isHovered && (
        <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 ${colors.dot} rounded-full animate-pulse`}></div>
      )}
    </div>
  );
};

export default AnimatedFlowStep;