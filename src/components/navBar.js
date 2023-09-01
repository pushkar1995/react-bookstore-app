import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigationBar">
    <div>
      <Link to="/">
        <h1 className="logo">Bookstore CMS</h1>
      </Link>
    </div>
    <ul id="nav-item">
      <li>
        <Link to="/bookPage">BOOKS</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
