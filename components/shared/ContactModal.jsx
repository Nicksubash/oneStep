import React, { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import CompanyContactForm from './CompanyContactForm';
import StudentContact from './JobApplicationFrom';
import { createPortal } from 'react-dom';

const ContactModal = ({ selectedType, onClose }) => {
  if (!selectedType) return null;

  const modalTitle = selectedType === "company" 
    ? "企業様用 お問い合わせフォーム" 
    : "お仕事をお探しの方用 お問い合わせフォーム";

  // Handle click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return  createPortal(
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl max-h-[90vh] flex flex-col transform transition-all duration-300 ease-out animate-slideUp relative">
        {/* Modal Header */}
        <div className="sticky top-0 p-6 border-b border-gray-200 flex items-center justify-between bg-gray-50 rounded-t-2xl z-[101]">
          <h2 className="text-xl font-bold text-gray-800">{modalTitle}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 z-[102]"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        
        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-white rounded-b-2xl">
          {selectedType === "company" && <CompanyContactForm />}
          {selectedType === "student" && <StudentContact />}
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 