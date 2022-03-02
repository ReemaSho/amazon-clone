import React from "react";
import { Link } from "react-router-dom";
import errorText from "../assets/errorText.png";
import dog from "../assets/errorImage.jpg";
import "./sass/error.scss";
const Error = () => {
  return (
    <div className="error">
      <Link to="/">
        <img
          className="error__imageText"
          src={errorText}
          alt="error-text"
        ></img>
      </Link>
      <img className="error__imageDog" src={dog} alt="dog"></img>
    </div>
  );
};

export default Error;
