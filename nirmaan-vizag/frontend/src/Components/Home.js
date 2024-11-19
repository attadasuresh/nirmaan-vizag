import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";
import { FaRocket } from "react-icons/fa";



import './Home.css'
import Footer from './Footer';
const Home = () => {
    return (
        <>
<div className='home-slide-container'>
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100  home-carousel-img-desktop curvesol-image"
                src="images/Online Courses Ad Template - Made with PosterMyWall (1).jpg"
                alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 home-carousel-img-desktop curvesol-image"
                src="images/Study In Abroad Banner Post Template - Made with PosterMyWall.jpg"
                alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 home-carousel-img-desktop curvesol-image"
                src="images/World Youth Skills Day Post Template - Made with PosterMyWall.jpg"
                alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</div>
            <h1 className='home-course-heading'> WE ARE PROVIDING COURSES </h1>
            <div className='home-cards-container'>
            <div className='home-courses-full-container'>
                <img src='images/istockphoto-479157044-612x612.jpg'alt='home-courses-img' className='home-card-image'/>
            <h1 className='home-card-courses-heading'>Typing Training</h1>
            <p className='home-card-courses-paragraph'>We provide specialized typing training to help individuals improve their speed and accuracy. Our courses focus on developing efficient typing techniques through structured lessons and practice. Whether you're a beginner or looking to enhance your skills, our training adapts to your level. With personalized guidance, you'll achieve faster, more precise typing in no time.</p>
            <a href='/Cource' >
            <button className='home-card-button' > View More</button> </a>
            </div>
            <div className='home-courses-full-container'>
                <img src='images/4010202_c8e3_3.jpg'alt='home-courses-img' className='home-card-image'/>
            <h1 className='home-card-courses-heading'>Ms-Office Training</h1>
            <p className='home-card-courses-paragraph'>
            We offer comprehensive MS Office training to help users master essential tools like Word, Excel, PowerPoint, and Outlook. Our courses cover basic to advanced features, tailored to different skill levels. With hands-on exercises and expert instruction, you’ll quickly gain confidence in using these powerful applications.  MS Office training program.</p>
            <a href='/Cource' >
            <button className='home-card-button' > View More</button> </a>
            </div>
            <div className='home-courses-full-container'>
                <img src='images/357262_1d15_10.jpg'alt='home-courses-img' className='home-card-image'/>
            <h1 className='home-card-courses-heading'>Html & Css Training</h1>
            <p className='home-card-courses-paragraph'>We provide in-depth HTML and CSS training to help you build modern, responsive websites from scratch. Our courses cover essential topics like structuring web pages with HTML and designing them with CSS for a professional look. Whether you're a beginner or looking to refine your skills, Join us to unlock the fundamentals of web development!</p>
            <button className='home-card-button'> View More</button>
            </div>
            </div>
            <div className='home-cards-container1'>
            <div className='home-courses-full-container'>
                <img src='images/depositphotos_26518319-stock-photo-best-internet-concept-of-global.jpg'alt='home-courses-img' className='home-card-image'/>
            <h1 className='home-card-courses-heading'>Internet Concepts</h1>
            <p className='home-card-courses-paragraph'>We offer training on Internet Concepts to help you understand the fundamentals of online connectivity and browsing. Our course covers topics like how the internet works, web browsers, search engines, and safe online practices. It's designed to build your confidence in navigating the digital world efficiently </p>
            <a href='/Cource' >
            <button className='home-card-button' > View More</button> </a>
            </div>
            <div className='home-courses-full-container'>
                <img src='images/Communicative English_cover.png'alt='home-courses-img' className='home-card-image'/>
            <h1 className='home-card-courses-heading'>Communicative English</h1>
            <p className='home-card-courses-paragraph'>
            We provide Communicative English training to enhance your speaking, listening, and conversational skills in real-life situations. Our course focuses on improving fluency, pronunciation, and vocabulary through interactive sessions. Whether for personal growth or professional advancement, you'll gain confidence in using English effectively </p>
            <a href='/Cource' >
            <button className='home-card-button' > View More</button> </a>
            </div>
            <div className='home-courses-full-container'>
                <img src='images/MicrosoftTeams-image-352.jpg'alt='home-courses-img' className='home-card-image'/>
            <h1 className='home-card-courses-heading'>Technical Skills</h1>
            <p className='home-card-courses-paragraph'>
            We offer training in a wide range of technical skills to prepare you for today’s competitive job market. Our courses cover essential areas like programming, data analysis, and IT fundamentals, with hands-on projects to apply your knowledge. Whether you're starting out or looking to advance your career, our training equips you with the expertise needed to succeed.</p>
            <a href='/Cource' >
            <button className='home-card-button' > View More</button> </a>
            </div>
            </div>


            <div className="home-about-us-section">
      <h1 className="home-home-about">about-Us</h1>
      <div className="home-about-us-container">
        <div className="home-about-image-wrapper">
          <img src="images/IMG_20241011_111616.jpg" alt="home-about Us" className="home-about-image"/>
        </div>
        <div className="home-about-content">
          <h2 className="home-about-heading">Our Team</h2>
          <p className="home-about-paragraph">
            At Nirmaan, we are a committed team driven by the vision of empowering unemployed individuals to achieve their career aspirations. Our organization specializes in high-quality, job-oriented training that covers essential workforce skills.
          </p>
          <p className="home-about-paragraph">
            From technical courses like MS Office, HTML & CSS, and programming to foundational skills such as typing and communicative English, we provide comprehensive training designed to enhance proficiency and build confidence.
          </p>
          <a href="/About" className="home-about-button">Learn More about Us</a>
        </div>
      </div>
    </div>


<div className='full-card-vision-contaier'>
    <div className='home-icon-full-card-container'>
        <div className='home-icon-container'>
    <MdOutlineWifiTetheringErrorRounded className='home-icon-vision' />
    <h1 className='home-icon-heading-container'>Our Vision</h1>
    </div>
    <p className='home-icon-paragraph-container'>“To achieve a knowledge driven and an economically empowered society.</p>
    </div>
    <div className='home-icon-full-card-container'>
        <div className='home-icon-container'>
    <FaRocket  className='home-icon-vision' />
    <h1 className='home-icon-heading-container'>Our Mission</h1>
    </div>
    <p className='home-icon-paragraph-container'>"To promote grassroots social innovations, volunteering spirit, active citizenship and social leadership among the youth of the nation."</p>
    </div>
</div>
<div>
</div>
<h1 className='home-course-heading'> WE ARE PROVIDING TRAINING CERTIFICATES  </h1>

<div className='home-slide-container'>
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100 home-carousel-img-desktop"
                src="images/IMG_20231230_130425.jpg"
                alt="First slide"
            />

            <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           
            <img
                className="d-block w-100 home-carousel-img-desktop"
                src="images/grouppic.jpg"
                alt="Second slide"
            />
          

            <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           
            <img
                className="d-block w-100 home-carousel-img-desktop"
                src="images/IMG_20230418_104312.jpg"
                alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</div>
            <div className="home-about-us-section">
      <h1 className="home-home-about">JOB DRIVE</h1>
      <div className="home-about-us-container">
        <div className="home-about-image-wrapper">
        <div className='home-slide-container'>
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100 home-carousel-img-desktop"
                src="images/IMG_20220917_112412.jpg"
                alt="First slide"
            />

            <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 home-carousel-img-desktop"
                src="images/IMG-20231228-WA0009.jpg"
                alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 home-carousel-img-desktop"
                src="images/IMG_20231228_173735.jpg"
                alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</div>

        </div>
        <div className="home-about-content">
          <h2 className="home-about-heading">INTERVIEWS</h2>
          <p className="home-about-paragraph">
          At Nirmaan, we are dedicated to bridging the gap between education and employment. Our institute offers a comprehensive range of courses designed to equip students with the skills and knowledge they need to succeed in today's competitive job market. We understand that finding the right job can be challenging, which is why we go beyond traditional education.
Nirmaan actively organizes job drives and collaborates with various companies to ensure that our students have access to quality placements. Our expert faculty provides personalized guidance and support throughout the placement process, helping students prepare for interviews, refine their resumes, and build essential soft skills. With a strong focus on real-world applications, we aim to empower our students to achieve their career goals and excel in their chosen fields. Join us at Nirmaan and take the first step towards a brighter future!
          </p>
          <a href="/Placement" className="home-about-button"> View Our Placements</a>
        </div>
      </div>
    </div>

<Footer />
        </>
    )
}

export default Home
