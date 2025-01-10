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
    <>
      <Header />
      <div className='h-screen'>
        <h1 className="text-5xl p-5 font-bold text-blue-950 flex justify-center items-center">My Projects</h1>
        <div className='flex flex-row items-center justify-center p-5'>
          <h1 className="text-5xl p-5 font-bold text-blue-950">Portfolio</h1>
          <MobileShape2/> 

        </div>
      </div>
      <Footer />
    </>
  );
}
