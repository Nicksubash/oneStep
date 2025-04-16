import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import FormModal from './../components/modal/FormModal';
import ConfirmationModal from './../components/modal/ConfirmationModal';
import AnimatedButton from '../components/shared/AnimateButton';
import ExamModuleCard from './../components/mocktest/ExamModuleCard';
import data from '../data/data.json';

const MockTestPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: ''
  });
  const [showAllExams, setShowAllExams] = useState(false);
  const examCardSectionRef = useRef(null)

  const handleExploreExamsClick =()=>{
    examCardSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/mock-tests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsFormOpen(false);
        setIsConfirmationOpen(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const examsToDisplay = showAllExams ? data.sswExam : data.sswExam.slice(0, 4); // Conditionally slice the exams array

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">

        {/* Hero Section */}
        <div className="flex items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">JLPT Mock Test</h1>
            <p className="text-xl mb-8">Test your Japanese proficiency with our authentic practice exam</p>
            <AnimatedButton onClick={handleExploreExamsClick}>
              Expoler Exams
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Modals */}
        <FormModal
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleSubmit}
          formData={formData}
          onChange={handleInputChange}
        />

        <ConfirmationModal
          isOpen={isConfirmationOpen}
          onClose={() => setIsConfirmationOpen(false)}
          date={formData.date}
        />

        {/* Exam Module Cards Section 
         // Use examsToDisplay here*/}
        <div ref={examCardSectionRef} className='flex flex-wrap justify-center gap-5 mt-5 px-4'>
          {examsToDisplay.map((exam) => (
            <ExamModuleCard
              key={exam.id}
              header={exam.header}
              title={exam.title}
              description={exam.description}
              buttonText={exam.buttonText}
              onButtonClick={() => console.log(`Starting test for: ${exam.title} (ID: ${exam.id})`)}
            />
          ))}
        </div>

        {/* Show More Button */}
        {/* Conditionally render button if not showing all and more than 4 exams exist */}
        {!showAllExams && data.sswExam.length > 4 && ( 
          <div className="flex justify-center m-6">
            <AnimatedButton
              onClick={() => setShowAllExams(true)}
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 hover:shadow-md"
            >
              Show More Exams
            </AnimatedButton>
          </div>
        )}


      </div>

      <Footer />
    </>

  );
};

export default MockTestPage;