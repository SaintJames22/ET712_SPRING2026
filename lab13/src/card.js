import React, { useState } from 'react';
import './App.css'
import User_feedback from './user_feedback.js';

const User = function(props) {
  const [comments, setComments] = useState([]);

  const addComment = (message) => {
    const newComment = {
      name: 'You',
      message: message,
      date: new Date().toLocaleDateString()
    };
    setComments([...comments, newComment]);
  };

  return (
    <section className="card">
      <img src={props.image} alt={props.alt || props.name} />
      <div className="content">
        <p className="author">{props.name}</p>
      </div>
      <div className="metadata">
        <p>Posted <span className="date">{props.date}</span></p>
      </div>
      <div className="comment">
        <p>"<em>{props.message}</em>"</p>
      </div>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p><strong>{comment.name}</strong> on {comment.date}: {comment.message}</p>
        </div>
      ))}
      <User_feedback addComment={addComment} message={props.message} />
    </section>
  )
}

export default User