import React from "react";
import "./sass/Header/Header.scss";
import Logo from "../components/Header/Logo";
import Searchbox from "../components/Header/Searchbox";
import Links from "../components/Header/Links";
import { useContext } from "react";
import { SearchProductsContext } from "../context/SearchProductsContext";
const Header = () => {
  const { getSearchValue, searchValue, onSubmit, handleKePress } = useContext(
    SearchProductsContext
  );
  return (
    <div className="header">
      <nav className="header__container">
        <Logo onSubmit={onSubmit} />
        <Searchbox
          value={searchValue}
          onChange={getSearchValue}
          onClick={onSubmit}
          handleKePress={handleKePress}
          screenSize="display-desktop"
        />
        <Links desktopSize="display-desktop" mobileSize="display-mobile" />
      </nav>
      <Searchbox
        value={searchValue}
        onChange={getSearchValue}
        onClick={onSubmit}
        handleKePress={handleKePress}
        screenSize="display-mobile"
      />
    </div>
  );
};

export default Header;
