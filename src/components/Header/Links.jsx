import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Cart from "./Cart";
import { auth } from "../../Firebase.auth";
import { useStateValue } from "../../context/StateContext";
const Links = ({ mobileSizeClass, desktopSizeClass }) => {
  const [{ user }] = useStateValue();
  const logout = () => {
    auth.signOut();
  };
  const mobileSizeClasses = `${mobileSizeClass} header__navLink`;
  const desktopSizeClasses = `${desktopSizeClass} header__navLink`;

  return (
    <div className="header__nav">
      <Link className={desktopSizeClasses} to={!user && "/Login"}>
        <div onClick={logout} className="header__option">
          <span className="header__optionLineOne">
            Hello{user && `,${user.email}`}
          </span>
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign in"}
          </span>
        </div>
      </Link>
      <Link className={desktopSizeClasses} to={!user && "/Login"}>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>
      <Link className={mobileSizeClasses} to={!user && "/Login"}>
        <div onClick={logout} className="header__option">
          <PersonOutlineIcon />
          <div className="header__optionMobile">
            <span className="header__optionLineOne">{user && user.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </div>
      </Link>
      <Cart />
    </div>
  );
};

export default Links;
