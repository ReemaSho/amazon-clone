import React, { useEffect, useState } from "react";
import useCollectionData from "../Hooks/useCollectionData";
import Products from "../components/products/Products";
import Sidebar from "../components/Sidebar";
import Error from "../components/Error";
import "./sass/products.scss";
const DealsController = () => {
  const { collectionDocs, loading, error } = useCollectionData("products");
  const [dealsProducts, setDealsProducts] = useState([]);

  useEffect(() => {
    if (collectionDocs.length) {
      const result = collectionDocs.filter((doc) => doc.offer === true);
      setDealsProducts(result);
    }
  }, [collectionDocs]);
  if (loading) {
    return null;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="productsController">
      <Sidebar />
      <Products products={dealsProducts} />
    </div>
  );
};

export default DealsController;
