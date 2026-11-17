import React from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 0;
  padding: 10px;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  color: white;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    font-weight: 700;
    margin-bottom: 30px;
    font-size: 40px;
  }
  a {
    background: rgba(255, 255, 255, 1);
    color: black;
    font-weight: 700;
    padding: 10px 25px;
    border-radius: 30px;
    font-size: 18px;
  }
`;

function ErrorPage() {
  return (
    <>
      <Header />

      <Wrapper>
        <div className="">
          <h1>Page Not Found</h1>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>

      <Footer />
    </>
  );
}

export default ErrorPage;
