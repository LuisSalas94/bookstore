import React from 'react';
// react router
import { NavLink } from 'react-router-dom';
import user from '../image/user.png';

const Header = () => (
  <header className="navbar">
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <NavLink to="/">BOOKS</NavLink>
      </li>
      <li>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </li>
    </ul>
    <img src={user} alt="user" className="user" />
  </header>
);

export default Header;
