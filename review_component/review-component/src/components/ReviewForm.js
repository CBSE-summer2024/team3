import React, { useState } from 'react';
import "../assets/review-form.css";

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, like sending the data to a server
    console.log('Rating:', rating);
    console.log('Review:', review);
    alert('Review submitted successfully!');
  };

  return (
    <div className="review-form-container">
      <h2>You're Reviewing: <span className="product-name">Bell Nude Foundation</span></h2>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="rating">
          <p>Your Rating <span className="required">*</span></p>
          <div className="stars">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? "star-button on" : "star-button off"}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="review-text">
          <label htmlFor="review">Review <span className="required">*</span></label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            placeholder="Write your review here..."
          />
        </div>
        <button type="submit" className="submit-button">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;


