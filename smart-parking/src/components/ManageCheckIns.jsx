import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import '../styles/style.css';

function ManageCheckIns() {
  const [slots, setSlots] = useState([
    { slotNumber: "01", location: "Millennium Hall", isOccupied: false },
    { slotNumber: "02", location: "City Center", isOccupied: true },
  ]);

  const checkIn = (index) => {
    const updated = [...slots];
    updated[index].isOccupied = true;
    setSlots(updated);
  };

  const checkOut = (index) => {
    const updated = [...slots];
    updated[index].isOccupied = false;
    setSlots(updated);
  };

  return (
    <>
    <div className="page-wrapper">
      <Navbar />
      <div className="list-container">
        <h2>Manage Check-ins</h2>
        <table>
          <thead>
            <tr>
              <th>Slot No.</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot, index) => (
              <tr key={index}>
                <td>{slot.slotNumber}</td>
                <td>{slot.location}</td>
                <td>{slot.isOccupied ? "Occupied" : "Free"}</td>
                <td>
                  {slot.isOccupied ? (
                    <button onClick={() => checkOut(index)}>Check-Out</button>
                  ) : (
                    <button onClick={() => checkIn(index)}>Check-In</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <main className="main-content"></main>
      <Footer></Footer>

      </div>
    </>
  );
}

export default ManageCheckIns;
