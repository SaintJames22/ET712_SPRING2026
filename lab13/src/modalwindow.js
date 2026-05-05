import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onAddFeedback }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onAddFeedback(input.trim());
      setInput('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Feedback</h3>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your feedback..."
        />
        <button onClick={handleAdd}>Add Feedback</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;