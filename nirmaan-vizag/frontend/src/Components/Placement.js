import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {baseUrl} from './Config'

import './Placement.css'; 
const Placement = () => {


  const [data, setData] = useState([]);

  useEffect(() => {


    axios.get(`${baseUrl}placementdetails`)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <h1 className='placement-top-heading'>PLACED STUDENTS</h1>
    
    <div className="placement-container">
      {data.map((element, id) => (
        <div className="placement-card" key={id}>
          <img src={`${baseUrl}`+ element.image} alt={`${element.fullname}'s profile`} className="placement-photo" />
          <h2 className="placement-name">{element.fullName}</h2>
          <p className="placement-company">Company: {element.companyName}</p>
          <p className="placement-salary">Salary: {element.salary}</p>
          <p className="placement-salary">Batch: {element.batch}</p>

        </div>
      ))}
    </div>
    </>

  );
};


export default Placement;
