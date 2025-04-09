import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 ">
      <Header />
      <h1>This is Project page </h1>
      <Footer />
    </div>
  );
}
