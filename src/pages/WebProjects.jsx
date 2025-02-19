import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const webProjectsData = [
  {
    title: "Educational Consultancy Website",
    description: "A responsive website built with wordpress to provide consultancy services for educational institutions, featuring an intuitive UI and interactive components.",
    image: "./projects/learngrowth.png",
    link: "https://learnandgrowth.edu.np/"
  },
  {
    title: "Construction Website",
    description: "A modern website developed for a construction company that highlights services, projects, and client testimonials.",
    image: "./projects/roshan.png",
    link: "https://roshandrilling.com/"
  }
];

const WebProjects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 flex flex-col p-4 md:p-9 font-outfit">
      <Header />

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-12 px-4"
      >
        <h2 className="text-5xl font-bold text-center text-cyan-600 mb-12">
          Web Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {webProjectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
                >
                  Visit Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Navigation */}
        <div className="mt-12 text-center">
          <Link to="/projects" className="text-cyan-600 text-xl hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </motion.div>

      {/* Optional: Include your Footer */}
      <Footer />
    </div>
  );
};

export default WebProjects;
