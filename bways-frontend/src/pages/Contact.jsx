import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { tablet } from "../Responsive";
import Footer from "../components/Footer";
import Title from "../components/Title";
import contact_img from "../assets/contact_img.jpg";
import Newsletter from "./../components/Newsletter";

const Wrapper = styled.div`
  min-height: 50vh;
  font-family: var(--primary-font);
`;

class Contact extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <div className="text-center text-2xl border-t pt-10">
            <Title text1={`CONTACT`} text2={`US`} />
          </div>
          <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
            <img
              className="w-full md:max-w-[480px]"
              src={contact_img}
              alt="contact profile"
            />
            <div className="flex flex-col justify-center items-start gap-6">
              <p className="font-semibold text-xl text-gray-500">Our Store</p>
              <p className="text-gray-500">
                No 12 Amino Kano way, Wuse 2, Abuja Nigeria
              </p>
              <p className="text-gray-500">
                Tel: +234704487099 <br />
                Email: gbways@gmail.com
              </p>
              <p className="font-semibold text-xl text-gray-400">
                Carrier at Bways
              </p>
              <p className="text-gray-500">
                Learn more about our Teams and Job openings
              </p>
              <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-100">
                Explore Jobs
              </button>
            </div>
          </div>
          <Newsletter />
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default Contact;
