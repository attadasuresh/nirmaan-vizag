import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    qualification: '',
    college: '',
    dateofbirth: '',
    address: '',
  });

  const { fullname, email, mobile, qualification, college, dateofbirth, address } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/formdata', data)
      .then((response) => {
        console.log('Data submitted successfully:', response.data);
        alert('Data Successfully Submitted');

        setData({
          fullname: '',
          email: '',
          mobile: '',
          qualification: '',
          college: '',
          dateofbirth: '',
          address: '',
        });
      })
      .catch((error) => {
        console.error('There was an error submitting the form:', error);
      });
  };

  return (
    <div className='register-full-container1'>
      <form className='register-bookcamp-card' onSubmit={submitHandler}>
        <h1 className='register-card-bookcamp-heading'>Register Form</h1>

        <label className='register-label-card'>Full Name (required)</label>
        <input
          type='text'
          placeholder='Your Name'
          className='register-bookcamp-input-card'
          required
          name='fullname'
          value={fullname}
          onChange={handleChange}
        />

        <label className='register-label-card1'>E-mail (required)</label>
        <input
          type='email'
          placeholder='Your Email'
          className='register-bookcamp-input-card'
          required
          name='email'
          value={email}
          onChange={handleChange}
        />

        <label className='register-label-card1'>Mobile (required)</label>
        <input
          type='number'
          placeholder='Your Mobile Number'
          className='register-bookcamp-input-card'
          required
          name='mobile' 
          value={mobile}
          onChange={handleChange}
        />

        <label className='register-label-card1'>Qualification (required)</label>
        <input
          type='text'
          placeholder='Your Qualification'
          className='register-bookcamp-input-card'
          required
          name='qualification'
          value={qualification}
          onChange={handleChange}
        />

        <label className='register-label-card1'>College (required)</label>
        <input
          type='text'
          placeholder='Your College'
          className='register-bookcamp-input-card'
          required
          name='college'
          value={college}
          onChange={handleChange}
        />

        <label className='register-label-card1'>Date of Birth (required)</label>
        <input
          type='date'
          className='register-bookcamp-input-card'
          required
          name='dateofbirth'
          value={dateofbirth}
          onChange={handleChange}
        />

        <label className='register-label-card1'>Address (required)</label>
        <textarea
          id="address"
          value={address}
          name="address"
          className='register-bookcamp-input-card'
          rows="3"
          placeholder="123 Main St, City, State, ZIP"
          required
          onChange={handleChange}
        ></textarea>

        <input
          className='register-bookcamp-button'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
};

export default Register;
