import React from 'react';
import './About.css';
import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  return (
    <>
      <div className="about-us-section">
        <h1 className="about-us-title">About Us</h1>
        <div className="about-us-container">
          <div className="about-image-wrapper">
            <img src="images/IMG_20231018_131144.jpg" alt="About Us" className="about-image"/>
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
        {[
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
            image: "images/4010202_c8e3_3.jpg"
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
            image: "images/4010202_c8e3_3.jpg"
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
            image: "images/79c0fb85-7cd9-4ec5-a182-3edfd2e81455.jpeg"
          },
          {
            name: "N.Mohan Rao ( B.Tech )",
            role: "Admin Cum Counsellor",
            description: "Effective Communication Skills - Organizational & Multitasking Skills - Empathy and Problem-Solving",
            image: "images/4010202_c8e3_3.jpg"
          },
        ].map((member, index) => (
          <div key={index} className='about-card'>
            <img src={member.image} alt='About Team Member' className='about-card-image' />
            <h2 className='about-card-name'>{member.name}</h2>
            <h3 className='about-card-role'>{member.role}</h3>
            <p className='about-card-description'>{member.description}</p>
            <button className='about-card-button'>View More</button>
          </div>
        ))}
      </div>

      <div className='carousel-container'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="images/IMG_20240810_125409.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="images/IMG_20240704_112847.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="images/IMG_20240810_114913.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default About;
