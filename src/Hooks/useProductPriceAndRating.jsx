import { useEffect, useState } from "react";

const useProductPriceAndRating = (document) => {
  const [ratingAverage, setRatingAverage] = useState("");
  const [savingAmount, setSavingAmount] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null);
  const [regularPriceClasses, setRegularPriceClasses] = useState(
    "product__regularPrice"
  );
  const [discountedPriceClasses, setDiscountedPriceClasses] =
    useState("display_none");

  useEffect(() => {
    if (document) {
      const { rating, offer, regularPrice, discountedPrice } = document;
      function average(numbers) {
        return Math.floor(numbers.reduce((a, b) => a + b) / numbers.length);
      }
      setRatingAverage(average(rating));
      setFinalPrice(regularPrice);
      if (offer) {
        setSavingAmount(Math.floor(regularPrice - discountedPrice));
        setRegularPriceClasses("product__regularPrice discounted");
        setDiscountedPriceClasses("product__discountedPrice");
        setFinalPrice(discountedPrice);
      }
    }
  }, [document]);

  return {
    ratingAverage,
    savingAmount,
    finalPrice,
    regularPriceClasses,
    discountedPriceClasses,
  };
};

export default useProductPriceAndRating;
