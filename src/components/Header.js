import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
        <NavLink to="/home">
            <span className='logo-image'><img src="./pngwing.png" alt="/" width="70" height="70"/></span>
          </NavLink>  
            </div>
        <nav className="navbar">
          <ul>
          <li><NavLink to="/home" activeClassName="active" exact className="active" >Home</NavLink></li>
            <li className="dropdown">
              <NavLink to="/gallery">Pet Types</NavLink>
              <div className="dropdown-content">
                <NavLink to="/dogs">Dogs</NavLink>
                <NavLink to="/cats">Cats</NavLink>
                <NavLink to="/birds">Birds</NavLink>
              </div>
            </li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </nav>  
      </div>
    </header>
  );
};

export default Header;

