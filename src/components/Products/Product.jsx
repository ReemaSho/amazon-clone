import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import "./product.scss";
const Product = ({ id, title, offer, price, images, rating }) => {
  const navigate = useNavigate();
  const toSingleProductPage = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product">
      <div className="product__imageContainer">
        <img
          className="product__image"
          src={images[0]}
          alt=""
          onClick={() => toSingleProductPage()}
        ></img>
      </div>

      <div className="product__details">
        <p className="product__title" onClick={() => toSingleProductPage()}>
          {title}
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </div>

        <p
          className={
            offer ? "product__price product__priceOffer" : "product__price"
          }
          onClick={() => toSingleProductPage()}
        >
          <small>$</small>
          <strong>{price}</strong>
          <WhatshotSharpIcon
            className={offer ? "product__priceFire" : "display_none"}
          />
        </p>

        <div className="product__extraDetails">
          <p>Save more with Subscribe & Save</p>
          <p>Shipping Details</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
