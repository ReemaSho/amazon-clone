import React from "react";

import "./css/Header.css";

import Logo from "../components/Header/Logo";
import Searchbox from "../components/Header/Searchbox";
import Links from "../components/Header/Links";

const Header = () => {
  return (
    <nav className="header__container">
      <Logo />
      <Searchbox />
      <Links />
    </nav>
  );
};

export default Header;
