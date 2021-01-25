import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <Link to="/" class="brand-logo">NoteBook</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><NavLink to="/favorite">Favorite</NavLink></li>
        </ul>
      </div>
    </nav>      
  );
};

export default Navbar;