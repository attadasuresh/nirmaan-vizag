import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import './Admin.css';

const Admin = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [startDate, setStartDate] = useState(''); // Start date for range
  const [endDate, setEndDate] = useState(''); // End date for range

  useEffect(() => {
    axios.get('http://localhost:3001/formdataget')
      .then((response) => setVolunteers(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDeleteClick = (volunteerId) => {
    setSelectedVolunteer(volunteerId);
    setShowPopup(true);
  };

  const handleDeleteConfirm = () => {
    axios.delete(`http://localhost:3001/formdatadelete/${selectedVolunteer}`)
      .then(() => {
        setVolunteers(volunteers.filter(vol => vol.id !== selectedVolunteer));
        setShowPopup(false);
        setSelectedVolunteer(null);
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  const handleCancel = () => {
    setShowPopup(false);
    setSelectedVolunteer(null);
  };

  const handleDownload = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    const filteredData = volunteers.filter(volunteer => {
      const dob = new Date(volunteer.dateofbirth);
      return dob >= new Date(startDate) && dob <= new Date(endDate);
    });

    if (filteredData.length === 0) {
      alert("No data found within the selected date range.");
      return;
    }

    const csv = filteredData.map(row => ({
      'Full Name': row.fullname,
      Email: row.email,
      Mobile: row.mobile,
      Qualification: row.qualification,
      College: row.college,
      'Date of Birth': row.dateofbirth,
      Address: row.address,
    }));

    const csvContent = [
      Object.keys(csv[0]).join(','),
      ...csv.map(row => Object.values(row).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', `data_${startDate}_to_${endDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredVolunteers = volunteers.filter(register =>
    register.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    register.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    register.mobile.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className='admin-top-heading'>Register Users Data</h1>
      
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

      <div className="download-container">
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          className="date-selector" 
          placeholder="Start Date"
        />
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          className="date-selector" 
          placeholder="End Date"
        />
        <button onClick={handleDownload} className="download-button">
          Download Data by Date Range
        </button>
      </div>

      <table className='userdata-tables'>
        <thead>
          <tr>
            <th className='admin-heading'>Full Name</th>
            <th className='admin-heading'>Email</th>
            <th className='admin-heading'>Mobile</th>
            <th className='admin-heading'>Qualification</th>
            <th className='admin-heading'>College</th>
            <th className='admin-heading'>Date of Submit</th>
            <th className='admin-heading'>Address</th>
            <th className='admin-heading'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredVolunteers.map((register) => (
            <tr key={register.id}>
              <td className='userdata-paragraphs'>{register.fullname}</td>
              <td className='userdata-paragraphs'>{register.email}</td>
              <td className='userdata-paragraphs'>{register.mobile}</td>
              <td className='userdata-paragraphs'>{register.qualification}</td>
              <td className='userdata-paragraphs'>{register.college}</td>
              <td className='userdata-paragraphs'>{register.dateofbirth}</td>
              <td className='userdata-paragraphs'>{register.address}</td>
              <td>
                <button 
                  className="delete-button" 
                  onClick={() => handleDeleteClick(register.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Are you sure you want to delete this entry?</p>
            <button onClick={handleDeleteConfirm} className="confirm-button">Confirm</button>
            <button onClick={handleCancel} className="cancel-button">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
