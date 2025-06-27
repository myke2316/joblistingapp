import React from 'react';
import './Navbar.css';
import { FaBell, FaUserCircle } from 'react-icons/fa'; // Import icons

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ProjectJLA</div>

      <div className="nav-links">
        <button>Find Jobs</button>
        <button>Find Talent</button>
        <button>Upload Job</button>
        <button>About Us</button>
      </div>

      <div className="icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
