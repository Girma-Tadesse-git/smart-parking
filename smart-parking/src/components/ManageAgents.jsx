import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';
import '../styles/style.css';

function ManageAgents() {
  const [agents, setAgents] = useState([
    { name: 'John Doe', email: 'john@smartparking.com' },
    { name: 'Jane Smith', email: 'jane@smartparking.com' },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({ name: '', email: '' });

  const handleDelete = (index) => {
    const updated = agents.filter((_, i) => i !== index);
    setAgents(updated);
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditData(agents[index]);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    const updated = [...agents];
    updated[editingIndex] = editData;
    setAgents(updated);
    setEditingIndex(null);
  };

  return (
    <>
        <div className="page-wrapper">
      <AdminNavbar />
      <div className="list-container">
        <h2>Manage Agents</h2>
        <table>
          <thead>
            <tr>
              <th>Agent Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr key={index}>
                {editingIndex === index ? (
                  <>
                    <td><input name="name" value={editData.name} onChange={handleChange} /></td>
                    <td><input name="email" value={editData.email} onChange={handleChange} /></td>
                    <td>
                      <button onClick={saveEdit}>Save</button>
                      <button onClick={() => setEditingIndex(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{agent.name}</td>
                    <td>{agent.email}</td>
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
      <Footer></Footer></div>
    </>
  );
}

export default ManageAgents;
