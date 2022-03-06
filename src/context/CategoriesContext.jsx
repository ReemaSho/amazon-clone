import React from "react";
import { createContext, useState, useContext } from "react";
import useCollectionData from "../Hooks/useCollectionData";
import { useNavigate } from "react-router-dom";
const CategoriesContext = createContext();
export const CategoriesProvider = ({ children }) => {
  const { collectionDocs } = useCollectionData("products");
  const [categoryProducts, setCategoryProducts] = useState([]);
  const navigate = useNavigate();
  const toProductsPage = () => {
    navigate(`/products`);
  };

  const getCategoryProducts = (value) => {
    if (value) {
      const result = collectionDocs.filter(
        (doc) => doc.category === value.toLowerCase()
      );
      setCategoryProducts(result);
    }
  };
  const getCategoryName = (value) => {
    toProductsPage();
    getCategoryProducts(value).then((_) => {
      setCategoryProducts([]);
    });
  };
  return (
    <CategoriesContext.Provider
      value={{
        categoryProducts,
        getCategoryName,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => useContext(CategoriesContext);
