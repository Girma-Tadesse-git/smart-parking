import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import '../styles/style.css';

function SlotStatus() {
  const [slots] = useState([
    {
      slotNumber: "01",
      city: "Addis Ababa",
      subCity: "Bole",
      woreda: "03",
      location: "Millennium Hall",
      isOccupied: false
    },
    {
      slotNumber: "02",
      city: "Addis Ababa",
      subCity: "Kirkos",
      woreda: "08",
      location: "City Center",
      isOccupied: true
    },
  ]);

  return (
    <>
      <div className="page-wrapper">
        <Navbar />
        <div className="list-container">
          <h2>Slot Status</h2>
          <table>
            <thead>
              <tr>
                <th>Slot No.</th>
                <th>City</th>
                <th>Sub-city</th>
                <th>Woreda</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {slots.map((slot, index) => (
                <tr key={index}>
                  <td>{slot.slotNumber}</td>
                  <td>{slot.city}</td>
                  <td>{slot.subCity}</td>
                  <td>{slot.woreda}</td>
                  <td>{slot.location}</td>
                  <td>{slot.isOccupied ? "Occupied" : "Free"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <main className="main-content"></main>
        <Footer />
      </div>
    </>
  );
}

export default SlotStatus;
