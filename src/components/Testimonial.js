import React from 'react';
import './Testimonial.css';  // Import the custom styles

const Testimonial = ({ text, author, rating, googleReviewLink }) => (
  <div className="testimonial">
    <div className="testimonial-header">
      <div className="testimonial-author">
        <h4>{author}</h4>
        <div className="testimonial-rating">
          {/* Display stars for rating */}
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
          ))}
        </div>
      </div>
    </div>
    <p className="testimonial-text">"{text}"</p>
    <a 
      href={googleReviewLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="google-review-link"
    >
      View Review 
    </a>
  </div>
);

export default Testimonial;
