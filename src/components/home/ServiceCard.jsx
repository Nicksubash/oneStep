import React from 'react';
import AnimatedButton from "../shared/AnimateButton";

const ServiceCard = ({ icon, title, description, listItems, levels, buttonText, bgColor }) => {
    return (
        <div className={`bg-${bgColor} p-8 rounded-xl hover:shadow-lg transition-shadow`}>
            <div className="text-6xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            {listItems && (
                <ul className="grid grid-cols-2 gap-4 mb-6">
                    {listItems.map((item) => (
                        <li key={item} className="flex items-center">
                            <span className="text-blue-500 mr-2">✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            {levels && (
                <div className="grid gap-4 mb-6">
                    {levels.map((level) => (
                        <div key={level} className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span>{level}</span>
                            <AnimatedButton className="text-sm px-3 py-1">
                                {buttonText}
                            </AnimatedButton>
                        </div>
                    ))}
                </div>
            )}
            <AnimatedButton className="w-full">
                {buttonText}
            </AnimatedButton>
        </div>
    );
};

export default ServiceCard;