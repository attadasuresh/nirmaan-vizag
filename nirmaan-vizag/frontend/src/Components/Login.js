import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

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
    
    axios.post('http://localhost:3001/logindata', data)
      .then((res) => {
        console.log('Response from server:', res.data); // Debugging to check response

        if (res.data.message === "Login successfully") {
          setError('');
          navigate('/Dashboard');
        } else {
          setError("Incorrect Username or Password");
        }
      })
      .catch((err) => {
        console.error('Error submitting data:', err.message);
        setError("An error occurred, please try again.");
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
