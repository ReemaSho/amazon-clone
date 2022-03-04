import { SingleProductContext } from "../context/SingleProductContext";
import { useContext } from "react";
import Error from "../components/Error";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import AddToCart from "../components/SingleProduct/AddToCart";
import { useStateValue } from "../context/StateContext";
import "./sass/singleProduct.scss";
const SingleProductController = () => {
  const { document, loading, error } = useContext(SingleProductContext);
  const [{ basket }, dispatch] = useStateValue();
  if (loading) {
    return null;
  }
  if (document) {
    const {
      id,
      title,
      rating,
      images,
      offer,
      regularPrice,
      discountedPrice,
      description,
    } = document;
    const addToCard = () => {
      dispatch({ type: "ADD_TO_CART", item: { id: id } });
    };
    const ratingAverage = average(rating);
    let savingAmount = "";
    let regularPriceClasses = "singleProduct__regularPrice";
    let discountedPriceClasses = "display_none";
    let price = document.regularPrice;
    if (offer) {
      savingAmount = Math.floor(
        document.regularPrice - document.discountedPrice
      );
      regularPriceClasses = " singleProduct__regularPrice discounted";
      discountedPriceClasses = "singleProduct__discountedPrice";
      price = document.discountedPrice;
    }
    function average(numbers) {
      return Math.floor(numbers.reduce((a, b) => a + b) / numbers.length);
    }

    return (
      <div className="SingleProduct__container">
        <SingleProduct
          imgUrls={images}
          title={title}
          ratingAverage={ratingAverage}
          regularPriceClasses={regularPriceClasses}
          regularPrice={regularPrice}
          discountedPriceClasses={discountedPriceClasses}
          discountedPrice={discountedPrice}
          savingAmount={savingAmount}
          description={description}
        ></SingleProduct>
        <AddToCart price={price} addToCard={addToCard}></AddToCart>
      </div>
    );
  }
  if (error) {
    return <Error />;
  }
  return <Error />;
};

export default SingleProductController;
