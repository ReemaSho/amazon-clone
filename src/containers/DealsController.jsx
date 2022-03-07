import React, { useEffect, useState } from "react";
import useCollectionData from "../Hooks/useCollectionData";
import Products from "../components/Products/Products";
import Sidebar from "../components/Sidebar";
import Error from "../components/Error";
import Loading from "../components/Loading";
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
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (dealsProducts.length) {
    return (
      <div className="productsController">
        <Sidebar />
        <Products products={dealsProducts} />
      </div>
    );
  }
  return <Error />;
};

export default DealsController;
