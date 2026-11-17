import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  // min-height: 60vh;
  font-family: var(--primary-font);

  .help-page {
    background: #fff;
  }

  .help-hero {
    background: #f3f7f3;
    text-align: center;
    padding: 85px 20px;
  }

  .help-hero h1 {
    font-size: 38px;
    margin-bottom: 15px;
    font-weight: 700;
    color: var(--primary-color);
  }

  .help-hero p {
    color: rgb(0, 0, 0);
    margin-bottom: 25px;
  }

  .help-contact {
    text-align: center;
    padding: 65px 20px;
    background: #f3f7f3;
  }

  .help-contact h2 {
    font-size: 28px;
    margin-bottom: 15px;
    font-weight: 700;
    color: var(--primary-color);
  }

  .help-contact p {
    line-height: 1.8;
  }

  .help-contact-details {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 25px;
  }

  .help-contact-details a {
    color: var(--primary-color);
    font-weight: 600;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .help-hero h1 {
      font-size: 30px;
    }

    .help-contact-details {
      flex-direction: column;
      gap: 15px;
    }
  }
`;

function HelpCenter() {
  return (
    <>
      <Header />
      <Wrapper>
        {" "}
        <div className="help-page">
          <section className="help-hero">
            <h1>How Can We Help You?</h1>

            <p>
              Find answers to common questions and get the support you need.
            </p>
          </section>

          <section className="help-contact">
            <h2>Still Need Help?</h2>

            <p>
              Can't find the answer you're looking for? Our customer support
              team is ready to help.
            </p>

            <div className="help-contact-details">
              <Link to="mailto:support@bways.com">
                Email: support@bways.com
              </Link>

              <a href="tel:+2348037755443">Call: +2348037755443</a>
            </div>
          </section>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}

export default HelpCenter;
