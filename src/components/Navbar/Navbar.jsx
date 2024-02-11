import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <nav>
      <div className="navigation container">
        <Link to={"/"} className="logo_container">
          <img src={logo} alt="logo" />
        </Link>
        <div className="bar_icon">
          <Link to="/menu" className='link'>Our Menu</Link>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
