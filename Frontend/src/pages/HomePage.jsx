import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Home.css'; 
import imageSrc from '../assets/cmritlibrary1.jpg';
import iimageSrc from '../assets/events.jpg';
import collegesrc from '../assets/college-icon.jpeg';
import { Link } from "react-router-dom";
import CalendarView from './CalendarView';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import ChatBot from 'react-simple-chatbot';

const Home = () => {
  const [announcements, setAnnouncements] = useState([
    "Announcement : Admissions open for the year 2024-25",
    "Announcement : Check out the new Placement reviews",
    "Announcement : Explore new Events",
    "Announcement : Explore exclusive study materials",
    "Announcement : kindly give the review about the page",
  ]);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  useEffect(() => {
    // Set interval to change announcement every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentAnnouncementIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [announcements]);


  const navigate = useNavigate();

  const handleExploreStudyMaterials = () => {
    // Redirect to the study materials page
    navigate('/studymaterials');
  };

  const handleExploreEvents = () => {
    // Redirect to the event page
    navigate('/events');
  };

  return (
    <div className='main'>
      <header>
            {/* Display current announcement */}
        
            <p className='text-3xl announcement'>{announcements[currentAnnouncementIndex]}</p>

        <p className='text-3xl '>EDU EVENT HUB</p>
        <p className='text-2xl mt-(2) '>Explore study materials, plan events, and more!</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={collegesrc}
          alt="college"
          className="feature-image"
          style={{ width: '140px', height: 'auto',marginBottom:'-10px' }}
        />
        </div>
      </header>
      <div className="slide bg-fixed">
        <div className="column">
          <Link to="/aboutus">About CMRIT</Link>
        </div>
        <div className="column">
          <Link to="/reviews">Text Reviews</Link>
        </div>
        <div className="column">
          <Link to="/videos">Video Reviews</Link>
        </div>
        <div className="column">
        <a href="#contact-us">Contact Us</a>
        </div>
        <div className="column">
          <Link to="/placements">Placement Reviews</Link>
        </div>
      </div>

      <div className="slide">
        <div className="column">
        <a href="#feature">Explore Study Materials</a>
        </div>
        <div className="column">
        <a href="#events">Explore Events </a>
        </div>
        <div className="column">
          <Link to="/body">Resume Builder</Link>
        </div>
        </div>
       
      <label className='flex flex-row  justify-between items-center mb-10'>
      <div className="map-container flex flex-row  justify-between items-center ml-10 mt-10 mb-10 mr-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0680503633844!2d77.71129877373174!3d12.967497314970961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae130f321b2b95%3A0x74b2c05bbc2aac8d!2sCMR%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1712068690258!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div>
      <h1 className="about-heading font-black ml-10 mt-(-5) mr-10 text-3xl mb-3">ABOUT EDU EVENT HUB</h1>
      
      <p className="about-description mr-10">
    <p className='text-1xl' style={{ textAlign: 'justify', fontFamily: 'Arial, sans-serif',fontSize: '18px' }}>In the dynamic landscape of modern education, the seamless integration of academic resources and extracurricular activities plays a pivotal role in enhancing the overall student experience. With this vision in mind, we embark on the journey of creating a robust and comprehensive platform – a website tailored for the unique needs of college students, blending the realms of academic studies and event management.</p>
    <p style={{ textAlign: 'justify', fontFamily: 'Arial, sans-serif',fontSize: '18px' }}>Our website features dedicated sections for study materials, providing a centralized hub for academic resources. Additionally, it delves into higher studies and interview preparation, assisting students in charting their career paths beyond the classroom. Simultaneously, the platform facilitates the planning and execution of both technical and non-technical events, ensuring a vibrant and engaging campus life.</p>
    <p style={{ textAlign: 'justify', fontFamily: 'Arial, sans-serif',fontSize: '18px' }}>By unifying study materials, career guidance, and event management, we aspire to create a user-centric platform that simplifies the complexities of college life, fostering a cohesive and enriched educational journey for every student.</p>
</p>

</div>

</label>


      <section className="features  bg-black bg-opacity-50">
        <div className="feature" id='feature'>
          <img src={imageSrc} alt="Study Materials" className="feature-image" />
          <button className="button-86" onClick={handleExploreStudyMaterials}>
            Explore Study Materials
          </button>
        </div>
        <div className="feature" id='events'>
          <img src={iimageSrc} alt="Event Management" className="feature-image" />
          <button className="button-86" onClick={handleExploreEvents}>
            Explore Events
          </button>
        </div>
       
      </section>
      
      <div className="contact-us flex flex-col justify-between items-center bg-black bg-opacity-75" id="contact-us" >
      <h1 className="contact-heading font-black bg-white mt-10 text-3xl mb-3">Contact Us</h1>
      <label className='flex flex-row  justify-between items-center mt-10 mb-10'>
      <div className="mr-10">
      <div
        className="box bg-opacity-75"
        style={{
         
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p>
          <strong>Address:</strong>
        </p>
        <p>CMR Institute of Technology</p>
        <p>132 AECS Layout</p>
        <p>ITPL Main Road, Kundalahalli</p>
        <p>Bangalore 560037, India</p>
      </div>
      </div>

      <div
        className="box bg-opacity-75"
        style={{
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p>
          <strong>Office Hours:</strong>
        </p>
        <p>8.00 am to 4.00 pm (Monday – Friday)</p>
        <p>8.00 am to 12.30 pm (Saturday)</p>
      </div>
      <div className="ml-10">
      <div
        className="box"
        style={{
         
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p>
          <strong>Admissions Hotline:</strong>
        </p>
        <p>93429 00666</p>
      </div>
      </div>
      </label>

      <label className='flex flex-row  justify-between items-center mt-10 mb-10'>
     <div className='mr-10'>
      <div
       className="box"
        style={{
          
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p>
          <strong>Call:</strong>
        </p>
        <p>
          <FaPhoneAlt /> +91 80 28524466 / 77
        </p>
      </div>
      </div>

      <div className="mr-10">
      <div
        className="box"
        style={{
         
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p>
          <FaEnvelope size={30} color="#DB4437" /> Email: edueventhub@gmail.com
        </p>
        <p>
          <FaEnvelope size={30} color="#0F9D58" /> Email: info@cmrit.ac.in
        </p>
      </div>
      </div>
      <div
        className="box flex felx-row gap-2"
        style={{
          
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <a
          href="https://www.facebook.com/CMRITSpeaks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={40} color="#3b5998" />
        </a>
        <a
          href="https://twitter.com/CMRIT_Bengaluru?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={40} color="#00acee" />
        </a>
        <a
          href="https://www.instagram.com/cmrit.bangalore/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={40} color="#e4405f" />
        </a>
        <a
          href="https://in.linkedin.com/school/cmr-institute-of-technology-bengaluru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} color="#0e76a8" />
        </a>
      </div>
</label>
    </div>

   

      <footer>
        <p className=' mt-(5)'>© 2024 EDU EVENT HUB</p>
      </footer>

      <ChatBot
  steps={[
    {
      id: '1',
      message: 'Welcome to EduEvent Hub! How can I assist you today?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 'college', label: 'About CMRIT', trigger: 'college-info' },
        { value: 'admissions', label: 'About admissions', trigger: 'admissions-info' },
        
        { value: 'interview-questions', label: 'Top interview questions', trigger: 'interview-questions' },
        { value: 'study-tips', label: 'Study tips', trigger: 'study-tips' },
        { value: 'events', label: 'About events', trigger: 'events-options' },
      ],
    },
    {
      id: 'college-info',
      message: 'CMR Institute of Technology (CMRIT) is a private engineering college located in Bengaluru, India. CMRIT is a technical and management institution affiliated to Visvesvaraya Technological University and approved by All India Council for Technical Education (AICTE), New Delhi. CMRIT is recognized by Government of Karnataka.',
      trigger: '2', // Go back to the initial menu
    },
    {
      id: 'admissions-info',
      message: 'For admissions, you can contact 93429 00666',
      trigger: '2', // Go back to the initial menu
    },
    {
      id: 'interview-questions',
      message: 'Which topic are you interested in for interview questions?',
      trigger: 'interview-topic',
    },
    {
      id: 'interview-topic',
      options: [
        { value: 'dbms', label: 'DBMS', trigger: 'dbms-questions' },
        { value: 'dsa', label: 'DSA', trigger: 'dsa-questions' },
        { value: 'cn', label: 'Computer Networks', trigger: 'cn-questions' },
        { value: 'os', label: 'Operating Systems', trigger: 'os-questions' },
        { value: 'hr', label: 'HR', trigger: 'hr-questions' },
      ],
    },
    {
      id: 'events-options', // New step for events options
      options: [
        { value: 'upcoming-events', label: 'Upcoming events', trigger: 'upcoming-events-page' },
        { value: 'events-info', label: 'Events info', trigger: 'events-info-page' },
        { value: 'back', label: 'Back', trigger: '2' }, // Option to go back to the main menu
      ],
    },
    {
      id: 'upcoming-events-page',
      component: <CalendarView />,
      trigger: 'events-options', // Go back to the events options
    },
    {
      id: 'events-info-page',
      message: 'You can explore more about our events on the Events page by clicking the events page button located above the Contact Us section.',
      trigger: 'events-options', // Go back to the events options
    },
    {
      id: 'study-tips',
      message:
        "Here are some study tips: 1. Stay organized, 2. Take breaks, 3. Practice regularly, 4. Take notes, 5. Ask questions.",
      trigger: "2", // Go back to the initial menu
    },
    {
      id: "dbms-questions",
      message:
      //  "Here are some top DBMS interview questions...https://www.geeksforgeeks.org/commonly-asked-dbms-interview-questions/",
      "Explore our dedicated page for an exclusive collection of questions in Interview Preparation.",
      trigger: "2", // Go back to the initial menu
    },
    {
      id: "dsa-questions",
      message:
       // "Here are some top DSA interview questions...https://www.geeksforgeeks.org/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/",
       "Explore our dedicated page for an exclusive collection of questions in Interview Preparation.",
       trigger: "2", // Go back to the initial menu
    },
    {
      id: "cn-questions",
      message:
       // "Here are some top Computer Networks interview questions...https://www.simplilearn.com/computer-networks-interview-questions-article",
      
       "Explore our dedicated page for an exclusive collection of questions in Interview Preparation.",
        trigger: "2", // Go back to the initial menu
    },
    {
      id: "os-questions",
      message:
       // "Here are some top Operating Systems interview questions...https://www.geeksforgeeks.org/operating-systems-interview-questions/",
       "Explore our dedicated page for an exclusive collection of questions in Interview Preparation.",
       trigger: "2", // Go back to the initial menu
    },
    {
      id: "hr-questions",
      message:
       // "Here are some top HR interview questions...https://www.coursera.org/in/articles/hr-interview-questions",
       "Explore our dedicated page for an exclusive collection of questions in Interview Preparation.",
      trigger: "2", // Go back to the initial menu
    },
  ]}
  floating={true}
/>


    </div>
  );
};

export default Home;
