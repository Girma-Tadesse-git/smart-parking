import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      
      <div className="footer-bottom">
      <h3>Follow Us</h3>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <img src="/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <img src="/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
              <img src="/instagram.svg" alt="Instagram" />
            </a>
        <p>&copy; {new Date().getFullYear()} Smart Parking. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer; 