import React, { useState } from 'react';
import './About.css';
import Footer from './Footer';

import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Function to open the popup with the selected member
  const handleViewMoreClick = (member) => {
    setSelectedMember(member);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setSelectedMember(null);
  };

  const teamMembers = [
    {
      name: "Ch.Latha Kumari ( M.Tech )",
      role: "Chief Of Staff",
      description: "Inspired collective growth - Encouraged creative solutions - Nurtured a positive environment",
      image: "images/IMG_20230811_142145.jpg"
    },
    {
      name: "V. Durga Prasad (MBA)",
      role: "Center Manager",
      description: "Inspiring Excellence Always - Leading by Example - Visionary Team Leader",
      image: "images/WhatsApp Image 2024-10-31 at 10.00.45 AM (1).jpeg"
    },
    {
      name: "Debjit Mukherjee (MBA)",
      role: "Placement Co-ordinator",
      description: "Excellence Personified - Transformative Leader - Guiding Light",
      image: "images/b64cfea8-5a4b-45f3-9311-aa0adf1386e0.jpeg"
    },
    {
      name: "N.Vandana ( M.A , B.Ed )",
      role: "Communication & Soft Skills Trainer",
      description: "Empowering Youth Champion - Inspiring Leadership Icon - Compassionate Mentor",
      image: "images/79c0fb85-7cd9-4ec5-a182-3edfd2e81455.jpeg"
    },
    {
      name: "D.Parasuramudu ( M.Sc )",
      role: "Mobilizer",
      description: "Effective Communication Skills - Empathy and Cultural Sensitivity - Organizational and Problem-Solving Skills",
      image: "images/WhatsApp Image 2024-10-31 at 9.49.34 AM.jpeg"
    },
    {
      name: "M.Nagalakshmi (MCA)",
      role: "IT Trainer",
      description: "Expert Communicator - Empathetic Mentor - Adaptable Instructor",
      image: "images/WhatsApp Image 2024-10-30 at 11.19.27 AM.jpeg"
    },
    {
      name: "K. Prasanthi ( B.Tech )",
      role: "Domain-Trainer",
      description: "Expertise and Knowledge - Effective Communication - Patience and Empathy",
      image: "images/WhatsApp Image 2024-10-31 at 10.15.43 AM.jpeg"
    },
    {
      name: "N.Mohan Rao ( B.A )",
      role: "Admin Cum Counsellor",
      description: "Effective Communication Skills - Organizational & Multitasking Skills - Empathy and Problem-Solving",
      image: "images/177785b3-fabf-4f4a-8b03-8901ae3f7e33.jpeg"
    },
    {
      name: "A.Suresh( B.Tech )",
      role: "Web Developer",
      description: "Design and Development - Front-End and Back-End Expertise - Continuous Learning",
      image: "images/4a21f102-8247-4628-b42c-839c6ea283c1.jpeg"
    },
  ];

  return (
    <>
      <div className="about-us-section">
        <h1 className="about-us-title">About Us</h1>
        <div className="about-us-container">
          <div className="about-image-wrapper">
            <img src="images/IMG_20231018_131144.jpg" alt="About Us" className="about-image" />
          </div>
          <div className="about-content">
            <h2 className="about-heading">Our Team</h2>
            <p className="about-paragraph">
              At Nirmaan, we are a committed team driven by the vision of empowering unemployed individuals to achieve their career aspirations. Our organization specializes in high-quality, job-oriented training that covers essential workforce skills.
            </p>
            <p className="about-paragraph">
              From technical courses like MS Office, HTML & CSS, and programming to foundational skills such as typing and communicative English, we provide comprehensive training designed to enhance proficiency and build confidence.
            </p>
            <a href="/About" className="about-button">Learn More About Us</a>
          </div>
        </div>
      </div>

      <div className='about-cards-container'>
        {/* Team Cards */}
        {teamMembers.map((member, index) => (
          <div key={index} className='about-card'>
            <img src={member.image} alt='About Team Member' className='about-card-image' />
            <h2 className='about-card-name'>{member.name}</h2>
            <h3 className='about-card-role'>{member.role}</h3>
            <p className='about-card-description'>{member.description}</p>
            <button
              className='about-card-button'
              onClick={() => handleViewMoreClick(member)}
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {/* Popup for displaying selected member details */}
      {selectedMember && (
        <div className='popup-overlay'>
          <div className='popup-card'>
            <span className='popup-close-icon' onClick={handleClosePopup}>&times;</span>
            <img src={selectedMember.image} alt={selectedMember.name} className='popup-image' />
            <h2 className='popup-name'>{selectedMember.name}</h2>
            <h3 className='popup-role'>{selectedMember.role}</h3>
            <p className='popup-description'>{selectedMember.description}</p>
          </div>
        </div>
      )}

      <div className='carousel-container'>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="images/IMG_20240810_125409.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="images/IMG_20240704_112847.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-image" src="images/IMG_20240810_114913.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
<Footer />

    </>
  );
};

export default About;
