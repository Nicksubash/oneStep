import React, { useState } from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from "../components/shared/Footer";
import Hero from '../components/Hero';

export default function Home() {
   
    return (
        <div className="bg-gradient-to-b from-blue-50 to-indigo-50">
            <Navbar />
            <Hero />
            <div className="items-center justify-center"></div>
            <Footer />
        </div>
    );
}