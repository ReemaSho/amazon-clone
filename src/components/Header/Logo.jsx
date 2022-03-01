import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/amazon-logo.png";
const Logo = () => {
  return (
    <Link className="header__logoLink" to="/">
      <img className="header__logo" src={logo} alt="amazon-logo" />
    </Link>
  );
};

export default Logo;
