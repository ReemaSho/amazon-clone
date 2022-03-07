import React from "react";
import { Carousel } from "react-responsive-carousel";
import StarIcon from "@mui/icons-material/Star";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./singleProduct.scss";
const SingleProduct = ({
  imgUrls,
  title,
  ratingAverage,
  regularPriceClasses,
  regularPrice,
  discountedPriceClasses,
  discountedPrice,
  savingAmount,
  description,
}) => {
  return (
    <div className="singleProduct">
      <div className="singleProduct__images">
        <Carousel
          showIndicators={false}
          showThumbs={true}
          autoPlay={false}
          showArrows={true}
          showStatus={false}
          infiniteLoop={true}
          swipeable={true}
          dynamicHeight={true}
        >
          {imgUrls.map((imageUrl, i) => (
            <img key={i} src={imageUrl} alt="" />
          ))}
        </Carousel>
      </div>
      <div className="singleProduct__details">
        <p className="singleProduct__title"> {title}</p>
        <p className="singleProduct__rating">
          {Array(ratingAverage)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </p>

        <p className={regularPriceClasses}>
          <span>List Price: </span>
          {`$ ${regularPrice}`}
        </p>
        <p className={discountedPriceClasses}>
          <span>Price: </span>
          {`$ ${discountedPrice}`}
        </p>
        <p className={discountedPriceClasses}>
          <span>You Save: </span>
          {`$${savingAmount}`}
        </p>

        <ul className="singleProduct__description">
          <h3>About this item</h3>
          {description.map((element, i) => (
            <li key={i}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleProduct;
