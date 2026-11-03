import React from "react";
import Products from "../components/Products";
import Footer from "../components/Footer";
import styled from "styled-components";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import Newsletter from "../components/Newsletter";
import LatestArrival from "./../components/LatestArrival";
import MajorCategory from "./../components/MajorCategory";

const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);
`;

function Home() {
  return (
    <>
      <Wrapper>
        <Hero />
        <LatestArrival />
        <LatestCollection />
        <Products />
        <BestSeller />
        <MajorCategory />
        <OurPolicy />
        <Newsletter />
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
