import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';
import logo from '../assets/logo1.png'; 
import { Link } from 'react-router-dom';
import '../styles/style.css';

function AdminDashboard() {
  return (
    <div className="page-wrapper dark-theme">
      <header>
      <Link to="" className="logo-container">
                <img src={logo} alt="Smart Parking Logo" className="logo" />
                <span className="logo-text">Smart Parking</span>
              </Link>
        <h1 className='header-text'>Admin Dashboard</h1>

      </header>

      <main className="main-content dashboard-main">
        <h1 className="welcome-text">Welcome Admin</h1>

        <div className="dashboard-cards glass-grid">
          <Link to="/admin/view-slots" className="dashboard-card glass-card">
            <span>🅿️ View Slots</span>
          </Link>
          <Link to="/admin/manage-agents" className="dashboard-card glass-card">
            <span>👨‍💼 Manage Agents</span>
          </Link>
          <Link to="/admin/car-registrations" className="dashboard-card glass-card">
            <span>🚗 Car Registrations</span>
          </Link>
          <Link to="/admin/view-reports" className="dashboard-card glass-card">
            <span>📊 View Reports</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AdminDashboard;
