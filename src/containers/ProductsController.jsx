import Products from "../components/products/Products";
import Sidebar from "../components/Sidebar";
import { useSearchProductsContext } from "../context/SearchProductsContext";
import { useCategoriesContext } from "../context/CategoriesContext";
import Error from "../components/Error";
import "./sass/productsController.scss";
const ProductsController = () => {
  const { matchedProducts, activeSearch, collectionDocs, loading, error } =
    useSearchProductsContext();
  const { categoryProducts } = useCategoriesContext();
  if (loading) {
    return null;
  }
  if (error) {
    return <Error />;
  }
  if (categoryProducts.length && !matchedProducts.length && !activeSearch) {
    return (
      <div className="productsController">
        <Sidebar />
        <Products products={categoryProducts} />
      </div>
    );
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
