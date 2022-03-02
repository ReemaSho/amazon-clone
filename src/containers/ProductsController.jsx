import ProductsList from "../components/Products/ProductsList";
import { useContext } from "react";
import { SearchProductsContext } from "../context/SearchProductsContext";
import Error from "../components/Error";
const ProductsController = () => {
  const { matchedProducts, handleSearch, collectionDocs, loading, error } =
    useContext(SearchProductsContext);
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <div className="products__loading">Loading...</div>;
  }
  if (matchedProducts && handleSearch) {
    return matchedProducts.length ? (
      <ProductsList productsList={matchedProducts} />
    ) : (
      <ProductsList productsList={collectionDocs} />
    );
  }

  return <ProductsList productsList={collectionDocs} />;
};

export default ProductsController;
