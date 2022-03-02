import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import { SearchProductsProvider } from "./context/SearchProductsContext";
import "./App.scss";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <SearchProductsProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </SearchProductsProvider>
    </Router>
  );
}

export default App;
