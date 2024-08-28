import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Eventcss.css';

const MyClass = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    startSlide();
  }, []); // Run startSlide() on component mount

  // Init slider
  const startSlide = () => {
    const sliderImages = document.querySelectorAll('.slide'); // Move this line inside startSlide
    reset();
    sliderImages[0].style.display = 'block';
  };

  // Clear all images
  const reset = () => {
    const sliderImages = document.querySelectorAll('.slide');
    sliderImages.forEach(image => {
      image.style.display = 'none';
    });
  };

  // Show prev
  const slideLeft = () => {
    const sliderImages = document.querySelectorAll('.slide');
    reset();
    sliderImages[current - 1].style.display = 'block';
    setCurrent(current - 1);
  };

  // Show next
  const slideRight = () => {
    const sliderImages = document.querySelectorAll('.slide');
    reset();
    sliderImages[current + 1].style.display = 'block';
    setCurrent(current + 1);
  };

  // Left arrow click
  const handleLeftClick = () => {
    const sliderImages = document.querySelectorAll('.slide');
    if (current === 0) {
      setCurrent(sliderImages.length - 1);
    } else {
      slideLeft();
    }
  };

  // Right arrow click
  const handleRightClick = () => {
    const sliderImages = document.querySelectorAll('.slide');
    if (current === sliderImages.length - 1) {
      setCurrent(0);
    } else {
      slideRight();
    }
  };

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Smart Submit Button</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />

      <div className="wrap">
      <div id="arrow-left" className={`arrow ${current === 1 ? 'white-arrow' : ''}`} onClick={handleLeftClick} />
        <div id="slider">
          <div className="slide slide1">
            <div className="slide-content">
              {/* <span>SEMESTER MATERIALS</span> */}
              <Link to="/semestermaterials"><button className="button-86">Learn More</button></Link>
            </div>
          </div>
          <div className="slide slide2">
            <div className="slide-content">
              <span >HIGHER STUDIES</span>
              <Link to="/higherstudy"><button className="button-86">Learn More</button></Link>
            </div>
          </div>
          <div className="slide slide3">
            <div className="slide-content">
              <span >INTERVIEW PREPARATION</span>
              <Link to="/interview"><button className="button-86">Learn More</button></Link>
            </div>
          </div>
        </div>
        <div id="arrow-right" className={`arrow ${current === 1 ? 'white-arrow' : ''}`} onClick={handleRightClick} />
      </div>
    </div>
  );
};

export default MyClass;
