import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/style.css';
import logo1 from '../assets/logo1.png';

function AdminNavbar() {
  const location = useLocation();
  const isOnDashboard = location.pathname === '/admin';

  return (
    <nav className="navbar">
      <div className="nav-container">
         <Link to="/" className="logo-container">
                  <img src={logo1} alt="Smart Parking Logo" className="logo" />
                  <span className="logo-text">Smart Parking</span>
                </Link>
        {/* Show "Dashboard" link if NOT already on dashboard */}
        {!isOnDashboard && (
          <Link to="/admin" className="nav-link">Dashboard</Link>
        )}

        {/* Only show "Logout" if NOT on dashboard */}
        {!isOnDashboard && (
          <Link to="/" className="nav-link">Logout</Link>
        )}
      </div>
    </nav>
  );
}

export default AdminNavbar;
