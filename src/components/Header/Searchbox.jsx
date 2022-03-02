import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Searchbox = ({ screenSize, onChange, onClick }) => {
  const classes = `${screenSize} header__search`;
  return (
    <div className={classes}>
      <input className="header__searchInput" onChange={onChange} type="text" />
      <SearchIcon
        className="header__searchIcon"
        onClick={(e) => {
          onClick(true);
        }}
      ></SearchIcon>
    </div>
  );
};

export default Searchbox;
