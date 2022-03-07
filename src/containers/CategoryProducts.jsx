import Products from "../components/products/Products";
import Sidebar from "../components/Sidebar";
import { useCategoriesContext } from "../context/CategoriesContext";
import Error from "../components/Error";
import Loading from "../components/Loading";
import "./sass/products.scss";

const ProductsCategory = () => {
  const { categoryProducts, loading, error } = useCategoriesContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (!categoryProducts.length) {
    return <Error />;
  }
  return (
    <div className="productsController">
      <Sidebar />
      <Products products={categoryProducts} />
    </div>
  );
};

export default ProductsCategory;
