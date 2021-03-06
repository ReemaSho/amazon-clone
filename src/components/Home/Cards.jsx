import React from "react";
import "./cards.scss";
import { useNavigate } from "react-router-dom";
const Cards = () => {
  const Navigate = useNavigate();
  const navigateToCategoryPage = (category) => {
    Navigate(`products/category/${category}`);
  };
  return (
    <div className="cards">
      <div
        className="card"
        onClick={() => navigateToCategoryPage("beauty & personal care")}
      >
        <h2 className="mainSection__title">Beauty & Personal Care</h2>
        <img
          src="https://www.tradekey.com/images/uploadedimages/category/3515/m125465.jpg"
          alt=""
        />
      </div>
      <div className="card" onClick={() => navigateToCategoryPage("baby")}>
        <h2 className="mainSection__title">Baby</h2>
        <img
          src="https://m.media-amazon.com/images/I/81MKujcFjfL._UX569_.jpg"
          alt=""
        />
      </div>
      <div
        className="card"
        onClick={() => navigateToCategoryPage("art & crafts")}
      >
        <h2 className="mainSection__title">Art & Crafts</h2>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51CVfURDXlL.jpg"
          alt=""
        />
      </div>
      <div
        className="card"
        onClick={() => navigateToCategoryPage("automotive")}
      >
        <h2 className="mainSection__title">Automotive</h2>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71CuA5o9ziL._AC._SR360,460.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cards;
