import Products from "../components/products/Products";
import Sidebar from "../components/Sidebar";
import { useSearchProductsContext } from "../context/SearchProductsContext";
import Error from "../components/Error";
import Loading from "../components/Loading";
import "./sass/products.scss";
const ProductsController = () => {
  const { matchedProducts, activeSearch, collectionDocs, loading, error } =
    useSearchProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (matchedProducts.length && activeSearch) {
    return (
      <div className="productsController">
        <Sidebar />
        <Products products={matchedProducts} />
      </div>
    );
  } else if (!matchedProducts.length && activeSearch) {
    return <Error />;
  }
  return (
    <div className="productsController">
      <Sidebar />
      <Products products={collectionDocs} />
    </div>
  );
};

export default ProductsController;
