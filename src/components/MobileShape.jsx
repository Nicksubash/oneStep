import React from 'react';
import { motion } from 'framer-motion';

export default function MobileShape() {
    const text = "My Apps";
    const letterVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.1 } }
    };

    return (
        <div className="relative w-[320px] h-[700px] rounded-3xl shadow-2xl border-4 border-black overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 w-full h-8 opacity-60 flex items-start justify-end px-4 text-white text-sm">
                <div>
                    <img src='/internet.png' alt="wifi" className='h-6 w-auto py-1'/>
                </div>
                <div className='text-black'>
                    <img src='/battery.png' alt="battery" className='h-6 w-auto py-1'/>
                </div>
                <div className="text-black p-1">100%</div>
            </div>

            {/* Camera Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full mt-2"></div>

            {/* Screen Area */}
            <div className="flex flex-col items-center justify-center h-full bg-gray-100 p-5">
                <h2 className="text-xl font-bold text-center text-blue-900">My Projects</h2>
                
                {/* Container for Text with Rotating Background */}
                <div className="relative text-center mt-4 group">
                    {/* Rotating background and text container */}
                    <motion.div
                        className="absolute inset-0 flex justify-center items-center"
                        style={box}
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Text on top of the rotating background */}
                        <motion.p
                            className="text-sm text-white relative z-10"
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: 360, filter:"blur(4px)" }}
                            transition={{ duration: 1 }}
                        >
                            {text}
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-black rounded-b-3xl flex items-center justify-center">
                <div className="w-10 h-2 bg-white rounded-full"></div>
            </div>
        </div>
    );
}

/**
 * ==============   Styles for Rotating Background   ================
 */

const box = {
    width: "140px",  // Adjust width to fit the text
    height: "50px",  // Adjust height to fit the text
    backgroundColor: "#000",  // Background color for the rotation
    borderRadius: "10px",  // Slightly rounded corners for a nice background
};
