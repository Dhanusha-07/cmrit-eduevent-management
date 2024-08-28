import React, { useState } from "react"; // Import useState hook from React
import '../Css/Aboutus.css';

const AboutUsPage = () => {
  return (
    <div className="bg-white">
        <h1 className="contact-heading font-black text-3xl mb-3">About Us</h1>
    <div className="about-us-page">
      <div className="section" style={{ backgroundColor: "#FFD9EC" }}>
        <h2 >CMRIT</h2>
        <p>
          CMR Institute of Technology (CMRIT) is a private engineering college
          located in Bengaluru, India. CMRIT is a technical and management
          institution affiliated to Visvesvaraya Technological University and
          approved by All India Council for Technical Education (AICTE), New
          Delhi. CMRIT is recognized by the Government of Karnataka. CMRIT was
          founded in 2000 by CMR Jnanadhara Trust. It offers courses like
          Bachelor of Engineering, Master's degree, MCA, MBA, and Doctoral
          programs.
        </p>
      </div>
      <div className="section" style={{ backgroundColor: "#D0E8F2" }}>
        <h2>Accreditations</h2>
        <p>
          CMRIT is accredited with A++ by the National Assessment and
          Accreditation Council (NAAC). All undergraduate engineering programs
          are accredited by the National Board of Accreditation (NBA).
        </p>
      </div>
      <div className="section" style={{ backgroundColor: "#FFEDCC" }}>
        <h2>Courses Offered</h2>
        <h3>UG Courses</h3>
        <ul>
          <li>Electronics and Communication Engineering</li>
          <li>Electrical and Electronics Engineering</li>
          <li>Computer Science Engineering</li>
          <li>Information Science Engineering</li>
          <li>Mechanical Engineering</li>
          <li>Civil Engineering</li>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Artificial Intelligence & Data Science</li>
          <li>Computer Science Engineering(AIML)</li>
          <li>Computer Science Engineering(DS)</li>
        </ul>
        <h3>PG Courses</h3>
        <ul>
          <li>Master of Business Administration</li>
          <li>Master of Computer Applications</li>
        </ul>
      </div>
      <div className="section" style={{ backgroundColor: "#E2D7FF" }}>
        <h2>Research Centers</h2>
        <p>
          Research centers affiliated to Visvesvaraya Technological University:
        </p>
        <ul>
          <li>Electronics and Communication Engineering</li>
          <li>Electrical and Electronics Engineering</li>
          <li>Computer Science Engineering</li>
          <li>Information Science Engineering</li>
          <li>Mechanical Engineering</li>
          <li>Civil Engineering</li>
          <li>Basic Sciences</li>
          <li>Business Administration</li>
          <li>Computer Applications</li>
        </ul>
      </div>
      <div className="section" style={{ backgroundColor: "#D8FFD8" }}>
        <h2>CoE</h2>
        <p>The various centre of Excellence of CMRIT:</p>
        <ul>
          <li>CoE-Machine Intelligence and Big Data</li>
          <li>CoE-Data Driven Internet-of Things</li>
          <li>CoE-Integrated Circuits</li>
          <li>CoE-Signal Processing</li>
          <li>CoE-Additive Manufacturing</li>
          <li>CoE-Sensors and Nano Electronics</li>
          <li>CoE-Material Science</li>
          <li>CoE-Natural Resource Management</li>
          <li>CoE-Metallurgical Engineering</li>
          <li>CoE–Intelligent Energy Systems</li>
          <li>CoE–Intelligent Human Computer Interaction</li>
          <li>CoE–Robotic Systems</li>
          <li>CoE–Financial Markets</li>
          <li>CoE–Embedded System</li>
          <li>CoE-Modeling of Dynamical Systems</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AboutUsPage;