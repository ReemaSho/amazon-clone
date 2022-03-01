import React from "react";
import "./css/Header/Header.css";
import Logo from "../components/Header/Logo";
import Searchbox from "../components/Header/Searchbox";
import Links from "../components/Header/Links";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__container">
        <Logo />
        <Searchbox screenSize="display-desktop" />
        <Links desktopSize="display-desktop" mobileSize="display-mobile" />
      </nav>
      <Searchbox screenSize="display-mobile" />
    </div>
  );
};

export default Header;
