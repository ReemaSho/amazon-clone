import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Searchbox = ({ screenSize }) => {
  const classes = `${screenSize} header__search`;
  return (
    <div className={classes}>
      <input className="header__searchInput" type="text" />
      <SearchIcon className="header__searchIcon"> </SearchIcon>
    </div>
  );
};

export default Searchbox;
