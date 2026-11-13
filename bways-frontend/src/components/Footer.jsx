import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../Responsive";
import brand from "../assets/brand.png";

const Wrapper = styled.footer`
  background-color: black;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);

  .footer {
    width: 100vw;
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
  }

  .footer .item {
    flex: 100%;
    ${tablet({ flex: "25%" })}
  }
  .footer .item h3 {
    color: rgba(30, 51, 187, 1);
    margin-bottom: 15px;
  }
  .footer .item a {
    display: block;
    text-decoration: none;
    color: inherit;
    margin-bottom: 10px;
    font-size: 18px;
  }
  .footer .item a:hover {
    font-weight: 700;
    color: rgba(30, 51, 187, 0.6);
  }
  .rule {
    border: 4px solid white;
  }
  .copywite {
    text-align: center;
    padding-bottom: 20px;
  }
  .brand-img {
    width: 30px;
    height: 30px;
  }

  .brand {
    align-self: flex-start;
  }
  .icon-header {
    display: flex;
  }
  .icons-container {
    display: flex;
  }
  .icons-container span {
    border: 2px solid white;
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 2px;
    margin-right: 20px;
    border-radius: 10px;
  }
  .icon {
  }
  .footer .item .contact div {
    display: flex;
  }
  .footer .item .contact div span {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 50%;
    padding: 15px;
    width: 25px;
    height: 25px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        <div className="item">
          <h3>ABOUT BWAYS</h3>
          <Link to="/contact-us">Contact</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/affliate">Become an Affliate</Link>
          <Link to="/careers">Careers</Link>
        </div>
        <div className="item">
          <h3>POLICIES</h3>
          <Link to="/return-policy">Bways Return Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Teams of Use</Link>
          <Link to="/cookie-policy">Cookies Policy</Link>
        </div>
        <div className="item">
          <h3>MORE INFO</h3>
          <Link to="/faq">FAQs</Link>
          <Link to="/help-center">Help Center</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="item brand">
          <div className="icon-header">
            <img src={brand} alt="brand" className="brand-img" />{" "}
            <h3 className="ms-2">Bways</h3>
          </div>
          <div className="contact my-4">
            <div className="mb-3">
              <span className="">
                <i className="fa-solid fa-phone"></i>
              </span>
              <p className="ms-5">+2348037755443</p>
            </div>
            <div className="mb-3">
              <span className="">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <p className="ms-5">info@bways.com</p>
            </div>
            <div className="mb-3">
              <span className="">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <p className="ms-5">N0 11 Amino kano way Abuja</p>
            </div>
          </div>
          <h4 className="mb-3">Follow Us</h4>
          <div className="icons-container">
            <span>
              <i className="fa-brands fa-facebook icon"></i>
            </span>
            <span>
              <i className="fa-solid fa-x icon"></i>
            </span>
            <span>
              <i className="fa-brands fa-instagram icon"></i>
            </span>
            <span>
              <i className="fa-brands fa-youtube icon"></i>
            </span>
          </div>
        </div>
      </div>
      <hr className="rule" />
      <p className="copywite">
        All Right reversed &copy; Bways {new Date().getFullYear()}
      </p>
    </Wrapper>
  );
}

export default Footer;
