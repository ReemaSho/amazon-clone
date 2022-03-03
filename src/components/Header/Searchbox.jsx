import React from "react";
import { Link } from "react-router-dom";
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
      <Link className="header__searchIcon" to="/products">
        <SearchIcon
          onClick={() => {
            onClick();
          }}
        ></SearchIcon>
      </Link>
    </div>
  );
};

export default Searchbox;
