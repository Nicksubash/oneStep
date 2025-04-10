import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import FormModal from './../components/modal/FormModal';
import ConfirmationModal from './../components/modal/ConfirmationModal';
import AnimatedButton from '../components/shared/AnimateButton';

const MockTestPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: ''
  });

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

  return (
    <>
    <Header />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      
      
      {/* Main Content Area */}
      
        {/* Hero Section */}
        <div className="flex items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white min-h-screen">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">JLPT Mock Test</h1>
            <p className="text-xl mb-8">Test your Japanese proficiency with our authentic practice exam</p>
            <AnimatedButton onClick={() => setIsFormOpen(true)}>
              Schedule Your Test Now
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

  
    </div>
    
    <Footer />
    </>
  
  );
};

export default MockTestPage;