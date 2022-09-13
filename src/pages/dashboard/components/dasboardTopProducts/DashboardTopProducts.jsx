import React from "react";
import "./DashboardTopProducts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { products } from "../../../../utils/data";

const DashboardTopProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="single-widget">
      <div className="widget-title">Top products</div>
      <div className="top-products-slider-container">
        <Slider {...settings}>
          {products.map((prod) => (
            <div className="tps-single-prod">
              <div className="tps-single-prod-img">
                <img src={prod.img} alt="" />
              </div>
              <div className="tps-single-prod-price">$ {prod.price}</div>
              <div className="tps-single-prod-name">{prod.name}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DashboardTopProducts;
