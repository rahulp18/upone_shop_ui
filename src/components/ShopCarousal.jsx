import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";
const ShopCarousal = ({ slides }) => {
  console.log(slides);
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="flex text-[30px] items-center justify-center">
        <Loading />
      </div>
    );
  }
  if (!slides) {
    return <h1>No data</h1>;
  }
  return (
    <div className="slider-container">
      <Carousel
        useKeyboardArrows
        autoPlay
        interval="5000"
        transitionTime="1000"
        infiniteLoop
        axis="horizontal"
        showArrows={true}
      >
        {slides.map((image) => (
          <div key={image?.url}>
            <img className="w-full object-cover  max-h-md" src={image.url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ShopCarousal;
