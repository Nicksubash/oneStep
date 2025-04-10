import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from "../shared/AnimateButton";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate= useNavigate()
    const handleButtonClick =() =>{
        navigate('/mock-test')
    }
    return (
        <section className="py-20 px-4 md:px-10 text-center  z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-outfit">
                    Your Gateway to
                    <span className="text-blue-600 ml-3 inline-block animate-bounce">
                        Japan
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                    Comprehensive preparation for JLPT, EJU, and Japanese work visas
                </p>
                <AnimatedButton className="text-lg px-8 py-3" onClick={handleButtonClick}>
                    Start Mock Test
                </AnimatedButton>
            </motion.div>
        </section>
    );
};

export default HeroSection;