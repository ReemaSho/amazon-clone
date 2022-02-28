import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
const Basket = () => {
  return (
    <Link to="/checkout" className="header__navLink">
      <div className="header__optionBasket">
        <ShoppingCartCheckoutTwoToneIcon className="header__optionLineTwo" />
        <span className="header__optionLineTwo header__basketCount">0</span>
      </div>
    </Link>
  );
};

export default Basket;
