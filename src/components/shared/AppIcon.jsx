import React from 'react';

const AppIcon = ({ icon, appName, navigateTo, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer p-4 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center"
        >
            <img src={icon} alt={appName} className="w-16 h-16 mb-2" />
            <span>{appName}</span>
        </div>
    );
};

export default AppIcon;
