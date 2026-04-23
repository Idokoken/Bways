import React from "react";
import Products from "../components/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import Newsletter from "../components/Newsletter";


const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);
  
`

function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <Hero />
        <LatestCollection />
        {/* <Products /> */}
        <BestSeller />
        <OurPolicy />
        <Newsletter />
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
