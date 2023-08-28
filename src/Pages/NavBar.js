import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
       <ul>
          <li>
             <NavLink to="/">Homepage</NavLink>
          </li>
          <li>
             <NavLink to="/Signup">Signup</NavLink>
          </li>
       </ul>
    </nav>
 );
}

export default NavBar