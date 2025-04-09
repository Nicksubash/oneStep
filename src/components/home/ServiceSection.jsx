import React from 'react';
import AnimatedButton from '../shared/AnimateButton';
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
    const mockTestList = ['JLPT N1-N5', 'EJU Math/Science', 'SSW Interview', 'Business Japanese'];
    const languageCourseLevels = ['Beginner (N5)', 'Intermediate (N3-N4)', 'Advanced (N1-N2)', 'Business Japanese'];

    return (
        <section className="py-16 bg-white px-4 md:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mock Test Service */}
                    <ServiceCard
                        icon="📘"
                        title="Mock Test Series"
                        description="Authentic practice tests for:"
                        listItems={mockTestList}
                        buttonText="Explore Tests"
                        bgColor="blue-50"
                    />

                    {/* Language Classes */}
                    <ServiceCard
                        icon="🗾"
                        title="Japanese Language Courses"
                        description="Structured learning paths for all levels:"
                        levels={languageCourseLevels}
                        buttonText="Start Course"
                        bgColor="indigo-50"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;