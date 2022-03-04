import { createContext, useState } from "react";
import useCollectionData from "../Hooks/useCollectionData";
import { useNavigate } from "react-router-dom";
const SearchProductsContext = createContext();

const SearchProductsProvider = ({ children }) => {
  const { collectionDocs, loading, error } = useCollectionData("products");
  const [searchValue, setSearchValue] = useState("");
  const [matchedProducts, setMatchesProducts] = useState(null);
  const [handleSearch, setHandleSearch] = useState(false);
  const navigate = useNavigate();

  const getSearchValue = (e) => {
    setSearchValue("");
    if (e.target.value) {
      const value = e.target.value.toLowerCase();
      setSearchValue(value);
      setHandleSearch(false);
    }
  };
  const handleKePress = (e) => {
    const toProductsPage = () => {
      navigate(`/products`);
    };
    if (e.key === "Enter") {
      setHandleSearch(true);
      getMatchedProducts(searchValue);
      toProductsPage();
      setSearchValue("");
    }
  };
  const onSubmit = () => {
    setHandleSearch(true);
    getMatchedProducts(searchValue);
    setSearchValue("");
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
        setMatchesProducts,
        onSubmit,
        handleKePress,
        handleSearch,
        collectionDocs,
        loading,
        error,
      }}
    >
      {children}
    </SearchProductsContext.Provider>
  );
};

export { SearchProductsContext, SearchProductsProvider };
