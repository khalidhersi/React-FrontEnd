import React, { useState } from "react";
import "./Carousel.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import smBanner from "../../assets/images/spidermanBanner.jpg";
import kmBanner from "../../assets/images/kingsmenBanner.jpg";
import sBanner from "../../assets/images/screamBanner.jpg";

const Carousel = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === carouselImageArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(carouselImageArr.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const carouselImageArr = [
    smBanner,
    kmBanner,
    sBanner
]

  return (
    <section className="carousel__container">
      <div className="carousel">
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={handleDecrement}
          className="carousel__arrow carousel__arrow--left"
        />
        <img src={carouselImageArr[counter]} alt="" className="carousel__image" />
        
        <img
          src={rightArrow}
          alt="right arrow"
          onClick={handleIncrement}
          className="carousel__arrow carousel__arrow--right"
        />
      </div>
    </section>
  );
};

export default Carousel;
