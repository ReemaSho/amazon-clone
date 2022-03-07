import React from "react";
import "./sass/footer.scss";
import logo from "../assets/amazon-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img className="header__logoImage" src={logo} alt="amazon-logo" />
      </div>
      <div className="footer__links">
        <ul>
          <li>ddddddd</li>
          <li>ddddddd</li>
          <li>ddddddd</li>
          <li>ddddddd</li>
          <li>ddddddd</li>
        </ul>
        <ul>
          <li>vvvvvvv</li>
          <li>vvvvvvv</li>
          <li>vvvvvvv</li>
          <li>vvvvvvv</li>
          <li>vvvvvvv</li>
          <li>vvvvvvv</li>
          <li>vvvvvvv</li>
          <li>vvvvvvv</li>
        </ul>
        <ul>
          <li>kkkkkk</li>
          <li>kkkkkk</li>
          <li>kkkkkk</li>
          <li>kkkkkk</li>
          <li>kkkkkk</li>
          <li>kkkkkk</li>
          <li>kkkkkk</li>
          <li>kkkkkk</li>
        </ul>
        <ul>
          <li>ggggggggg</li>
          <li>ggggggggg</li>
          <li>ggggggggg</li>
          <li>ggggggggg</li>
          <li>ggggggggg</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
