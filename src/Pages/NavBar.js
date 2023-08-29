import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

const NavBar = ({ handleClick }) => {
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

          <button type="button" onClick={handleClick}>Signup</button>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default NavBar;
