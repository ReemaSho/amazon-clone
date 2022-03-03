import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
const Product = ({ id, title, price, images, rating, offer }) => {
  return (
    <div className="product">
      <div className="product__imageContainer">
        <Link to="/">
          <img className="product__image" src={images[0]} alt=""></img>
        </Link>
      </div>

      <div className="product__details">
        <Link className="product__title" to="/">
          <p className="product__title">{title}</p>
        </Link>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </div>
        <Link className="product__price" to="/">
          <p
            className={
              offer ? "product__price product__priceOffer" : "product__price"
            }
          >
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </Link>
        <p className="product__extraDetails">
          <p>Save more with Subscribe & Save</p>
          <p>Shipping Details</p>
        </p>
      </div>
    </div>
  );
};

export default Product;
