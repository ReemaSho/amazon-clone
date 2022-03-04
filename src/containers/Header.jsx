import React from "react";
import "./sass/Header/Header.scss";
import Logo from "../components/Header/Logo";
import Searchbox from "../components/Header/Searchbox";
import Links from "../components/Header/Links";
import { useContext } from "react";
import { SearchProductsContext } from "../context/SearchProductsContext";
const Header = () => {
  const {
    getSearchValue,
    handleSearchEvent,
    handleKeyPress,
    emptySearchStates,
  } = useContext(SearchProductsContext);
  return (
    <div className="header">
      <nav className="header__container">
        <Logo emptySearchStates={emptySearchStates} />
        <Searchbox
          getSearchValue={getSearchValue}
          handleSearchEvent={handleSearchEvent}
          handleKeyPress={handleKeyPress}
          screenSizeClass="display-desktop"
        />
        <Links
          desktopSizeClass="display-desktop"
          mobileSizeClass="display-mobile"
        />
      </nav>
      <Searchbox
        getSearchValue={getSearchValue}
        handleSearchEvent={handleSearchEvent}
        handleKePress={handleKeyPress}
        screenSizeClass="display-mobile"
      />
    </div>
  );
};

export default Header;
