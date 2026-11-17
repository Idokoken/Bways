import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";
import { tablet } from "../Responsive";

const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);

  .hero {
    height: 60vh;
    width: 100vw;
    background: url("/images/main.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    position: relative;
    ${tablet({ height: "70vh" })}
  }

  h2 {
    font-weight: bold;
    font-size: 40px;
    ${tablet({ fontSize: "40px" })}
  }
  p {
    margin-bottom: 30px;
  }
  a {
    background: var(--primary-color);
    padding: 15px 30px;
    max-width: 120px;
    text-align: center;
    font-weight: 600;
    border-radius: 30px;
    margin-top: 30px;
  }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .hero-content {
    position: relative;
    z-index: 2;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    color: white;
  }
`;

function Hero() {
  return (
    <Wrapper>
      <div className="hero sm:px-10 md:px-20">
        {/* Overlay */}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="my-3">Everything You Love, All in One Place</h2>
          <p className="">
            Discover a world of amazing products, unbeatable deals, and everyday
            essentials. Your next favourite find is just a click away
          </p>
          <Link className="my-5" to="/faq">
            Start Here
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
