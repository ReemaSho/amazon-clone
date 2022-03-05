import { Link } from "react-router-dom";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import { useStateValue } from "../../context/StateContext";
const Cart = () => {
  const [{ ItemsCount }] = useStateValue();
  return (
    <Link to="/checkout" className="header__navLink">
      <div className="header__optionCart">
        <ShoppingCartCheckoutTwoToneIcon className="header__optionLineTwo" />
        <span className="header__optionLineTwo header__CartCount">
          {ItemsCount}
        </span>
      </div>
    </Link>
  );
};

export default Cart;
