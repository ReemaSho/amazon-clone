import React from "react";
import { Link } from "react-router-dom";
import Basket from "./Basket";

const Links = () => {
  return (
    <div className="header__nav">
      <Link className="header__navLink" to="/Login">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, sign in</span>
          <span className="header__optionLineTwo">Account & Lists</span>
        </div>
      </Link>
      <Link className="header__navLink" to="/Login">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>
      <Basket />
    </div>
  );
};

export default Links;
