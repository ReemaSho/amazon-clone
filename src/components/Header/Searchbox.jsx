import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Searchbox = ({
  searchValue,
  screenSizeClass,
  getSearchValue,
  handleSearchEvent,
  handleKeyPress,
}) => {
  const searchBoxContainerClasses = `${screenSizeClass} header__search`;
  return (
    <div className={searchBoxContainerClasses}>
      <input
        className="header__searchInput"
        onChange={getSearchValue}
        onKeyPress={handleKeyPress}
        type="text"
        value={searchValue}
      />
      <Link
        className="header__searchIcon"
        to="/products"
        onClick={handleSearchEvent}
      >
        <SearchIcon></SearchIcon>
      </Link>
    </div>
  );
};

export default Searchbox;
