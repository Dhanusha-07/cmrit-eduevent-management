import React from "react";
import '../Css/Contactus.css';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa"; // Import react-icons for social media icons

const ContactUsPage = () => {
  return (
    <div className="contact-us-page bg-white">
      <h1 className="contact-heading font-black text-3xl mb-3">Contact Us</h1>
      <div
        className="description"
        style={{
          backgroundColor: "#CCFFCC",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p>
          We are here to assist you. Feel free to reach out to us through email
          or connect with us on social media! We strive to provide excellence
          and value your feedback.
        </p>
      </div>
      <div
        className="contact-info"
        style={{
          backgroundColor: "#FFCCCC",
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
      <div
        className="address-info"
        style={{
          backgroundColor: "#FFFFCC",
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
      <div
        className="office-hours"
        style={{
          backgroundColor: "#CCFFCC",
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
      <div
        className="admissions-hotline"
        style={{
          backgroundColor: "#CCFFFF",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p>
          <strong>Admissions Hotline:</strong>
        </p>
        <p>93429 00666</p>
      </div>
      <div
        className="call-info"
        style={{
          backgroundColor: "#FFCCFF",
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
      <div
        className="social-media-links flex felx-row gap-2"
        style={{
          backgroundColor: "#CCCCFF",
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
    </div>
  );
};

export default ContactUsPage;