// src/components/home/StudyTrackSection.jsx
import React from 'react';
import AnimatedButton from "../shared/AnimateButton";

const StudyTrackSection = ({ activeTab, setActiveTab }) => {
    return (
        <section className="py-16 bg-blue-50 px-4 md:px-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Start Your Japan Journey</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {['JLPT', 'EJU', 'SSW'].map((exam) => (
                        <button
                            key={exam}
                            onClick={() => setActiveTab(exam.toLowerCase())}
                            className={`p-4 rounded-lg font-semibold transition-colors ${
                                activeTab === exam.toLowerCase()
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-blue-600 hover:bg-blue-50'
                            }`}
                        >
                            {exam} Preparation
                        </button>
                    ))}
                </div>

                <div className="bg-white p-8 rounded-xl">
                    {activeTab === 'jlpt' && (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">JLPT Preparation</h3>
                            <p className="mb-6">Comprehensive N1-N5 test series with detailed explanations</p>
                            <AnimatedButton>Start N5 Course</AnimatedButton>
                        </div>
                    )}
                    {activeTab === 'eju' && (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">EJU Preparation</h3>
                            <p className="mb-6">Master Mathematics, Science, and Japan-related subjects</p>
                            <AnimatedButton>Explore EJU Materials</AnimatedButton>
                        </div>
                    )}
                    {activeTab === 'ssw' && (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">SSW Visa Support</h3>
                            <p className="mb-6">Interview preparation and documentation guidance</p>
                            <AnimatedButton>SSW Resources</AnimatedButton>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default StudyTrackSection;