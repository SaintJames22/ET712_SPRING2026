import React from 'react';
import './App.css';

const User_feedback = function(props) {
    return (
        <div className="feedbackcontainer">
            <section className="feedbackcard">
                <div className="content">
                    <p>{props.name || 'User'}</p>
                </div>

                <div className="description">{props.message}</div>
                <div className="cardfooter">
                    <p className="addicon">
                        <span>&#10011;</span>
                        Add Feedback
                    </p>
                </div>
            </section>
        </div>
    );
}

export default User_feedback;