import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer_container container">
        <div className="footer_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="link_lists">
          <h3>Main Links</h3>
          <ul>
            <li>Order Tracking</li>
            <li>New Order</li>
            <li>Contact Us</li>
            <li>News & Blogs</li>
          </ul>
        </div>
        <div className="link_lists">
          <h3>Support</h3>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditons</li>
          </ul>
        </div>
        <div className="news_letter">
          <h3>Support</h3>
          <input type="email" placeholder="Enter your Email..." />
          <h3>Follow Us</h3>
          <div className="icon_container">
            <div className="icon">
              <i className="fa fa-facebook"></i>
            </div>
            <div className="icon">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div className="icon">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div className="icon">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
