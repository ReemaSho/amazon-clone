import React, { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import useCollectionData from "../Hooks/useCollectionData";
const CategoriesContext = createContext();
export const CategoriesProvider = ({ children }) => {
  const { collectionDocs, error, loading } = useCollectionData("products");
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    if (category && !error) {
      const result = collectionDocs.filter(
        (doc) => doc.category === category.toLowerCase()
      );
      setCategoryProducts(result);
    } else {
      setCategoryProducts([]);
    }
  }, [category, collectionDocs, error]);
  return (
    <CategoriesContext.Provider
      value={{
        categoryProducts,
        setCategory,
        error,
        loading,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => useContext(CategoriesContext);
