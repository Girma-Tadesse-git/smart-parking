import React from 'react';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';
import '../styles/style.css';

function ViewReports() {
  return (
    <>
    <div className="page-wrapper">
      <AdminNavbar />
      <div className="list-container">
        <h2>View Reports</h2>
        <p>Generate and download system reports:</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button>Download Daily Report</button>
          <button>Download Weekly Report</button>
          <button>Download Monthly Report</button>
        </div>
      </div>
      <main className="main-content"></main>
      <Footer></Footer></div>
    </>
  );
}

export default ViewReports;
