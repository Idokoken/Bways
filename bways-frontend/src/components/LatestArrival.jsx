import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";

import SliderModule from "react-slick";
import { tablet } from "../Responsive";
const Slider = SliderModule.default || SliderModule;

const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);

  .main {
  }

  .left-side {
  }

  .img-container {
    width: 100%;
    height: 40vh;
    background: rgba(215, 213, 251, 0.5);
    border-radius: 40px;
    ${tablet({ height: "60vh" })}
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  h1 {
    font-size: 40px;
    color: var(--primary-color);
    ${tablet({ fontSize: "60px" })}
  }
`;

function LatestArrival() {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slides = [
    {
      id: 1,
      image: item1,
    },
    {
      id: 2,
      image: item2,
    },
    {
      id: 3,
      image: item3,
    },
  ];

  return (
    <>
      <Wrapper>
        <div className="flex flex-col sm:flex-row border border-gray-400 my-4 p-10 lg:px-20 main">
          {/* Hero Left Side */}
          <div className="w-full sm:w-1/2 flex items-center justify-center py-5 sm:py-0">
            <div className="text-[#414141]">
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                <p className="font-bold text-lg">OUR BESTSELLERS</p>
              </div>
              <h1 className=".prata-regular sm:py-3 leading-relaxed">
                Latest Arrival
              </h1>
              <div className="flex items-center gap-2">
                <p
                  onClick={() => navigate("/faq")}
                  className="font-bold text-lg cursor-pointer"
                >
                  SHOP NOW
                </p>
                <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 left-side ">
            <Slider {...settings}>
              {slides.map((slide) => (
                <div key={slide.id} className="img-container">
                  <img className="" src={slide.image} alt="hero" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default LatestArrival;
