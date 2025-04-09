import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from "./FeatureCard";

const FeaturesSection = ({ features }) => {
    return (
        <section className="py-16 px-4 md:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;