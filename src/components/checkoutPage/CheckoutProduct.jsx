import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateContext";
import useProductPriceAndRating from "../../Hooks/useProductPriceAndRating";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./checkoutProduct.scss";

const CheckoutProduct = ({
  id,
  title,
  rating,
  images,
  offer,
  regularPrice,
  discountedPrice,
  quantity,
}) => {
  const { ratingAverage, finalPrice } = useProductPriceAndRating({
    rating,
    offer,
    regularPrice,
    discountedPrice,
  });
  const [, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_Cart", id: id });
  };
  const incrementQuantity = () => {
    dispatch({ type: "INCREMENT_ITEM_QUANTITY", id: id });
  };
  const decrementQuantity = () => {
    dispatch({ type: "DECREMENT_ITEM_QUANTITY", id: id });
  };
  const navigate = useNavigate();
  const toSingleProductsPage = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={images[0]}
        alt="product"
        onClick={toSingleProductsPage}
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title" onClick={toSingleProductsPage}>
          {title}
        </p>
        <div className="checkoutProduct__rating">
          {Array(ratingAverage)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </div>
        <div className="checkoutProduct__quantity">
          <small>Qty:</small>
          <AddIcon
            className="checkoutProduct__quantityControllers"
            onClick={incrementQuantity}
          />
          <span>{quantity}</span>
          <RemoveIcon
            className="checkoutProduct__quantityControllers"
            onClick={decrementQuantity}
          />
        </div>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{finalPrice}</strong>
        </p>

        <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
