import React from 'react';

const SelectionCard = ({ icon, title, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group w-full max-w-md text-left bg-white-70 rounded-2xl shadow-lg p-8 border border-gray-200 hover:border-brand-primary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="flex items-center gap-6">
        <div className="bg-gradient-to-br from-brand-primary to-brand-navyBright p-4 rounded-full">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary">{title}</h2>
          <p className="mt-1 text-gray-600 group-hover:text-brand-primary">{description}</p>
        </div>
      </div>
      <p className="mt-6 text-right font-semibold text-brand-navy group-hover:underline group-hover:text-brand-primary">
        こちらからお問い合わせ →
      </p>
    </button>
  );
};

export default SelectionCard;