import React from "react";
import { NavLink } from "react-router-dom";
import "./sass/sidebar.scss";

const Sidebar = () => {
  return (
    <ul className="sideBar">
      <NavLink className="sideBar__links" activeclassname="active" to="/">
        <h4>Home</h4>
      </NavLink>
      <NavLink
        className="sideBar__links"
        activeclassname="active"
        to="/products"
      >
        <h4>All Products</h4>
      </NavLink>
      <NavLink
        className="sideBar__links"
        activeclassname="active"
        to="/products/deals"
      >
        <h4>Popular products</h4>
      </NavLink>

      <NavLink
        className="sideBar__links"
        activeclassname="active"
        to="/products/deals"
      >
        <h4>New arrivals</h4>
      </NavLink>
      <NavLink
        className="sideBar__links"
        activeclassname="active"
        to="/products/deals"
      >
        <h4>Deals</h4>
      </NavLink>
    </ul>
  );
};

export default Sidebar;
