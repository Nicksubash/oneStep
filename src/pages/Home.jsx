import React, { useState } from 'react';
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServiceSection";
import FeaturesSection from "../components/home/FeaturesSection";
import StudyTrackSection from "../components/home/StudyTrackSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";
import data from '../data/data.json';

export default function Home() {
    const [activeTab, setActiveTab] = useState('jlpt');
    // const features = [ ... ];  // No longer need hardcoded features

    return (
        <div className="bg-gradient-to-b from-blue-50 to-indigo-50">
            <Header />
            <div className="h-screen items-center justify-center mt-10">
            <HeroSection />
            </div>
            <ServicesSection servicesData={data.servicesForHome} />

            <FeaturesSection features={data.features} />

            <StudyTrackSection activeTab={activeTab} setActiveTab={setActiveTab} />

            <TestimonialsSection testimonials={data.testimonialsForHome} />

            <CTASection />

            <Footer />
        </div>
    );
}