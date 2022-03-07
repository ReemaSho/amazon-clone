import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Deals from "./pages/Deals";
import SingleProduct from "./pages/SingleProduct";
import LoginPage from "./pages/LoginPage";
import Checkout from "./pages/Checkout";
import { SearchProductsProvider } from "./context/SearchProductsContext";
import { SingleProductProvider } from "./context/SingleProductContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import { useStateValue } from "./context/StateContext";
import { auth } from "./Firebase.auth";
import "./App.scss";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  console.log(user);
  return (
    <Router>
      <SingleProductProvider>
        <SearchProductsProvider>
          <CategoriesProvider>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route
                path="/products/category/:category"
                element={<Category />}
              ></Route>
              <Route path="/products/deals" element={<Deals />}></Route>
              <Route path="/products/:id" element={<SingleProduct />}></Route>
            </Routes>
          </CategoriesProvider>
        </SearchProductsProvider>
      </SingleProductProvider>
    </Router>
  );
}

export default App;
