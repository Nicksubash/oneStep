import React from 'react';
import Data from '../../data/data.json';
import WhatWeDo from './WhatWeDo';
import CompanyCTA from '../shared/CompanyCTA';
const Hero = () => {
  const { name, contact } = Data;

  return (
    <section className="bg-white relative">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-24 lg:py-32 flex flex-col md:flex-row items-center">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Take Your First Step Toward a <br />
            <span className="text-blue-600">Brighter Future in Japan</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Welcome to <strong>{name}</strong>, your trusted partner in Japan for international recruitment, language education, and cross-cultural support.
            We help build successful global careers by connecting talent from around the world to opportunities in Japan.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a
              href="/services"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:shadow-xl transition-all duration-300"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: Logo or Visual */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="/onestep.jpeg"
            alt={`${name} Logo`}
            className="w-64 h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
      <WhatWeDo/>
      <CompanyCTA />
    </section>
  );
};

export default Hero;
