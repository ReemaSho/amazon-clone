import React, { useState, useEffect } from "react";
import useCollectionData from "../Hooks/useCollectionData";
import Products from "../components/Products/Products";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import Error from "../components/Error";
const PopularProducts = () => {
  const { collectionDocs, loading, error } = useCollectionData("products");
  const [PopularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    if (collectionDocs.length) {
      const products = [];
      collectionDocs.forEach((doc) => {
        const average = Math.floor(
          doc.rating.reduce((a, b) => a + b) / doc.rating.length
        );

        if (average > 3) {
          products.push(doc);
        }
      });
      setPopularProducts(products);
    }
  }, [collectionDocs]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="productsController">
      <Sidebar />
      <Products products={PopularProducts} />
    </div>
  );
};

export default PopularProducts;
