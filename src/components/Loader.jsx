import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-gray-200 text-white">
            <motion.div 
                className="loader w-16 h-16 border-4 border-t-2 border-black rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2 }}
            />
        </div>
    );
};

export default Loading;
