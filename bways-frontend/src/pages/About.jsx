import React, { Component } from "react";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import { tablet } from "../Responsive";
import Footer from "../components/Footer";
import Title from "../components/Title";
import about_img from "../assets/about_img.jpg";

const Wrapper = styled.div`
  min-height: 50vh;
  font-family: var(--primary-font);

  .img-container {
    width: 100%;
    height: 30vh;
    ${tablet({ height: "50vh" })}
  }
  img {
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-bottom: 0;
    object-fit: cover;
  }
  h3 {
    color: rgba(30, 51, 187, 1);
    font-size: 30px;
  }
  .content {
    padding: 0 20px;
    ${tablet({ padding: "0 30px" })}
  }
  .content p {
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
  }
  .mission p {
  }
`;

class About extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <div className="text-2xl text-center pt-8 border-t">
            <Title text1={`ABOUT`} text2={`US`} />
          </div>
          <div className="my-10 flex flex-col md:flex-row gap-16">
            <div className="img-container">
              <img
                src={about_img}
                alt="about"
                className="w-full md:w-[450px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
              <p className="mt-2">
                Founded in 2022, Bways is a national leading direct-to-consumer
                online shop, providing well-selected products that are highly
                cost-effective to its registered users, with a national reach in
                all state of the federation and Abuja.
              </p>
              <p>
                In 2022. Bways devotes to improving customer service, including
                establishing a logistics and fulfillment system, to provide a
                7/24 professional service to customers and all Migerians in
                general.
              </p>
            </div>
          </div>
          <div className="about">
            <div className="content mt-4">
              <p className="mt-3">
                Bways is among Nigeria's largest online shop and our mission is
                to become the engine of commerce and trade in Nigeria and Africa
                at large. We serve a retail customer base that continues to grow
                exponentially, offering products that span various categories
                including Phones, Computers, Clothing, Shoes, Home Appliances,
                Baby Products, personal care and much more. Our range of
                services are designed to ensure optimum levels of convenience
                and customer satisfaction with the retail process; these
                services include our lowest price guarantee, 7-day free return
                policy, order delivery-tracking, dedicated customer service
                support and many other premium services.
              </p>
              <p className="mt-3">
                As we continue to expand the shop, our scope of offerings will
                increase in variety, simplicity and convenience; join us and
                enjoy the increasing benefits. We are highly customer-centric
                and are committed towards finding innovative ways of improving
                our customers' shopping experience with us; so give us some
                feedback on help@newic.com. For any press related questions,
                kindly send us an email at @Bwaysng.com. Thank you and we hope
                you enjoy your experience with us.
              </p>
              <div className="mission">
                <h3 className="text-center my-3">
                  <b>Our Mission</b>
                </h3>
                <p>
                  To deliver good, qaulity, durable, standard and affortable
                  products to every State in Nigeria and federal capital
                  tertiary
                </p>
              </div>
            </div>
          </div>
          <div className="text-xl py-4">
            <Title text1={`WHY`} text2={`CHOOSE US`} />
          </div>
          <div className="flex flex-col md:flex-row text-sm mb-20">
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Qaulity Assurance:</b>
              <p className="text-gray-600">
                We are committed to delivering products and services that meet
                the highest standards of quality, reliability, and customer
                satisfaction.
              </p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Convenience:</b>
              <p className="text-gray-600">
                Shop anytime, anywhere with ease. Our platform is designed to
                make browsing, ordering, and receiving your favorite products
                simple, fast, and hassle-free
              </p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Exceptional Customer Service:</b>
              <p className="text-gray-600">
                Our dedicated support team is committed to providing prompt,
                friendly, and reliable assistance at every stage of your
                shopping journey.
              </p>
            </div>
          </div>
          <Newsletter />
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default About;
