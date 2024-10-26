import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='navbar-full-container'>
        <div>
          <Link className='navbar-home1' to="/home">
            <img src='./images/nirmaan_logo.png' alt='logo' className='navbar-image-logo' />
          </Link>
        </div>
        <button className='hamburger' onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-headings-container ${isOpen ? "show" : ""}`}>
          <Link className='navbar-home' to="/about">About Us</Link>
          <Link className='navbar-home' to="/Cource">Courses</Link>
          <Link className='navbar-home' to="/Contact">Contact</Link>
          <Link className='navbar-home' to="/details">Placement</Link>
          <Link to="/Register" className='navbar-button1 navbar-home'>Register Now</Link>
          <Link to="/Admin" className='navbar-button1 navbar-home'>Admin</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;
