import { useSingleProductContext } from "../context/SingleProductContext";
import useProductPriceAndRating from "../Hooks/useProductPriceAndRating";
import Error from "../components/Error";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import AddToCart from "../components/SingleProduct/AddToCart";
import { useStateValue } from "../context/StateContext";
const SingleProductController = () => {
  const { document, loading, error } = useSingleProductContext();
  const {
    ratingAverage,
    savingAmount,
    regularPriceClasses,
    discountedPriceClasses,
    finalPrice,
  } = useProductPriceAndRating(document);
  const [, dispatch] = useStateValue();
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
      dispatch({
        type: "ADD_TO_CART",
        id: id,
        item: {
          id: id,
          title: title,
          rating: rating,
          images: images,
          offer: offer,
          finalPrice: finalPrice,
          regularPrice: regularPrice,
          discountedPrice: discountedPrice,
          description: description,
          quantity: 1,
        },
      });
    };

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
        <AddToCart price={finalPrice} addToCard={addToCard}></AddToCart>
      </div>
    );
  }
  if (error) {
    return <Error />;
  }
  return <Error />;
};

export default SingleProductController;
