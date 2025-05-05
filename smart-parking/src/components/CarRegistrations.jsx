import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';
import '../styles/style.css';

function CarRegistrations() {
  const [cars, setCars] = useState([
    { plate: 'ABC-1234', owner: 'Michael Scott' },
    { plate: 'XYZ-5678', owner: 'Pam Beesly' },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editCar, setEditCar] = useState({ plate: '', owner: '' });
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (index) => {
    const updated = cars.filter((_, i) => i !== index);
    setCars(updated);
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditCar(cars[index]);
  };

  const handleChange = (e) => {
    setEditCar({ ...editCar, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    const updated = [...cars];
    updated[editingIndex] = editCar;
    setCars(updated);
    setEditingIndex(null);
  };

  // Filtered cars based on search query
  const filteredCars = cars.filter(car =>
    car.plate.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="page-wrapper">
        <AdminNavbar />
        <div className="list-container">
          <h2>Car Registrations</h2>
          <input
            type="text"
            placeholder="Search by plate or owner"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Car Plate</th>
                <th>Owner Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.map((car, index) => (
                <tr key={index}>
                  {editingIndex === index ? (
                    <>
                      <td><input name="plate" value={editCar.plate} onChange={handleChange} /></td>
                      <td><input name="owner" value={editCar.owner} onChange={handleChange} /></td>
                      <td>
                        <button onClick={saveEdit}>Save</button>
                        <button onClick={() => setEditingIndex(null)}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{car.plate}</td>
                      <td>{car.owner}</td>
                      <td>
                        <button onClick={() => startEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                      </td>
                    </>
                  )}
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

export default CarRegistrations;