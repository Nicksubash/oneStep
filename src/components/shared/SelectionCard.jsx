import React from 'react';

const SelectionCard = ({ icon, title, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group w-full max-w-md text-left bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="flex items-center gap-6">
        <div className="bg-blue-100 p-4 rounded-full">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-gray-600">{description}</p>
        </div>
      </div>
      <p className="mt-6 text-right font-semibold text-blue-600 group-hover:underline">
        こちらからお問い合わせ →
      </p>
    </button>
  );
};

export default SelectionCard;