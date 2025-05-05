import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import '../styles/style.css';

function RegisterSlot() {
  const [slotInfo, setSlotInfo] = useState({
    slotNumber: '',
    city: '',
    subCity: '',
    woreda: '',
    location: ''
  });

  const handleChange = (e) => {
    setSlotInfo({ ...slotInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Slot registered successfully!");
    setSlotInfo({ slotNumber: '', city: '', subCity: '', woreda: '', location: '' });
  };

  return (
    <>
      <div className="page-wrapper">
        <Navbar />
        <div className="form-container">
          <h2>Register New Slot</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="slotNumber"
              placeholder="Slot Number"
              value={slotInfo.slotNumber}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={slotInfo.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subCity"
              placeholder="Sub-city"
              value={slotInfo.subCity}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="woreda"
              placeholder="Woreda"
              value={slotInfo.woreda}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Specific Location Name"
              value={slotInfo.location}
              onChange={handleChange}
              required
            />
            <button type="submit">Register Slot</button>
          </form>
        </div>
        <main className="main-content"></main>
        <Footer />
      </div>
    </>
  );
}

export default RegisterSlot;