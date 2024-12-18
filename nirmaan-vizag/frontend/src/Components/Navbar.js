import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode
import Cookies from "js-cookie";

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
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
          // Token is expired
          setIsLoggedIn(false);
        } else {
          // Token is valid
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.error("Invalid token", err);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Runs once on component mount

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className='navbar-full-container'>
      <div>
        <Link className='navbar-home1' to="/home">
          <img src='images/nirmaanlogo.png' alt='logo' className='navbar-image-logo' />
        </Link>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}> {/* Centering Vizag */}
        <h1 style={{ color: '#fff', margin: 0, fontSize: '24px', fontWeight: "bold", fontFamily: "roboto" }}>
          Visakhapatnam
        </h1>
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
        {isLoggedIn ? (
          <button onClick={handleLogout} className='navbar-button1'>Logout</button>
        ) : (
          <Link to="/Login" className='navbar-button1 navbar-home'>Admin</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
