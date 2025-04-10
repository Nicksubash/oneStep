import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiCalendar, FiAward, FiStar, FiMessageSquare } from 'react-icons/fi';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const Profile = () => {
  // Static data
  const studentName = "John Doe";
  const progressPercentage = 75;
  const enrolledClass = "N2";
  const japaneseSuggestions = [
    "Practice Kanji daily using flashcards.",
    "Watch Japanese dramas or anime with subtitles.",
    "Try language exchange apps to talk with native speakers.",
    "Read simple Japanese books or manga."
  ];
  const testDate = new Date(2024, 11, 15);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
        <motion.div
          className="container mx-auto max-w-2xl p-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30"></div>
              <div className="relative bg-white rounded-full p-2 shadow-lg">
                <div className="h-24 w-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {studentName.charAt(0)}
                </div>
              </div>
            </div>
            <h1 className="mt-6 text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Student Profile
            </h1>
            <h2 className="text-xl text-gray-600 mt-2 font-medium">{studentName}</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FiAward className="text-purple-600" />
                  Learning Progress
                </h3>
                <span className="text-sm font-medium text-purple-600">{progressPercentage}%</span>
              </div>
              <ProgressBar progress={progressPercentage} />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <FiBook className="text-white" />
                Currently Enrolled Class
              </h3>
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span className="font-bold text-lg">{enrolledClass}</span>
                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FiStar className="text-yellow-500" />
                Learning Tips
              </h3>
              <div className="grid gap-3">
                {japaneseSuggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <FiMessageSquare className="text-blue-600 mt-1" />
                    <p className="text-gray-700">{suggestion}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FiCalendar className="text-green-500" />
                Next Test Date
              </h3>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FiCalendar className="text-green-600 text-xl" />
                </div>
                <span className="text-xl font-bold text-gray-800">
                  {testDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent w-1/3 animate-shine"></div>
      </div>
    </div>
  );
};

export default Profile;