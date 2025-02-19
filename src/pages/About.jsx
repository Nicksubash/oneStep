import React from "react";
import { Link } from "react-router-dom";
import portfolioData from "../data/portfolio.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import MobileResume from "../components/MobileResume"; 

export default function About() {
  const {
    headerTaglineOne,
    headerTaglineTwo,
    headerTaglineThree,
    headerTaglineFour,
    aboutpara,
    resume,
  } = portfolioData;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 flex flex-col p-9">
        <Header />
        <main className="flex flex-1 flex-col md:flex-row items-center justify-center px-5 pt-8 gap-8 pb-9">
          {/* Left Section :Resume */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-opacity-90 shadow-2xl rounded-lg p-8">
            <section className="header-section text-center mb-6">
              <h1 className="text-2xl font-bold text-blue-600 font-outfit">{headerTaglineOne}</h1>
              <h2 className="text-xl font-semibold text-indigo-600 my-2 font-outfit">{headerTaglineTwo}</h2>
              <h3 className="text-lg text-purple-600 font-outfit">{headerTaglineThree}</h3>
              <h4 className="text-base text-blue-600 mt-2 font-outfit">{headerTaglineFour}</h4>
            </section>
            <section className="text-center">
              <p className="text-sm leading-relaxed font-outfit">{aboutpara}</p>
            </section>
            <p className="text-xl text-cyan-600 mt-1 md:mt-9 font-inter">Click to Download</p>
            <div style={{display:"flex", justifyContent:"center", gap:"20px"}}>
              <motion.div
                initial={{
                  backgroundImage:
                    "linear-gradient(to right, white, white), linear-gradient(0deg, #0DB1D6 , white 40%)"
                }}
                animate={{
                  backgroundImage:
                    "linear-gradient(to right, white, white), linear-gradient(360deg, #0DB1D6, white 40%)"
                }}
                transition={{
                  type: "tween",
                  ease: "linear",
                  duration: 2,
                  repeat: Infinity
                }}
                style={{
                  border: "2px solid transparent",
                  borderRadius: "40px",
                  backgroundClip: "padding-box, border-box",
                  backgroundOrigin: "padding-box, border-box",
                  padding: "2px", 
                  display: "inline-block"
                }}
              >
                <button>
                  <a href="/subashJP.pdf"
                    className="text-xl p-5 text-gray-600 hover:text-cyan-700 font-semibold transition-all duration-300 transform hover:scale-110"
                    download="Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer">履歴書</a>
                </button>
              </motion.div>

              <motion.div
                initial={{
                  backgroundImage:
                    "linear-gradient(to right, white, white), linear-gradient(0deg, #0DB1D6 , white 40%)"
                }}
                animate={{
                  backgroundImage:
                    "linear-gradient(to right, white, white), linear-gradient(-360deg, #0DB1D6, white 40%)"
                }}
                transition={{
                  type: "tween",
                  ease: "linear",
                  duration: 2,
                  repeat: Infinity
                }}
                style={{
                  border: "2px solid transparent",
                  borderRadius: "40px",
                  backgroundClip: "padding-box, border-box",
                  backgroundOrigin: "padding-box, border-box",
                  padding: "2px", 
                  display: "inline-block"
                }}
              >
                <button>
                  <a href="/EnglishResume.pdf"
                    className="text-xl p-3 text-gray-600 hover:text-cyan-700 font-semibold transition-all duration-300 transform hover:scale-110"
                    download="Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer">Resume</a>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right Section - mobile frame */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <MobileResume resume={resume} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}