import React from "react";
import StarIcon from "@mui/icons-material/Star";
//import "../sass/product.scss";
const Product = ({ id, title, price, images, rating }) => {
  return (
    <div className="Product">
      <img src={images[0]} alt=""></img>
      <div>{title}</div>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} />
          ))}
      </div>
    </div>
  );
};

export default Product;
