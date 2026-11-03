import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.png";
import {Link} from 'react-router-dom'


const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);

  .hero {
    height: 50vh;
    width: 100vw;
    background: url("/images/main.jpg");
    background-size: contain;
  }
`;

function Hero() {
  return (
    <Wrapper>
      <div className="hero">
        <h2>Get help exactly when you need it</h2>
        <p>From shipping to returns, find answers to all of your questions</p>
        <Link to='/faq'>Start Here</Link>
      </div>
    </Wrapper>
  );
}

export default Hero;
