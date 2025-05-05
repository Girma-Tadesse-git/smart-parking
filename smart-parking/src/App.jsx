import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import AgentHome from './components/AgentPanel';
import RegisterSlot from './components/RegisterSlot';
import ManageCheckIns from './components/ManageCheckIns';
import SlotStatus from './components/SlotStatus';
import ViewSlots from './components/ViewSlots';
import ManageAgents from './components/ManageAgents';
import CarRegistrations from './components/CarRegistrations';
import ViewReports from './components/ViewReports';
import './styles/style.css';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/Home';


function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
  }, [dark]);

  return (
    <Router>
      <div className={`page-wrapper ${dark ? 'dark' : 'light'}`}>
        <button
          className="dark-toggle-btn"
          onClick={() => setDark(!dark)}
          style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}
        >
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/agent" element={<AgentHome />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/agent/register-slot" element={<RegisterSlot />} />
          <Route path="/agent/manage-checkins" element={<ManageCheckIns />} />
          <Route path="/agent/slot-status" element={<SlotStatus />} />
          <Route path="/admin/view-slots" element={<ViewSlots />} />
          <Route path="/admin/manage-agents" element={<ManageAgents />} />
          <Route path="/admin/car-registrations" element={<CarRegistrations />} />
          <Route path="/admin/view-reports" element={<ViewReports />} />
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
