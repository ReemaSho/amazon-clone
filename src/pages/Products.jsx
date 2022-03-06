import React from "react";
import Header from "../containers/Header";
import Sidebar from "../components/Sidebar";
import ProductsController from "../containers/ProductsController";
import "./sass/productsPage.scss";
const Products = () => {
  return (
    <>
      <Header />
      <div className="productsPage">
        <Sidebar />
        <ProductsController />
      </div>
    </>
  );
};

export default Products;
