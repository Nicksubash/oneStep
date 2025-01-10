import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-my-theme text-white py-6">
            <div className="container mx-auto flex justify-center items-center">
                <motion.div
                    className="flex space-x-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* LinkedIn Icon */}
                    <motion.a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                    >
                        <i className="fab fa-linkedin"></i>
                    </motion.a>

                    {/* GitHub Icon */}
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-gray-400 transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                    >
                        <i className="fab fa-github"></i>
                    </motion.a>

                    {/* X (Twitter) Icon */}
                    <motion.a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-blue-400 transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                    >
                        <i className="fab fa-twitter"></i>
                    </motion.a>
                </motion.div>
            </div>
            <div className="text-center mt-4 opacity-70">
                <p>&copy; 2025 Nick Russberg. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
