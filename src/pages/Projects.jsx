import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileShape2 from '../components/MobileShape2';
import Works from '../components/Works';
import Process from '../components/InnovationProcess';

export default function Projects() {
  const icons = [
    { src: "kotlin.svg", alt: "Kotlin Logo" },
    { src: "java.png", alt: "java Logo" },
    { src: "js.png", alt: "JavaScript Logo" },
    { src: "css.png", alt: "CSS Logo" },
    { src: "html.png", alt: "Firebase Logo" },
    { src: "react.svg", alt: "React Logo" },
    { src: "firebase.svg", alt: "Firebase Logo" },
    { src: "aws.png", alt: "aws Logo" },
    { src: "tailwind.png", alt: "Firebase Logo" },

  ];
  const marqueeIcons = [...icons, ...icons];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 ">
      <Header />
      <div className="flex-row">
        <h1 className="text-5xl p-5 font-bold text-blue-950 flex justify-center items-center"></h1>
        <div className="flex flex-row items-start justify-center p-5 mb-10">
          <div className='fix flex-col p-6 text-center'>
            <Works />
          </div>
          <MobileShape2 imageSrc={""} />
        </div>

        {/* Technologies & Tools Marquee */}
        <div className="h-100 text-center mt-10 mb-10 " >
          <h1 className="text-5xl font-bold text-cyan-600 mb-6">Technologies & Tools</h1>
          <div className="overflow-hidden">
          <motion.div
                className="flex space-x-8 py-4"
                animate={{
                  x: ["0%", "-50%"]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear"
                  }
                }}
                style={{
                  width: "fit-content"
                }}
              >
                {marqueeIcons.map((icon, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center w-24 "
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-25 h-25 object-contain"
                    />
                  </div>
                ))}
              </motion.div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
