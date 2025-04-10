// components/Modal.js
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  // Keep your existing useEffect hooks for click outside and Escape key

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </motion.div>
    </div>
  );
}