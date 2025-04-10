// components/mock-test/ConfirmationModal.jsx
import { FiClock } from 'react-icons/fi';
import Modal from './modal';
import AnimatedButton from '../shared/AnimateButton';

const ConfirmationModal = ({ isOpen, date, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="text-center">
      <div className="text-green-500 text-6xl mb-4 flex justify-center">
        <FiClock />
      </div>
      <h2 className="text-2xl font-bold mb-4">Test Scheduled!</h2>
      <p className="text-gray-600 mb-6">
        Your mock test has been scheduled for<br />
        <span className="font-semibold text-purple-600">
          {new Date(date).toLocaleDateString()}
        </span>
      </p>
      <AnimatedButton onClick={onClose}>
        Close
      </AnimatedButton>
    </div>
  </Modal>
);

export default ConfirmationModal;