import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png'; 
import Navbar from './Navbar';
import '../styles/style.css';

function AgentHome() {
  return (
    <div className="page-wrapper">

      <header>
      <Link to="" className="logo-container">
                  <img src={logo} alt="Smart Parking Logo" className="logo" />
                  <span className="logo-text">Smart Parking</span>
                </Link>
        <h1 className='header-text'>Agent Panel</h1>
        
        {/* <p className="welcome-text">Manage your assigned tasks below</p> */}
      </header>

      <main className="main-content dashboard-main">
      <h1 className="welcome-text">Welcome Agent</h1>
        <div className="dashboard-cards glass-grid">
          <Link to="/agent/register-slot" className="dashboard-card glass-card">
            🆕 Register Slots
          </Link>
          <Link to="/agent/manage-checkins" className="dashboard-card glass-card">
            ✅ Manage Check-ins
          </Link>
          <Link to="/agent/slot-status" className="dashboard-card glass-card">
            📊 Slot Status
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AgentHome;
