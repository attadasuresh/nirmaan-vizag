// Navbar.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'; // Corrected import statement
import Cookies from "js-cookie";

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const token = Cookies.get("jwtToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds
        if (decodedToken.exp < currentTime) {
          setIsExpired(true);
        }
      } catch (err) {
        console.error("Invalid token", err);
        setIsExpired(true);
      }
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    setIsExpired(true);
    navigate("/login");
  };

  return (
    <div className='navbar-full-container'>
      <div>
        <Link className='navbar-home1' to="/home">
          <img src='images/nirmaanlogo.png' alt='logo' className='navbar-image-logo' />
        </Link>
      </div>
      <button className='hamburger' onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-headings-container ${isOpen ? "show" : ""}`}>
        <Link className='navbar-home' to="/about">About Us</Link>
        <Link className='navbar-home' to="/Cource">Courses</Link>
        <Link className='navbar-home' to="/Contact">Contact</Link>
        <Link className='navbar-home' to="/Placement">Placement</Link>
        <Link to="/Register" className='navbar-button1 navbar-home'>Register Now</Link>
        
        {isExpired ? (
          <Link to="/Login" className='navbar-button1 navbar-home'>Admin</Link>
        ) : (
          <button onClick={handleLogout} className='navbar-button1'>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
