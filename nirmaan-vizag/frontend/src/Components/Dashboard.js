import React, { useState } from 'react';
import './Dashboard.css';
import axios from 'axios';
import {baseUrl} from './Config'


const UserDashboard = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    salary: '',
    companyName: '',
    collage: '',
    batch: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageChange = (e) => {
    setUserData({ ...userData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const formdata = new FormData();
    formdata.append('fullName', userData.fullName);
    formdata.append('salary', userData.salary);
    formdata.append('companyName', userData.companyName);
    formdata.append('collage', userData.collage);
    formdata.append('batch', userData.batch);
    formdata.append('image', userData.image);

    axios.post(`${baseUrl}placement`, formdata)
      .then((res) => {
        alert("Data Successfully Submitted");
        console.log(res.data);
        setUserData({
          fullName: '',
          salary: '',
          companyName: '',
          collage: '',
          batch: '',  
          image: ''
        });
      })
      .catch((err) => {
        console.error("Error submitting data:", err);
        alert("An error occurred while submitting the data.");
      });
  };

  return (
    <div className="dashboard-container">
      <div className="user-data-card">
  {/* Profile Placeholder */}
  <div className="profile-placeholder">👤</div>
  
  <h2>
    <span role="img" aria-label="User Icon"></span> Users Data
  </h2>
  
  <a href='/Admin'>
        <button className="view-button">View</button></a>
</div>

      {/* Card 2: Form */}
      <div className="user-form-card">
        <h2>Update User Information</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <label>
            Image:
            <input type="file" onChange={handleImageChange}  />
          </label>
          <label>
            Full Name:
            <input 
              type="text" 
              name="fullName" 
              value={userData.fullName} 
              onChange={handleInputChange} 
              placeholder="Enter full name" 
              required
            />
          </label>
          <label>
          Salary:
            <input 
              type="text" 
              name="salary" 
              value={userData.salary} 
              onChange={handleInputChange} 
              placeholder="Enter full name" 
              required

            />
          </label>

          <label>
            Company Name:
            <input 
              type="text" 
              name="companyName" 
              value={userData.companyName} 
              onChange={handleInputChange} 
              placeholder="Enter company name" 
              required

            />
          </label>
          <label>
          collage:
            <input 
              type="text" 
              name="collage" 
              value={userData.collage} 
              onChange={handleInputChange} 
              placeholder="Enter company name" 
              required

            />
          </label>
          <label>
          Batch:
            <input 
              type="text" 
              name="batch" 
              value={userData.batch} 
              onChange={handleInputChange} 
              placeholder="Enter ID" 
              required

            />
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserDashboard;
