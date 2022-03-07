import { createContext, useState, useContext } from "react";
import useSingleDoc from "../Hooks/useSingleDoc";
const SingleProductContext = createContext();
export const SingleProductProvider = ({ children }) => {
  const [proId, setProId] = useState(null);
  const { document, loading, error } = useSingleDoc("products", proId);
  return (
    <SingleProductContext.Provider
      value={{
        setProId,
        document,
        loading,
        error,
      }}
    >
      {children}
    </SingleProductContext.Provider>
  );
};

export const useSingleProductContext = () => useContext(SingleProductContext);
