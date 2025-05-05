import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';
import '../styles/style.css';

function ViewSlots() {
  const slots = [
    { slotNumber: '01', location: 'Millennium Hall', status: 'Occupied' },
    { slotNumber: '02', location: 'City Center', status: 'Free' },
    { slotNumber: '03', location: 'Stadium', status: 'Occupied' },
  ];

  return (
    <>
    <div className="page-wrapper">
      <AdminNavbar />
      <div className="list-container">
        <h2>View All Parking Slots</h2>
        <table>
          <thead>
            <tr>
              <th>Slot No.</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot, index) => (
              <tr key={index}>
                <td>{slot.slotNumber}</td>
                <td>{slot.location}</td>
                <td>{slot.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <main className="main-content"></main>
      <Footer></Footer></div>
    </>
  );
}

export default ViewSlots;
