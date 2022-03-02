import ProductsList from "../components/Products/ProductsList";

import { useContext } from "react";
import { SearchProductsContext } from "../context/SearchProductsContext";
const ProductsController = () => {
  const { searchValue, matchedProducts, handleSearch, loading, error } =
    useContext(SearchProductsContext);
  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  // console.log(matchedProducts);
  if (matchedProducts && handleSearch) {
    return (
      <ProductsList productsList={matchedProducts} searchValue={searchValue} />
    );
  }
  return <h1>HomePage</h1>;
};

export default ProductsController;
