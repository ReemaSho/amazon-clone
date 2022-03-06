import React from "react";
import { useNavigate } from "react-router-dom";
import "./sass/sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const toProductsPage = () => {
    navigate(`/products`);
  };

  return (
    <div className="sideBar">
      <div className="sideBar__links" onClick={toProductsPage}>
        <h4>All Products</h4>
      </div>
      <div className="sideBar__links" onClick={toProductsPage}>
        <h4>Popular products</h4>
      </div>
      <div className="sideBar__links" onClick={toProductsPage}>
        <h4>New arrivals </h4>
      </div>
      <div className="sideBar__links" onClick={toProductsPage}>
        <h4>Deals</h4>
      </div>
    </div>
  );
};

export default Sidebar;
