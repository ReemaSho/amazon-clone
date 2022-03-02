import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Searchbox = ({ screenSize, onChange, onClick, value }) => {
  const classes = `${screenSize} header__search`;
  return (
    <div className={classes}>
      <input
        className="header__searchInput"
        onChange={onChange}
        value={value}
        type="text"
      />
      <SearchIcon
        className="header__searchIcon"
        onClick={() => {
          onClick();
        }}
      ></SearchIcon>
    </div>
  );
};

export default Searchbox;
