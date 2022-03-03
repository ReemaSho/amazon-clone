import React from "react";
import Product from "./Product";
import "../sass/products.scss";
const ProductsList = ({ productsList }) => {
  const average = (numbers) => {
    return Math.floor(numbers.reduce((a, b) => a + b) / numbers.length);
  };
  const product = productsList.map((product) => {
    const rating = average(product.rating);
    const price = product.offer
      ? product.discountedPrice
      : product.regularPrice;
    return (
      <Product
        offer={product.offer}
        key={product.id}
        images={product.images}
        id={product.id}
        title={product.title}
        price={price}
        rating={rating}
      />
    );
  });

  return <div className="products">{product}</div>;
};

export default ProductsList;
