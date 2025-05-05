import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import logo from '../assets/logo1.png'; // adjust path if needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="" className="logo-container">
          <img src={logo} alt="Smart Parking Logo" className="logo" />
          <span className="logo-text">Smart Parking</span>
        </Link>

        <Link to="/agent" className="nav-link">Agent Panel</Link>
        <Link to="/" className="nav-link">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
