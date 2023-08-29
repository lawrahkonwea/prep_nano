import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

const NavBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <nav className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
      <button type="button" className="toggle-button" onClick={toggleSidebar}>
        <Sidebar />
      </button>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" onClick={toggleSidebar} exact>
            Homepage
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" onClick={toggleSidebar}>
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
