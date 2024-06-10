import React from 'react';
import './Footer.css';
import twitter from './Images/twitter.png'
import tiktok from './Images/tiktok.png'
import youtube from './Images/Youtube.png'
import linkedin from './Images/linkedin.png'

const Footer = () => {
  return (
    <div className="parent-div">
      <div className="first-child">
        <div className="text-container">
          <p>Dash dash terraUSD neo uniswap kadena helium avalanche polymath bancor.</p>
        </div>
        <div className="help-container">
          <div className="help-text">
            <p>Looking for help?</p>
          </div>
          <div className="input-btn-container">
            <input type="email" placeholder="Enter your Email" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="second-child">
        <p className="brand-name">AI . GEN</p>
        <div className="social-icons">
          <img src ={twitter} alt="" />
          <img src={linkedin} alt="" />
          <img src={tiktok} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
