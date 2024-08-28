import React from 'react';
import '../Css/Eventcss.css';

const MyClass = () => {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Smart Submit Button</title>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      {/* Stylesheet */}
     
      <div className="wrap">
        {/* <div id="arrow-left" className="arrow" /> */}
        <div id="slider">
          <div className="slide slide1">
            <div className="slide-content">
              <span>TECHNICAL EVENTS</span>
              <a href="technicalevents.html"><button className="button-86">Learn More</button></a>
            </div>
          </div>
          <div className="slide slide2">
            <div className="slide-content">
              <span>NON TECHNICAL EVENTS</span>
              <button className="button-86">Learn More</button>
            </div>
          </div>
        </div>
        {/* <div id="arrow-right" className="arrow" /> */}
      </div>
    </div>
  );
};

export default MyClass;
