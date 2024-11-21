import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from './Config';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AllPlacementData.css'; // New CSS for Allplacementdata

const Allplacementdata = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedData, setSelectedData] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editData, setEditData] = useState({});
  
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    axios.get(`${baseUrl}placementdetails`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
          setFilteredData(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        item.fullName.toLowerCase().includes(term.toLowerCase()) ||
        item.companyName.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`${baseUrl}placementdetails/${id}`)
      .then((response) => {
        setData(data.filter(item => item.id !== id));
        setFilteredData(filteredData.filter(item => item.id !== id));
        setShowDeletePopup(false);
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  const handleEdit = () => {
    axios.put(`${baseUrl}placementdetails/${editData.id}`, editData)
      .then((response) => {
        const updatedData = data.map(item =>
          item.id === editData.id ? editData : item
        );
        setData(updatedData);
        setFilteredData(updatedData);
        setShowEditPopup(false);
      })
      .catch((error) => console.error('Error updating data:', error));
  };

  const openDeletePopup = (id) => {
    setSelectedData(id);
    setShowDeletePopup(true);
  };

  const openEditPopup = (data) => {
    setEditData(data);
    setShowEditPopup(true);
  };

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Go back to previous page
        className="back-button"
      >
        &#8592; Back
      </button>


      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by Name or Company"
          className="search-input"
        />
      </div>

      <div className="placement-container">
        {filteredData.length > 0 ? (
          filteredData.map((element) => (
            <div className="placement-card" key={element.id}>
              <img src={`${baseUrl}${element.image}`} alt={element.fullName} className="placement-photo" />
              <h2>{element.fullName}</h2>
              <p>Company: {element.companyName}</p>
              <p>Salary: {element.salary}</p>
              <p>College: {element.collage}</p>
              <p>Batch: {element.batch}</p>
              <button onClick={() => openEditPopup(element)} className='allplacement-buttons'>Edit</button>
              <button onClick={() => openDeletePopup(element.id)} className='allplacement-buttons'>Delete</button>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to delete this entry?</p>
            <button onClick={() => handleDelete(selectedData)}>Yes</button>
            <button onClick={() => setShowDeletePopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Edit Popup */}
      {showEditPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Edit Placement Details</h3>
            <input
              type="text"
              value={editData.fullName}
              onChange={(e) => setEditData({ ...editData, fullName: e.target.value })}
              placeholder="Full Name"
            />
            <input
              type="text"
              value={editData.companyName}
              onChange={(e) => setEditData({ ...editData, companyName: e.target.value })}
              placeholder="Company Name"
            />
            <input
              type="text"
              value={editData.salary}
              onChange={(e) => setEditData({ ...editData, salary: e.target.value })}
              placeholder="Salary"
            />
            <input
              type="text"
              value={editData.collage}
              onChange={(e) => setEditData({ ...editData, collage: e.target.value })}
              placeholder="College"
            />
            <input
              type="text"
              value={editData.batch}
              onChange={(e) => setEditData({ ...editData, batch: e.target.value })}
              placeholder="Batch"
            />
            <button onClick={handleEdit}>Save</button>
            <button onClick={() => setShowEditPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Allplacementdata;
