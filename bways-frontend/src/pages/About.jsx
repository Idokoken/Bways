import React, { Component } from "react";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import { tablet } from "../Responsive";
import Footer from "../components/Footer";
import about_img from "../assets/about_img.jpg";
import Header from "../components/Header";

const Wrapper = styled.div`
  min-height: 50vh;
  font-family: var(--primary-font);

  .about-page {
    width: 100%;
    color: #222;
  }

  .about-hero {
    min-height: 350px;
    background: linear-gradient(261.79deg, #5b11bd 0%, #2a0857 62.97%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 50px 20px;
    color: white;
  }

  .about-hero-content {
    max-width: 750px;
  }

  .about-hero-content span,
  .about-text span {
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .about-hero h1 {
    font-size: 42px;
    font-weight: 700;
    margin: 15px 0;
  }

  .about-hero p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
  }

  .about-section {
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 80px 8%;
  }

  .about-image,
  .about-text {
    flex: 1;
  }

  .about-image img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    border-radius: 10px;
  }

  .about-text h2 {
    font-size: 32px;
    margin: 15px 0;
  }

  .about-text p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 15px;
  }
  .about-text span {
    color: var(--primary-color);
  }

  .mission-section {
    display: flex;
    gap: 30px;
    padding: 50px 8%;
    background: #f8f8f8;
  }

  .mission-card {
    flex: 1;
    background: #fff;
    padding: 35px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  .mission-card h3 {
    margin-bottom: 15px;
    font-size: 22px;
  }

  .mission-card p {
    color: #666;
    line-height: 1.7;
  }

  .why-section {
    padding: 70px 8%;
    text-align: center;
  }

  .why-section h2 {
    font-size: 30px;
    margin-bottom: 40px;
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    text-align: left;
  }

  .why-grid div {
    padding: 20px;
  }

  .why-grid h3 {
    margin-bottom: 12px;
  }

  .why-grid p {
    color: #666;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .about-hero h1 {
      font-size: 30px;
    }

    .about-section,
    .mission-section {
      flex-direction: column;
      padding: 40px 5%;
    }

    .about-image,
    .about-text {
      width: 100%;
    }

    .why-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .why-grid {
      grid-template-columns: 1fr;
    }

    .about-image img {
      height: 280px;
    }
  }
`;

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
              <div className="about-hero-content">
                <span>WHO WE ARE</span>
                <h1>Making Online Shopping Simple and Enjoyable</h1>
                <p>
                  We're passionate about making shopping easier by bringing
                  quality products and convenience together in one place.
                </p>
              </div>
            </section>

            {/* About Section */}
            <section className="about-section">
              <div className="about-image">
                <img src={about_img} alt="Our shopping experience" />
              </div>

              <div className="about-text">
                <span>ABOUT OUR STORE</span>
                <h2>Your Trusted Online Shopping Destination</h2>

                <p>
                  Welcome to our store! We believe shopping should be simple,
                  convenient, and enjoyable. That's why we've created a platform
                  where customers can discover and purchase products with ease.
                </p>

                <p>
                  From product discovery to checkout and delivery, we focus on
                  providing a seamless shopping experience that puts our
                  customers first.
                </p>
              </div>
            </section>

            {/* Mission and Vision */}
            <section className="mission-section">
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>
                  To provide customers with quality products, convenient
                  shopping experiences, and reliable customer service.
                </p>
              </div>

              <div className="mission-card">
                <h3>Our Vision</h3>
                <p>
                  To become a trusted shopping destination where customers can
                  shop confidently and conveniently.
                </p>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-section">
              <h2>Why Shop With Us?</h2>

              <div className="why-grid">
                <div>
                  <h3>Quality Products</h3>
                  <p>
                    We focus on offering products that meet our customers'
                    needs.
                  </p>
                </div>

                <div>
                  <h3>Easy Shopping</h3>
                  <p>
                    Enjoy a simple and convenient online shopping experience.
                  </p>
                </div>

                <div>
                  <h3>Secure Payments</h3>
                  <p>
                    Shop confidently with our supported secure payment options.
                  </p>
                </div>

                <div>
                  <h3>Customer Support</h3>
                  <p>We're here to help whenever you need assistance.</p>
                </div>
              </div>
            </section>
          </div>

          <Newsletter />
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default About;
