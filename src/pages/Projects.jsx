import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileShape2 from '../components/MobileShape2'
import Works from '../components/Works';
import { motion } from 'framer-motion';
import Process from '../components/InnovationProcess'
export default function Projects() {
  const apps = [
    { icon: 'internet.png', appName: 'My Projects', navigateTo: '/projects', type: 'project' },

  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 p-9">
  <Header />
  
  <div className="flex-row">
    <h1 className="text-5xl p-5 font-bold text-blue-950 flex justify-center items-center"></h1>
    <div className="flex flex-row items-start justify-center p-5 mb-10">
      <div className='fix flex-col p-6 text-center'>
      <Works/>
      </div>
      <MobileShape2 imageSrc={""}/> 
    </div>
    {/* Developemnt Process */}
    <div className="text-center mt-8 items-center justify-center ">
      <h1 className='text-center font-bold text-5xl text-cyan-600'>Developemnt Process</h1>
      <Process/>

  </div>
  
  </div>
  <Footer />
</div>
  );
}