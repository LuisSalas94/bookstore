/* eslint-disable */
import React from 'react';
// react router
import { NavLink } from 'react-router-dom';

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
  </header>
);

export default Header;
