import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/amazon-logo.png";
import "./logo.scss";
const Logo = ({ emptySearchStates }) => {
  return (
    <Link className="header__logoLink" to="/" onClick={emptySearchStates}>
      <img className="header__logo" src={logo} alt="amazon-logo" />
    </Link>
  );
};

export default Logo;
