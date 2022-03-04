import ProductsList from "../components/Products/ProductsList";
import { useSearchProductsContext } from "../context/SearchProductsContext";
import Error from "../components/Error";
const ProductsController = () => {
  const { matchedProducts, activeSearch, collectionDocs, loading, error } =
    useSearchProductsContext();

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
