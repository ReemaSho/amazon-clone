import React from "react";
import "./footer.scss";
import logo from "../assets/amazon-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img className="header__logoImage" src={logo} alt="amazon-logo" />
      </div>
      <div className="footer__links">
        <ul>
          <li>Careers</li>
          <li>Blogs</li>
          <li>About Amazon</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
        </ul>
        <ul>
          <li> Sell products</li>
          <li>Sell on Amazon Business</li>
          <li>Become an Affiliate</li>
          <li>Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amazon Hub</li>
          <li>Become an Affiliate</li>
          <li>See More Make Money with Us</li>
        </ul>
        <ul>
          <li> Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
        </ul>
        <ul>
          <li> Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li>Amazon Assistant</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
