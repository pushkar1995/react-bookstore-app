import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const Navigation = () => (
  <div className="navbar-container">
    <nav className="navigationBar">
      <div className="nav-bar-right">
        <Link to="/" className="logo">
          Bookstore CMS
        </Link>
        <ul id="nav-item">
          <li className="books-nav-bar">
            <Link to="/bookPage">BOOKS</Link>
          </li>
          {/* <li>|</li> */}
          <li className="cat-nav-bar">
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <div className="icon">
        <img
          src="https://img.icons8.com/ios-filled/0290ff/30/user.png"
          alt="user"
        />
      </div>
    </nav>
    <div className="navBar-Bottom" />
  </div>
);

export default Navigation;
