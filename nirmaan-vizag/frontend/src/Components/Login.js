//Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import Cookies from "js-cookie"
import {baseUrl} from './Config'


const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    axios.post(`${baseUrl}logindata`, data)
    .then((res) => {
        // Store token and navigate if login is successful
        Cookies.set("jwtToken", res.data.token, { expires: 30 });
        navigate('/Dashboard');
        setError('');
       window.location.reload()
        
    })
    .catch((err) => {

        if (err.response) {
            const status = err.response.status;

            if (status === 404) {
                setError("User not found. Please check your username.");
            } else if (status === 401) {
                setError("Incorrect password. Please try again.");
            } else if (status === 500) {
                setError("Internal server error. Please try again later.");
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        } else {
            // Handle network or other errors
            setError("Network error. Please check your connection and try again.");
        }
    });
      
    setData({
      username: '',
      password: ''
    });
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <img src="images/01-ill-02-1.webp" alt="Login Illustration" className="login-side-image" />
      </div>

      <form onSubmit={submitHandler} className="login-card">
        <h1 className="login-heading">Admin Login</h1>

        <input 
          type="text" 
          placeholder="Username" 
          className="login-input"
          onChange={handleChange}
          name="username"
          value={data.username}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="login-input"
          onChange={handleChange}
          name="password"
          value={data.password}
        />
        <input className="login-button" type="submit" value="Submit" />

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;