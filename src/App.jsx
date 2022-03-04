import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import { SearchProductsProvider } from "./context/SearchProductsContext";
import { SingleProductProvider } from "./context/SingleProductContext";
import "./App.scss";

function App() {
  return (
    <Router>
      <SingleProductProvider>
        <SearchProductsProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<SingleProduct />}></Route>
          </Routes>
        </SearchProductsProvider>
      </SingleProductProvider>
    </Router>
  );
}

export default App;
