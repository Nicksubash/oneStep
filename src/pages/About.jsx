import React from "react";
import { Link } from "react-router-dom";
import portfolioData from "../data/portfolio.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-opacity-90 shadow-2xl rounded-lg p-8">
            <section className="header-section text-center mb-6">
              <h1 className="text-2xl font-bold text-blue-600">{headerTaglineOne}</h1>
              <h2 className="text-xl text-indigo-600 my-2">{headerTaglineTwo}</h2>
              <h3 className="text-lg text-purple-600">{headerTaglineThree}</h3>
              <h4 className="text-base text-blue-600 mt-2">{headerTaglineFour}</h4>
            </section>
            <section className="text-center">
              <p className="text-sm leading-relaxed">{aboutpara}</p>
            </section>
          </div>

          {/* Right Section - Mobile Style */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="relative w-[320px] h-[700px] rounded-3xl shadow-2xl border-4 border-black overflow-hidden">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 w-full h-8  flex items-center justify-end px-4 text-white text-sm bg-white">
                <div>
                  <img src="/internet.png" alt="wifi" className="h-6 w-auto py-1" />
                </div>
                <div className="text-black mx-2">
                  <img src="/battery.png" alt="battery" className="h-6 w-auto py-1 text-white" />
                </div>
                <div className="text-black">100%</div>
              </div>
              <div className="text-black absolute top mx-2 left-4 top-1 text-sm ">11:11</div>

              {/* Content Area */}
              <div className="p-4 overflow-y-scroll h-[640px] bg-gray-100 mt-8">
                {/* Resume Section */}
                <section className="resume-section mb-12">
                  <h2 className="text-xl font-bold text-teal-600 mb-4">Resume</h2>
                  <p className="text-sm text-gray-700 mb-4">{resume.tagline}</p>
                  <p className="text-sm text-gray-700 mb-8">{resume.description}</p>

                  {/* Experience */}
                  <div className="experience mb-8">
                    <h3 className="text-lg font-semibold text-green-600 mb-4">Experience</h3>
                    <ul>
                      {resume.experiences.map((experience) => (
                        <li key={experience.id} className="mb-6">
                          <p className="font-semibold">{experience.position}</p>
                          <p className="text-gray-600">
                            {experience.company} | {experience.dates}
                          </p>
                          <ul className="list-disc list-inside mt-2">
                            {experience.bullets.map((bullet, idx) => (
                              <li key={idx} className="text-gray-700">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Education */}
                  <div className="education mb-8">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">Education</h3>
                    <p className="text-sm text-gray-700">{resume.education.universityName}</p>
                    <p className="text-sm text-gray-700">{resume.education.universityDate}</p>
                    <p className="text-sm text-gray-700">{resume.education.universityPara}</p>
                  </div>

                  {/* Skills */}
                  <div className="skills mb-8">
                    <h3 className="text-lg font-semibold text-yellow-600 mb-4">Skills</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Languages: </strong>
                      {resume.languages.join(", ")}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Frameworks: </strong>
                      {resume.frameworks.join(", ")}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Other Tools: </strong>
                      {resume.others.join(", ")}
                    </p>
                  </div>
                </section>
              </div>

              {/* Bottom Navigation Bar */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-black rounded-b-3xl flex items-center justify-center">
                <div className="w-10 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
