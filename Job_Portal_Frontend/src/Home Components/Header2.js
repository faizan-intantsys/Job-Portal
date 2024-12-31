import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation
import './Header.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate();

  // Helper function to determine active link
  const isActive = (path) => location.pathname === path;

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove auth token from local storage
        navigate("/login"); // Redirect to login page
      };

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
              to="/adminlogin"
              className={`nav-link ${isActive('/adminlogin') ? 'active' : ''}`}
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
          <Link to="/login" className="btn join-now" onClick={handleLogout}>Logout</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
