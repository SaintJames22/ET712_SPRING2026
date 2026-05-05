import React, { useState } from 'react';
import './App.css';
import Modal from './modalwindow.js';

const User_feedback = function(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddFeedback = (feedback) => {
        props.addComment(feedback);
    };

    return (
        <div className="feedbackcontainer">
            <section className="feedbackcard">
                <div className="content">
                    <p>{props.name || 'User'}</p>
                </div>

                <div className="description">{props.message}</div>
                <div className="cardfooter">
                    <p className="addicon" onClick={() => setIsModalOpen(true)}>
                        <span>&#10011;</span>
                        Add Feedback
                    </p>
                </div>
            </section>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddFeedback={handleAddFeedback}
            />
        </div>
    );
}

export default User_feedback;