import ProductsList from "../components/Products/ProductsList";
import { useContext } from "react";
import { SearchProductsContext } from "../context/SearchProductsContext";
import Error from "../components/Error";
const ProductsController = () => {
  const { matchedProducts, activeSearch, collectionDocs, loading, error } =
    useContext(SearchProductsContext);

  if (loading) {
    return null;
  }
  if (error) {
    return <Error />;
  }
  if (matchedProducts.length && activeSearch) {
    return <ProductsList productsList={matchedProducts} />;
  }
  return <ProductsList productsList={collectionDocs} />;
};

export default ProductsController;
