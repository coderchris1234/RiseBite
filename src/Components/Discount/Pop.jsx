import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Check } from "lucide-react";
import './Pop.css'

const SubscribeModal = ({ isOpen, onClose }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000); // confetti stops after 3s
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {showConfetti && <Confetti />}
      <div className="modal-content">
        <div className="check-container">
          <Check className="check-icon" />
        </div>
        <h2>Subscription Successful!</h2>
        <p>You’ve subscribed to our newsletter 🎉</p>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default SubscribeModal;