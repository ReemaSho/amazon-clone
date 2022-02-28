import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Searchbox = () => {
  return (
    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <SearchIcon className="header__searchIcon"> </SearchIcon>
    </div>
  );
};

export default Searchbox;
