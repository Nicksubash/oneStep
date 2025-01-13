import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AppIcon from './AppIcon';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import Loading from './Loader'; 
import ProjectIcon from './ProjectIcon';

export default function MobileShape2() {
    const [loading, setLoading] = useState(false); 
    const [navigateTo, setNavigateTo] = useState(null); 
    const [isNavigating, setIsNavigating] = useState(false);
    const [navigationStack, setNavigationStack] = useState(['/']);
    const navigate = useNavigate();
    const location = useLocation();

    const apps = [
        { icon: './weather.png', appName: 'Weather', navigateTo: '/weather' },
        { icon: './dictionary.png', appName: 'Dictionary', navigateTo: '/dictionary' },
        { icon: './todo.png', appName: 'Todo', navigateTo: '/todo' },
        { icon: './content.png', appName: 'Douga', navigateTo: '/content' },
    ];

    useEffect(() => {
        // Update navigation stack when location changes
        if (location.pathname !== navigationStack[navigationStack.length - 1]) {
            setNavigationStack(prev => [...prev, location.pathname]);
        }
    }, [location]);

    const handleNavigate = (destination) => {
        setLoading(true);
        setNavigateTo(destination);
        setTimeout(() => {
            setLoading(false); 
            setIsNavigating(true);
        }, 2000); 
    };

    const handleBack = () => {
        if (navigationStack.length > 1) {
            const newStack = [...navigationStack];
            newStack.pop(); // Remove current route
            const previousRoute = newStack[newStack.length - 1];
            setNavigationStack(newStack);
            navigate(previousRoute);
        }
    };

    if (isNavigating && navigateTo) {
        return <Navigate to={navigateTo} />;
    }

    const showBackButton = location.pathname !== '/';

    return (
        <div className="relative w-[320px] h-[700px] rounded-3xl shadow-2xl border-4 border-black overflow-hidden">
            {loading && <Loading />}

            {/* Status Bar */}
            <div className="absolute top-0 left-0 w-full h-8 flex items-center justify-between px-4 bg-white z-10">
                {showBackButton && (
                    <motion.button
                        className="text-blue-500 font-medium"
                        whileTap={{ scale: 0.95 }}
                        onClick={handleBack}
                    >
                        ← Back
                    </motion.button>
                )}
                <div className="flex items-center ml-auto">
                    <img src='/internet.png' alt="wifi" className='h-6 w-auto py-1' />
                    <img src='/battery.png' alt="battery" className='h-6 w-auto py-1' />
                    <div className="text-black">100%</div>
                </div>
            </div>

            {/* Camera Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full mt-2 z-20"></div>

            {/* Screen Area */}
            <div className="flex flex-row items-center justify-center h-full bg-gray-100 p-5 pt-12">
                <div className="flex flex-wrap justify-center gap-4">
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