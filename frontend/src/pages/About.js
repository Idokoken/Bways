import React, { Component } from "react";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";

class About extends Component {
  render() {
    const Wrapper = styled.div`
      min-height: 70vh;
      background-image: linear-gradient(
        to bottom right,
        rgba(92, 122, 169, 1),
        white,
        white,
        rgba(92, 122, 169, 1)
      );

      img {
        width: 100%;
        height: 80%;
        margin-top: 0;
        margin-bottom: 0;
      }
    `;
    return (
      <Wrapper>
        <div className="container py-2">
          <div className="row my-0">
            <div className="col-12 my-0 py-">
              <img src="/assets/office.jpg" alt="office" />
              <p>Bways Office</p>
            </div>
          </div>
          <div className="row mt-0">
            <div className="col-12">
              <h3 className="pb-2 pt-0">About Us</h3>
              <p>
                Founded in 2021 in Abuja, NewVic is a national leading
                direct-to-consumer online shop, providing well-selected products
                that are highly cost-effective to its registered users, with a
                national reach in Abuja, Lagos, Port-Harcult, Enugu, and Delta.
                In 2021. NewVic devotes to improving customer service, including
                establishing a logistics and fulfillment system, to provide a
                7/24 professional service to customers.
              </p>
              <p>
                NewVic is one of Nigeria's largest online shop and our mission
                is to become the engine of commerce and trade in Nigeria. We
                serve a retail customer base that continues to grow
                exponentially, offering products that span various categories
                including Phones, Computers, Clothing, Shoes, Home Appliances,
                Baby Products, personal care and much more. Our range of
                services are designed to ensure optimum levels of convenience
                and customer satisfaction with the retail process; these
                services include our lowest price guarantee, 7-day free return
                policy, order delivery-tracking, dedicated customer service
                support and many other premium services. As we continue to
                expand the shop, our scope of offerings will increase in
                variety, simplicity and convenience; join us and enjoy the
                increasing benefits. We are highly customer-centric and are
                committed towards finding innovative ways of improving our
                customers' shopping experience with us; so give us some feedback
                on help@newic.com. For any press related questions, kindly send
                us an email at press@newvic.com. Thank you and we hope you enjoy
                your experience with us.
              </p>
            </div>
          </div>
        </div>
        <Newsletter />
      </Wrapper>
    );
  }
}

export default About;
