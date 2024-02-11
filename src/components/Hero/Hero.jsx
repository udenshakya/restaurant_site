import React from 'react';
import './Hero.css';
import hero_image from '../../assets/images/hero_image.png';
import grid_image1 from '../../assets/images/grid_image1.png';
import grid_image2 from '../../assets/images/grid_image2.png';
import grid_image3 from '../../assets/images/grid_image3.png';
import grid_image4 from '../../assets/images/grid_image4.png';
import grid_image5 from '../../assets/images/grid_image5.png';
import grid_image6 from '../../assets/images/grid_image6.png';
import grid_image7 from '../../assets/images/grid_image7.png';

import discount from '../../assets/icons/discount.png';
import delivery from '../../assets/icons/delivery.png';
import fresh from '../../assets/icons/fresh.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero_image">
          <img src={hero_image} alt="hero image" />
        </div>
        <div className="hero_content">
          <div className="tag">50% Off on All Products</div>
          <h1>Enjoy Your Delicious Food</h1>
          <p>
          We believe that every meal should be an experience—a symphony of flavors, textures, and memories. Nestled in the heart of downtown, our charming eatery invites you to step inside and savor life’s simple pleasures.
          </p>
          <Link to='/menu' className="explore_btn">Explore Now</Link>
        </div>
      </div>
      <section className="features">
        <div className="feature">
          <img src={discount} alt="discount" />
          <div className="feature_content">
            <h3>Discount Voucher</h3>
            Get exciting discount vocher with every purchases .
          </div>
        </div>
        <div className="feature">
          <img src={fresh} alt="fresh" />
          <div className="feature_content">
            <h3>Fresh Healthy Food</h3>
            Every ingredients are fresh and healthy to offer best quality.
          </div>
        </div>
        <div className="feature">
          <img src={delivery} alt="delivery" />
          <div className="feature_content">
            <h3>Fast Home Delivery</h3>
            We deliver fresh, delicious food right at your at your doors.
          </div>
        </div>
      </section>
      <div className="divider" ></div>
      <div className="menu" id="menu">
        <Link to={"/menu"} className="tag" >Our Menu</Link>
        <h2 >Explore Our Menu</h2>

        <div className="grid">
          <div className="item1">
            <img
              className="grid-image"
              src={grid_image1}
              alt="image 1"
            />
          </div>
          <div className="item2">
            <img
              className="grid-image"
              src={grid_image2}
              alt="image 2"
            />
          </div>
          <div className="item3">
            <img
              className="grid-image"
              src={grid_image3}
              alt="image 3"
            />
          </div>
          <div className="item4">
            <img
              className="grid-image"
              src={grid_image4}
              alt="image 4"
            />
          </div>
          <div className="item5">
            <img
              className="grid-image"
              src={grid_image5}
              alt="image 5"
            />
          </div>
          <div className="item6">
            <img
              className="grid-image"
              src={grid_image6}
              alt="image 6"
            />
          </div>
          <div className="item7">
            <img
              className="grid-image"
              src={grid_image7}
              alt="image 7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
