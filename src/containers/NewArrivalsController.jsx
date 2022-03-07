import React from "react";
import useProductsTimeStamp from "../Hooks/useProductsTimeStamp";
import Error from "../components/Error";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import Products from "../components/Products/Products";
const NewArrivalsController = () => {
  const { collectionDocs, loading, error } = useProductsTimeStamp("products");
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    collectionDocs.length && (
      <div className="productsController">
        <Sidebar />
        <Products products={collectionDocs} />
      </div>
    )
  );
};

export default NewArrivalsController;
