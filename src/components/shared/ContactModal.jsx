import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import CompanyContactForm from './CompanyContactForm';
import JobApplicationForm from './JobApplicationFrom';

const ContactModal = ({ selectedType, onClose }) => {
  if (!selectedType) return null;

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const modalTitle = selectedType === "company" 
    ? "企業様用 お問い合わせフォーム" 
    : "お仕事をお探しの方用 お問い合わせフォーム";

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 m-4 animate-fadeIn">
        {/* Modal Header */}
        <div className="mb-4 border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800">{modalTitle}</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
          </button>
        </div>

        {/* Modal Content */}
        <div>
          {selectedType === "company" && <CompanyContactForm />}
          {selectedType === "student" && <JobApplicationForm />}
        </div>
      </div>
    </div>
  );

  // Render modal into the root-level DOM node
  return createPortal(modalContent, document.body);
};

export default ContactModal;