import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Css/Review.css';
import Sentiment from 'sentiment';

function ReviewPage() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [result, setResult] = useState({ score: 0 });


  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("/reviews", { 
        name,
        comment });
      alert('Review submitted Successfully');
      fetchReviews();
      setName('');
      setComment('');
    } catch (error) {
      alert("Failed to submit review. Please try again later.");
    }
  };

  const handleCommentChange = (e) => {
    const inputText = e.target.value;
    setComment(inputText);

    // Perform sentiment analysis
    const sentiment = new Sentiment();
    const tempResult = sentiment.analyze(inputText);
    setResult(tempResult);
  };

  return (
    <div className="flex flex-col flex-grow bg-white ">
      <h1 className="font-bold text-[30px] mt-5 mb-5">Post Your Review</h1>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label className='flex ml-5 mb-5 text-2xl'>
          Enter Your Name & Branch : 
          <input
            type="text"
            placeholder=" Name & Branch"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className=' ml-5 mr-20'>
          <textarea
            rows="4"
            cols="40"
            placeholder="  Write your review here..."
            value={comment}
            onChange={handleCommentChange}
            required
          ></textarea>
        </label>
    
        <div className='flex justify-center ml-5'>
          <div className='result' style={{ fontSize: '4rem', marginRight: '1rem' }}>
            {result?.score === 0 ? '😐' : result?.score < 0 ? '😞' : '🥰'}
          </div>
          </div>

          <div className='flex justify-center mb-5 mr-2 '>
          <button type="submit" className="text-white justify-center cursor-pointer rounded w-20 h-10 bg-primary font-bold ml-5">
          Submit
        </button>
        </div>
       
      </form>

      <div className="reviews-container">
        <h2 className="font-bold text-[30px] mt-5 mb-10">Existing Reviews</h2>
        <div className="review-container">
          {reviews.map(review => (
            <div className="review-box" key={review._id}>
              <h3>{review.name}</h3>
              <div>
                <p className="ml-4">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
