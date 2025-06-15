import React from 'react';
import Data from '../../data/data.json';
import WhatWeDo from './WhatWeDo';
import CompanyCTA from '../shared/CompanyCTA';
import EnhancedHero from './EnhancedHero';
import NewsAndNotices from './NewsAndNotice';
const Hero = () => {
  const { name, contact } = Data;

  return (
    <section className="bg-white relative">
      <EnhancedHero />
      <WhatWeDo/>
      <NewsAndNotices />
      <CompanyCTA />
    </section>
  );
};

export default Hero;
