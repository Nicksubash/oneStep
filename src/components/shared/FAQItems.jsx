import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

const FAQItems = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-semibold text-gray-800">
          <span className="text-brand-primary font-bold mr-2">Q.</span>
          {question}
        </h3>
        <span>
          {isOpen ? (
            <MinusIcon className="h-6 w-6 text-red-600" />
          ) : (
            <PlusIcon className="h-6 w-6 text-brand-navyBright" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen mt-4' : 'max-h-0'
        }`}
      >
        <div className="p-4 bg-gray-50 rounded-md">
            <p className="text-gray-700 leading-relaxed">
                <span className="text-brand-navyBright font-bold mr-2">A.</span>
                {children}
            </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItems;