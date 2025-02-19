// AnimatedButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedButton = ({ onClick, to, children }) => {
  // Shared content style for both Link and button variants.
  const ButtonContent = ({ children }) => (
    <div
      className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:shadow-lg hover:scale-105 transition-transform"
      style={{ borderRadius: "40px", width: "100%", height: "100%" }}
    >
      {children}
    </div>
  );

  return (
    <motion.div
      initial={{
        backgroundImage:
          "linear-gradient(to right, white, white), linear-gradient(0deg, #0DB1D6, white 40%)"
      }}
      animate={{
        backgroundImage:
          "linear-gradient(to right, white, white), linear-gradient(360deg, #0DB1D6, white 40%)"
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 2,
        repeat: Infinity
      }}
      style={{
        border: "2px solid transparent",
        borderRadius: "40px",
        backgroundClip: "padding-box, border-box",
        backgroundOrigin: "padding-box, border-box",
        padding: "2px",
        display: "inline-block"
      }}
    >
      {to ? (
        // Wrap Link with a no-underline utility to prevent default link styles.
        <Link to={to} className="no-underline">
          <ButtonContent>{children}</ButtonContent>
        </Link>
      ) : (
        <button onClick={onClick} style={{ border: "none", background: "none", padding: 0 }}>
          <ButtonContent>{children}</ButtonContent>
        </button>
      )}
    </motion.div>
  );
};

export default AnimatedButton;
