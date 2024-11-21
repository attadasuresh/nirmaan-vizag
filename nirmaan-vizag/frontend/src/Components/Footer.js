import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti"
import Card from 'react-bootstrap/Card';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import './Footer.css'

const Footer = () => {
  return (
   <>
   <Card className='home-footer-full-container'>
      <Card.Header className='home-footer-contact'>Contact Us</Card.Header>
      <div className='footer-full-around-container'>

      <div>
        <img src='images/nirmaanlogo.png' alt='logo' className='home-footer-logo'/>
      </div>
      <div className='home-footer-full-container2'>
        <h1 className='home-footer-heading-all'>Contact Info</h1>
        <p>
        #58-1-278,2nd Floor, One Plus Show Room Upstairs, Beside Padmaja Suzuki & Royal Enfield , NAD Flyover, Gopalpatnam Main Road , Vizag -530009 .
        </p>
        <p className='home-footer-icon-para'> parasuramudu.doddi@nirmaan.org</p>
        <p>9908104113 , 6304159549</p>
        </div>
        <div className='home-footer-full-container2'>
        <h1 className='home-footer-heading-all'>More Info</h1>
        <a href='/About' className='footer-anchortag-about' >
        <p >
        About Us
        </p>
        </a>
        <p className='home-footer-icon-para'> Privacy Policy</p>
        <p>FAQ</p>
        <p>Career</p>
        </div>
        <div className='home-footer-full-container2'>
        <h1 className='home-footer-heading-all'>Follow Us</h1>
        <TiSocialLinkedinCircular className='home-footer-socialmedia-icons'/>
        <TiSocialFacebookCircular className='home-footer-socialmedia-icons'/>
        <TiSocialTwitterCircular className='home-footer-socialmedia-icons'/>
<TiSocialInstagram className='home-footer-socialmedia-icons' />
        </div>
      </div>
<p className='footer-copy-rights'>©  All Rights Reserved Nirmaan.</p>
    </Card>
   </>
  )
}

export default Footer
