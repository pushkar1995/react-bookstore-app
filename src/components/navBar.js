import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigationBar">
    <div>
      <h1 className="logo">Bookstore CMS</h1>
    </div>
    <ul id="nav-item">
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
