import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './Header.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  const location = useLocation(); // Get the current location

  // Helper function to determine active link
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <Link to="/">
            <img
              src="./images/logo.webp"
              alt="Portal Logo"
              className="logo"
            />
          </Link>
          <h2>Job Hunt</h2>
          <nav className="nav">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              HOME
            </Link>
            <Link
              to="/dashboard"
              className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
            >
              DASHBOARD
            </Link>
            <Link
              to="/admindashboard"
              className={`nav-link ${isActive('/admindashboard') ? 'active' : ''}`}
            >
              ADMIN PANEL
            </Link>
          </nav>
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          <div className="find-store">
            <FaMapMarkerAlt />
            <span>Headquarter</span>
          </div>
          <Link to="/login" className="btn sign-in">Sign in</Link>
          <Link to="/register" className="btn join-now">Join now</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
