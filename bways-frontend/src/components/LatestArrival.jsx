import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'

import SliderModule from "react-slick";
const Slider = SliderModule.default || SliderModule;

const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);
`;

function LatestArrival() {
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
      image: hero,
    },
    {
      id: 2,
      image: hero,      
    },
    {
      id: 3,
      image: hero,   
    },
  ];


  return (
    <>
      <Wrapper>
        <div className="flex flex-col sm:flex-row border border-gray-400">
          {/* Hero Left Side */}
          <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-[#414141]">
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                <p className="font-medium text-sm md:text-base">
                  OUR BESTSELLERS
                </p>
              </div>
              <h1 className=".prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                latest Arrival
              </h1>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
              </div>
            </div>
          </div>
          <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
          <img className="w-full sm:w-1/2" src={slide.image} alt="hero" />

          </div>
          ))}
        </Slider>
        </div>
      </Wrapper>
    </>
  );
}

export default LatestArrival;
