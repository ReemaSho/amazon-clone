import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Basket from "./Basket";

const Links = ({ mobileSizeClass, desktopSizeClass }) => {
  const mobileSizeClasses = `${mobileSizeClass} header__navLink`;
  const desktopSizeClasses = `${desktopSizeClass} header__navLink`;

  return (
    <div className="header__nav">
      <Link className={desktopSizeClasses} to="/Login">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, sign in</span>
          <span className="header__optionLineTwo">Account & Lists</span>
        </div>
      </Link>
      <Link className={desktopSizeClasses} to="/Login">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>
      <Link className={mobileSizeClasses} to="/Login">
        <div className="header__option">
          <PersonOutlineIcon />
        </div>
      </Link>
      <Basket />
    </div>
  );
};

export default Links;
