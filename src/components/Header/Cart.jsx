import { Link } from "react-router-dom";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import { trackCartItemsCount } from "../../context/reducer";
import { useStateValue } from "../../context/StateContext";
import "./linksAndCart.scss";
const Cart = () => {
  const [{ Cart }] = useStateValue();
  return (
    <Link to="/checkout" className="header__navLink">
      <div className="header__optionCart">
        <ShoppingCartCheckoutTwoToneIcon className="header__optionLineTwo" />
        <span className="header__optionLineTwo header__CartCount">
          {trackCartItemsCount(Cart)}
        </span>
      </div>
    </Link>
  );
};

export default Cart;
