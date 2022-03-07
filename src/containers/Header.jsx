import Logo from "../components/Header/Logo";
import Searchbox from "../components/Header/Searchbox";
import Links from "../components/Header/Links";
import { useSearchProductsContext } from "../context/SearchProductsContext";
import "./header.scss";
const Header = () => {
  const {
    searchValue,
    getSearchValue,
    handleSearchEvent,
    handleKeyPress,
    emptySearchStates,
  } = useSearchProductsContext();
  return (
    <div className="header">
      <nav className="header__container">
        <Logo emptySearchStates={emptySearchStates} />
        <Searchbox
          searchValue={searchValue}
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
        searchValue={searchValue}
        getSearchValue={getSearchValue}
        handleSearchEvent={handleSearchEvent}
        handleKePress={handleKeyPress}
        screenSizeClass="display-mobile"
      />
    </div>
  );
};

export default Header;
