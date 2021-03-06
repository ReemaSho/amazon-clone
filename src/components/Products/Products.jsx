import Product from "./Product";
import "./products.scss";
const Products = ({ products }) => {
  const average = (numbers) => {
    return Math.floor(numbers.reduce((a, b) => a + b) / numbers.length);
  };
  const product = products.map((product) => {
    const { id, title, offer, regularPrice, discountedPrice, images, rating } =
      product;
    const ratingAverage = average(rating);
    const price = offer ? discountedPrice : regularPrice;
    return (
      <Product
        key={id}
        id={id}
        title={title}
        offer={offer}
        price={price}
        images={images}
        rating={ratingAverage}
      />
    );
  });

  return <div className="products">{product}</div>;
};

export default Products;
