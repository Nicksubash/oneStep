import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-slate-900">
      <div className="relative">
        {/* Pulsing circles */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 rounded-full border-2 border-teal-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Center static circle */}
        <motion.div 
          className="w-16 h-16 bg-gradient-to-tr from-teal-500 to-cyan-400 rounded-full"
          animate={{
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Inner ring */}
          <motion.div 
            className="w-full h-full rounded-full  border-white/30"
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;