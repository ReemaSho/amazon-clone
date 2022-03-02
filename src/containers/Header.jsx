import React from "react";
import "./sass/Header/Header.scss";
import Logo from "../components/Header/Logo";
import Searchbox from "../components/Header/Searchbox";
import Links from "../components/Header/Links";
import { useContext } from "react";
import { SearchProductsContext } from "../context/SearchProductsContext";
const Header = () => {
  const { getSearchValue, setHandleSearch } = useContext(SearchProductsContext);
  // console.log(getSearchValue);
  return (
    <div className="header">
      <nav className="header__container">
        <Logo />
        <Searchbox
          onChange={getSearchValue}
          onClick={setHandleSearch}
          screenSize="display-desktop"
        />
        <Links desktopSize="display-desktop" mobileSize="display-mobile" />
      </nav>
      <Searchbox
        onChange={getSearchValue}
        onClick={setHandleSearch}
        screenSize="display-mobile"
      />
    </div>
  );
};

export default Header;
