import React from 'react';
import { motion } from 'framer-motion';

const MobileResume = ({ resume }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const SkillPill = ({ skill }) => (
    <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm m-1">
      {skill}
    </span>
  );

  return (
    <div className="relative w-[320px] h-[700px] rounded-3xl shadow-2xl border-4 border-black overflow-hidden bg-gray-50 mb-9">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 w-full h-8  flex items-center justify-end px-4 text-white text-sm bg-gray-50">
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
    {/* Content Area */}
    <div className="p-4 overflow-y-auto h-[640px] mt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-800 mx-2 font-outfit">{resume.tagline}</h1>
          <p className="text-sm font-semibold text-gray-700 leading-relaxed font-outfit mt-2">{resume.description}</p>
        </motion.div>

        {/* Experience Section */}
        <motion.section 
          className="mb-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold text-indigo-600 mb-4 flex items-center gap-2 font-outfit">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zm8 16H4V8h16v12z"/>
            </svg>
            Experience
          </h2>
          {resume.experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              className="mb-4 p-4 bg-white rounded-lg shadow-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-bold text-gray-800 font-outfit">{exp.position}</h3>
              <p className="text-sm font-semibold text-gray-700 mb-2 font-inter">{exp.dates}</p>
              <ul className="text-sm text-gray-700 font-outfit">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="mb-1 flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="mb-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold text-blue-600 mb-4 flex items-center gap-2 font-outfit">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.16L3.83 9 12 4.84 20.17 9 12 16.16z"/>
            </svg>
            Education
          </h2>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-bold text-gray-800 font-outfit">{resume.education.universityName}</h3>
            <p className="text-sm font-semibold text-gray-700 mb-2 font-outfit">{resume.education.universityDate}</p>
            <p className="text-sm text-gray-600 font-outfit leading-relaxed">{resume.education.universityPara}</p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-lg font-semibold text-yellow-600 mb-4 flex items-center gap-2 font-outfit">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
            </svg>
            Skills
          </h2>
          <div className="p-4 bg-white rounded-lg shadow-sm mb-10">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2 font-outfit">Languages</h3>
              <div className="flex flex-wrap font-outfit">
                {resume.languages.map((lang, idx) => (
                  <SkillPill key={idx} skill={lang} />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2 font-outfit">Frameworks</h3>
              <div className="flex flex-wrap font-outfit">
                {resume.frameworks.map((framework, idx) => (
                  <SkillPill key={idx} skill={framework} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2 font-outfit">Tools</h3>
              <div className="flex flex-wrap font-outfit">
                {resume.others.map((tool, idx) => (
                  <SkillPill key={idx} skill={tool} />
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Home Bar */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black rounded-b-3xl flex items-center justify-center">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default MobileResume;