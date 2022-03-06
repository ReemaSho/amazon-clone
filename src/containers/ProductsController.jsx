import Products from "../components/products/Products";
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
    return <Products productsList={matchedProducts} />;
  }
  return <Products productsList={collectionDocs} />;
};

export default ProductsController;
