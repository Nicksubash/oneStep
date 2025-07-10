import React from 'react';
import { useTranslation } from 'react-i18next';

const Button = ({
  href = "/recruitment",
  children,
  gradientFrom = "from-brand-primary",
  gradientTo = "to-brand-navy",
  hoverFrom = "from-brand-navy",
  hoverTo = "to-brand-primary",
}) => {
  const { t } = useTranslation();
  return (
    <a
      href={href}
      className={`group px-8 py-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-semibold rounded-full 
        hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 
        relative overflow-hidden backdrop-blur-sm bg-opacity-90`}
    >
      <span className="relative z-10">{children || t('common.recruitmentButton')}</span>
      <div
        className={`absolute inset-0 bg-gradient-to-r ${hoverFrom} ${hoverTo} 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
    </a>
  );
};

export default Button;