import React from "react";
import "../sass/Home/cards.scss";
import { useCategoriesContext } from "../../context/CategoriesContext";
const Cards = () => {
  const { getCategoryName } = useCategoriesContext();
  return (
    <div className="cards">
      <div
        className="card"
        onClick={() => getCategoryName("Beauty & Personal Care")}
      >
        <h2 className="mainSection__title">Beauty & Personal Care</h2>
        <img
          src="https://www.tradekey.com/images/uploadedimages/category/3515/m125465.jpg"
          alt=""
        />
      </div>
      <div className="card" onClick={() => getCategoryName("Baby")}>
        <h2 className="mainSection__title">Baby</h2>
        <img
          src="https://m.media-amazon.com/images/I/81MKujcFjfL._UX569_.jpg"
          alt=""
        />
      </div>
      <div className="card" onClick={() => getCategoryName("Art & Crafts")}>
        <h2 className="mainSection__title">Art & Crafts</h2>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51CVfURDXlL.jpg"
          alt=""
        />
      </div>
      <div className="card" onClick={() => getCategoryName("Automotive")}>
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
