import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import './Admin.css';

const Admin = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/formdataget')
      .then((response) => {
        setVolunteers(response.data); 
      })
      .catch((error) => {
        console.error('There was an error fetching the data:', error);
      });
  }, []);

  const filteredVolunteers = volunteers.filter(register =>
    register.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    register.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    register.mobile.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className='admin-top-heading'>Register Users Data</h1>
      
      {/* Search Box with Icon */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Search by name, email or mobile..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="search-box"
        />
      </div>
      
      <table className='userdata-tables'>
        <thead>
          <tr>
            <th className='admin-heading'>Full Name</th>
            <th className='admin-heading'>Email</th>
            <th className='admin-heading'>Mobile</th>
            <th className='admin-heading'>Qualification</th>
            <th className='admin-heading'>College</th>
            <th className='admin-heading'>Date of Birth</th>
            <th className='admin-heading'>Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredVolunteers.map((register, index) => (
            <tr key={index}>
              <td className='userdata-paragraphs'>{register.fullname}</td>
              <td className='userdata-paragraphs'>{register.email}</td>
              <td className='userdata-paragraphs'>{register.mobile}</td>
              <td className='userdata-paragraphs'>{register.qualification}</td>
              <td className='userdata-paragraphs'>{register.college}</td>
              <td className='userdata-paragraphs'>{register.dateofbirth}</td>
              <td className='userdata-paragraphs'>{register.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
