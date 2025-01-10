import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppIcon from './AppIcon';
import { Navigate } from 'react-router-dom';
import Loading from './Loader'; 
import ProjectIcon from './ProjectIcon';

export default function MobileShape() {
    const [loading, setLoading] = useState(false); 
    const [navigateTo, setNavigateTo] = useState(null); 
    const [isNavigating, setIsNavigating] = useState(false);


    const apps = [
        { icon: './google.png', appName: 'My Projects', navigateTo: '/projects' },
        // Add more apps here if needed
    ];

    const handleNavigate = (destination) => {
        setLoading(true); // Show loading screen
        setNavigateTo(destination); // Set the navigation target
        setTimeout(() => {
            setLoading(false); 
            setIsNavigating(true)
        }, 2000); 
    };

    // if (navigateTo) {
    //     return <Navigate to={navigateTo} />; 
    // }

    if (isNavigating && navigateTo) {
        return <Navigate to={navigateTo} />; // Perform navigation after loading screen
    }

    return (
        <div className="relative w-[320px] h-[700px] rounded-3xl shadow-2xl border-4 border-black overflow-hidden">
            {/* Show loading screen while navigating */}
            {loading && <Loading />}

            {/* Status Bar */}
            <div className="absolute top-0 left-0 w-full h-8 opacity-60 flex items-start justify-end px-4 text-white text-sm">
                <div>
                    <img src='/internet.png' alt="wifi" className='h-6 w-auto py-1' />
                </div>
                <div className='text-black'>
                    <img src='/battery.png' alt="battery" className='h-6 w-auto py-1' />
                </div>
                <div className="text-black my-1">100%</div>
            </div>

            <div className="text-black my-1 pl-2 text-sm opacity-60">11:11</div>

            {/* Camera Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full mt-2"></div>

            {/* Screen Area */}
            <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-5">
                <div className="flex flex-wrap justify-center mt-4 gap-4">
                    {apps.map((app, index) => (
                        <AppIcon 
                            key={index} 
                            icon={app.icon} 
                            appName={app.appName} 
                            navigateTo={app.navigateTo} 
                            onClick={() => handleNavigate(app.navigateTo)} 
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-black rounded-b-3xl flex items-center justify-center">
                <div className="w-10 h-2 bg-white rounded-full"></div>
            </div>
        </div>
    );
}
