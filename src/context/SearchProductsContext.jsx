import { createContext, useState } from "react";
import useCollectionData from "../Hooks/useCollectionData";
import { useNavigate } from "react-router-dom";
const SearchProductsContext = createContext();

const SearchProductsProvider = ({ children }) => {
  const { collectionDocs, loading, error } = useCollectionData("products");
  const [searchValue, setSearchValue] = useState("");
  const [matchedProducts, setMatchesProducts] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const navigate = useNavigate();
  const getSearchValue = (e) => {
    if (e.target.value) {
      const value = e.target.value.toLowerCase();
      setSearchValue(value);
      setActiveSearch(false);
    }
  };
  const handleKeyPress = (e) => {
    const toProductsPage = () => {
      navigate(`/products`);
    };
    if (e.key === "Enter") {
      setActiveSearch(true);
      getMatchedProducts(searchValue);
      toProductsPage();
    }
  };
  const handleSearchEvent = () => {
    setActiveSearch(true);
    getMatchedProducts(searchValue);
  };
  const emptySearchStates = () => {
    setActiveSearch(false);
    setSearchValue("");
    setMatchesProducts([]);
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
        handleSearchEvent,
        handleKeyPress,
        activeSearch,
        emptySearchStates,
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
