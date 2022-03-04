import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
const Searchbox = ({ screenSize, onChange, onClick, handleKePress }) => {
  const classes = `${screenSize} header__search`;
  return (
    <div className={classes}>
      <input
        className="header__searchInput"
        onChange={onChange}
        onKeyPress={handleKePress}
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
