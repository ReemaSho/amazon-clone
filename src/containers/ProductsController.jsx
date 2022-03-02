import Product from "../components/Products/Product";
import ProductsList from "../components/Products/ProductsList";
import useCollectionData from "../Hooks/useCollectionData";
const ProductsController = () => {
  const { collectionDocs, loading, error } = useCollectionData("products");

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return <ProductsList productsList={collectionDocs} />;
};

export default ProductsController;
