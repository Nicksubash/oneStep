// src/components/home/FeatureCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ feature, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
        </motion.div>
    );
};

export default FeatureCard;