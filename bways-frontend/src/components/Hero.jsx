import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);

  .hero {
    height: 70vh;
    width: 100vw;
    background: url("/images/main.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    position: relative;
  }

  h2 {
    font-weight: bold;
    font-size: 40px;
  }
  a {
    background: var(--primary-color);
    padding: 7px 10px;
    max-width: 120px;
    text-align: center;
    font-weight: 600;
    border-radius: 20px;
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
      <div className="hero px-20">
        {/* Overlay */}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="my-3">Get help exactly when you need it</h2>
          <p className="my-3">
            From shipping to returns, find answers to all of your questions
          </p>
          <Link className="my-3" to="/faq">
            Start Here
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
