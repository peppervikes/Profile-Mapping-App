import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header class="p-3 text-bg-dark">
    <div class="container nav">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" class="nav-link px-2 text-secondary">Profiles</Link></li>
          <li><Link to="/about-us" class="nav-link px-2 text-white">About us</Link></li>
          <li><Link to="/adminPanel" class="nav-link px-2 text-white">Admin Panel</Link></li>
        </ul>
      </div>
    </div>
  </header>
  );
}

export default Navbar;
