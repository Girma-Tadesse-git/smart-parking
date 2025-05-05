import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/logo1.png';

function Header() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container" onClick={() => navigate('/')}>
          <img src={Logo} alt="cps" />
          <span className="brand-name">Smart Parking</span>
        </div>
        <nav className="nav-links">
          <button onClick={() => navigate('/')} className="nav-btn">Home</button>
          <button onClick={() => navigate('/about')} className="nav-btn">About</button>
          <button onClick={() => navigate('/contact')} className="nav-btn">Contact</button>
          <button onClick={handleLogout} className="nav-btn login-btn">Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
