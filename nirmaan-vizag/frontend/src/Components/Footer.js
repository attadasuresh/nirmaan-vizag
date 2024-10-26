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
        <img src='images/nirmaan_logo.png' alt='logo' className='home-footer-logo'/>
      </div>
      <div className='home-footer-full-container2'>
        <h1 className='home-footer-heading-all'>Contact Info</h1>
        <p>
        2-115/2 , 1st Floor ,Opp ,Thota Polamamba Temple Near BAJI JUNCTION Main Road , Gopalpatnam ,Vizag-27
        </p>
        <p className='home-footer-icon-para'> contact@nirmaan.org</p>
        <p>9908104113</p>
        </div>
        <div className='home-footer-full-container2'>
        <h1 className='home-footer-heading-all'>More Info</h1>
        <p>
        About Us
        </p>
        <p className='home-footer-icon-para'> Privacy Policy</p>
        <p>FAQ</p>
        <p>Career</p>
        </div>
        <div className='home-footer-full-container2'>
        <h1 className='home-footer-heading-all'>Follow Us</h1>
        <TiSocialLinkedinCircular className='home-footer-socialmedia-icons' />
        <TiSocialFacebookCircular className='home-footer-socialmedia-icons' />
        <TiSocialTwitterCircular className='home-footer-socialmedia-icons' />
<TiSocialInstagram className='home-footer-socialmedia-icons' />
        
        </div>
      </div>

    </Card>
   </>
  )
}

export default Footer
