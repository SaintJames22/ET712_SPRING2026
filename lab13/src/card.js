import React from 'react';
import './App.css'
import User_feedback from './user_feedback.js';

const User = function(props) {
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
      <User_feedback message={props.message} />
    </section>
  )
}

export default User