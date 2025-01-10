import React from 'react';
import MobileShape from '../components/MobileShape';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileShape2 from '../components/MobileShape2'

export default function Projects() {
  const apps = [
    { icon: 'internet.png', appName: 'My Projects', navigateTo: '/projects', type: 'project' },
    { icon: 'internet.png', appName: 'My Projects', navigateTo: '/projects', type: 'project' },

  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 p-9">
  <Header />
  
  <div className="flex-grow">
    <h1 className="text-5xl p-5 font-bold text-blue-950 flex justify-center items-center"></h1>
    <div className="flex flex-row items-center justify-center p-5 mb-10">
      <div className='fix flex-col p-5'>
      <h1 className="text-5xl font-bold text-blue-950">Portfolio</h1>
      <p className="mt-5 text-lg text-gray-700">
      I specialize in building high-performance mobile apps with React Native and Kotlin.
      </p>
      </div>
      <MobileShape2 /> 
    </div>
  </div>
  
  <Footer />
</div>

  );
}
