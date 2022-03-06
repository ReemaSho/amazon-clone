import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/CarouselSlider-images/carouselImage1.jpg";
import image2 from "../assets/CarouselSlider-images/carouselImage2.jpg";
import image3 from "../assets/CarouselSlider-images/carouselImage3.jpg";
import image4 from "../assets/CarouselSlider-images/carouselImage4.jpg";

import "./sass/carouselSlider.scss";

const CarouselSlider = () => {
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      autoPlay={true}
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      swipeable={true}
      dynamicHeight={true}
    >
      <div className="CarouselSlider">
        <img className="carouselImage" src={image1} alt="" />
      </div>
      <div>
        <img className="carouselImage" src={image2} alt="" />
      </div>
      <div>
        <img className="carouselImage" src={image3} alt="" />
      </div>
      <div>
        <img className="carouselImage" src={image4} alt="" />
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
