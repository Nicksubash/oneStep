// EmailJS Configuration
// Environment variables are loaded from .env file

import { init, send } from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    TEMPLATES: {
    COMPANY_CONTACT: import.meta.env.VITE_EMAILJS_COMPANY_TEMPLATE_ID,
    JOB_APPLICATION: import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID,
  }
};

// EmailJS initialization
export const initializeEmailJS = () => {
  init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Helper function to send emails
export const sendEmail = async (templateId, templateParams) => {
  return await send(
    EMAILJS_CONFIG.SERVICE_ID,
    templateId,
    templateParams
  );
}; 