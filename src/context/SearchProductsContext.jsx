import { createContext, useState } from "react";
import useCollectionData from "../Hooks/useCollectionData";
const SearchProductsContext = createContext();

const SearchProductsProvider = ({ children }) => {
  const { collectionDocs, loading, error } = useCollectionData("products");

  const [matchedProducts, setMatchesProducts] = useState(null);
  const [handleSearch, setHandleSearch] = useState(false);

  const getSearchValue = (e) => {
    if (e.target.value) {
      const searchValue = e.target.value.toLowerCase();

      setHandleSearch(false);
      getMatchedProducts(searchValue);
    } else {
      setMatchesProducts(null);
    }
  };

  const getMatchedProducts = (searchValue) => {
    const products = [];
    collectionDocs.forEach((doc) => {
      const title = doc.title.toLowerCase();

      const regex = new RegExp(String.raw`\b${searchValue}\b`);
      if (title.search(regex) !== -1) {
        products.push(doc);
      }
    });
    setMatchesProducts(products);
  };

  return (
    <SearchProductsContext.Provider
      value={{
        getSearchValue,
        matchedProducts,
        setHandleSearch,
        handleSearch,
        loading,
        error,
      }}
    >
      {children}
    </SearchProductsContext.Provider>
  );
};

export { SearchProductsContext, SearchProductsProvider };
