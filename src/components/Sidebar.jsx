import React from "react";
import { useNavigate } from "react-router-dom";
import "./sass/sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const toSingleProductsPage = () => {
    navigate(`/products`);
  };

  return (
    <div className="sideBar">
      <div className="sideBar__links" onClick={toSingleProductsPage}>
        <h4>Bestseller</h4>
      </div>
      <div className="sideBar__links" onClick={toSingleProductsPage}>
        <h4>Categories</h4>
      </div>
      <div className="sideBar__links" onClick={toSingleProductsPage}>
        <h4>newAdded</h4>
      </div>
      <div className="sideBar__links" onClick={toSingleProductsPage}>
        <h4>Offers</h4>
      </div>
    </div>
  );
};

export default Sidebar;
