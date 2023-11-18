import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <nav>
      <div className="navigation container">
        <div className="logo_container">
          <img src={logo} alt="logo" />
        </div>
        <div className="bar_icon">
          <i className="fas fa-bars"></i>
          <Link to="/menu">Our Menu</Link>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
