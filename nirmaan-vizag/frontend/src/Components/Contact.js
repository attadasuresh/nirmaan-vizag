import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css'

const Contact = () => {
  return (
    <>
    
    <div className="contact-page">
      {/* Header Section */}
      <header className="contact-header">
        <img src="images/nirmaan_logo.png" alt="Nirmaan Logo" className="contact-logo" />
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Feel free to reach out to us through any of the channels below!</p>
      </header>

      {/* Contact Information Cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Our Address</h3>
          <p> #58-1-278,2nd Floor, One Plus Show Room Upstairs, Beside Padmaja Suzuki & Royal Enfield , NAD Flyover, Gopalpatnam Main Road , Vizag -530009 .</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email Us</h3>
          <p>parasuramudu.doddi@nirmaan.org</p>
          <p>mohanrao.n@nirmaan.org</p>

        </div>
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Call Us</h3>
          <p>9908104113</p>
          <p>6304159549</p>

        </div>
      </div>

      {/* More Info Section */}
      <div className="more-info">
        <h2>More Information</h2>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/career">Career</a></li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
