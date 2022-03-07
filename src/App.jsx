import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Deals from "./pages/Deals";
import SingleProduct from "./pages/SingleProduct";
import LoginPage from "./pages/LoginPage";
import Checkout from "./pages/Checkout";
import Popular from "./pages/Popular";
import NewArrivals from "./pages/NewArrivals";
import { SearchProductsProvider } from "./context/SearchProductsContext";
import { SingleProductProvider } from "./context/SingleProductContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import { useStateValue } from "./context/StateContext";
import { auth } from "./Firebase.auth";

function App() {
  const [, dispatch] = useStateValue();
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
  return (
    <Router>
      <SingleProductProvider>
        <SearchProductsProvider>
          <CategoriesProvider>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/products/:id" element={<SingleProduct />}></Route>
              <Route
                path="/products/category/:category"
                element={<Category />}
              ></Route>
              <Route path="/popular" element={<Popular />}></Route>
              <Route path="/new-arrivals" element={<NewArrivals />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/deals" element={<Deals />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
            </Routes>
          </CategoriesProvider>
        </SearchProductsProvider>
      </SingleProductProvider>
    </Router>
  );
}

export default App;
