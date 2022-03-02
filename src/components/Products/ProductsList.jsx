import React from "react";
import Product from "./Product";
const ProductsList = ({ productsList }) => {
  const average = (numbers) => {
    return Math.floor(numbers.reduce((a, b) => a + b) / numbers.length);
  };
  const product = productsList.map((product) => {
    const rating = average(product.rating);
    return (
      <Product
        key={product.id}
        images={product.images}
        id={product.id}
        title={product.title}
        price={product.price}
        rating={rating}
      />
    );
  });

  return <div className="products">{product}</div>;
};

export default ProductsList;
