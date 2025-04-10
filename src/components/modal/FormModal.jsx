// components/FormModal.js
import React from 'react';
import { FiUser, FiMail, FiCalendar, FiPhone } from 'react-icons/fi';
import Modal from './modal';
import IconInput from '../shared/IconInput';
import AnimatedButton from '../shared/AnimateButton';

const FormModal = ({ isOpen, onClose, onSubmit, formData, onChange }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-6">Test Registration</h2>
      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <IconInput
            icon={FiUser}
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={onChange}
          />
          
          <IconInput
            icon={FiMail}
            name="email"
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={onChange}
          />
           <IconInput
            icon={FiPhone}
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            title= "Phone your phone number"
            value={formData.phone}
            onChange={onChange}
          />
          
          {/* Date Picker Input */}
          <IconInput
            icon={FiCalendar}
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={onChange}
            className="date-picker" 
          />
        </div>
        
        <div className="mt-8 flex gap-4 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <AnimatedButton type="submit">
            Schedule Test
          </AnimatedButton>
        </div>
      </form>
    </Modal>
  );
  
  export default FormModal;