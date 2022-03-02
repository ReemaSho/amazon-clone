import React from "react";
import "./sass/Header/Header.scss";
import Logo from "../components/Header/Logo";
import Searchbox from "../components/Header/Searchbox";
import Links from "../components/Header/Links";
import { useContext } from "react";
import { SearchProductsContext } from "../context/SearchProductsContext";
const Header = () => {
  const { getSearchValue, setHandleSearch, searchValue, onSubmit } = useContext(
    SearchProductsContext
  );
  return (
    <div className="header">
      <nav className="header__container">
        <Logo />
        <Searchbox
          value={searchValue}
          onChange={getSearchValue}
          onClick={onSubmit}
          screenSize="display-desktop"
        />
        <Links desktopSize="display-desktop" mobileSize="display-mobile" />
      </nav>
      <Searchbox
        value={searchValue}
        onChange={getSearchValue}
        onClick={setHandleSearch}
        screenSize="display-mobile"
      />
    </div>
  );
};

export default Header;
