import React from "react";
import Currency_Ex from "../assets/currency_exchange2.png";
import Support_Icon from "../assets/support_agent.png";
import check_icon from "../assets/check.png";
import styled from "styled-components";

const Wrapper = styled.div`
  background: black;
  color: white;

  .item {
    border: 2px solid rgba(255, 255, 255, 0.6);
    padding: 30px 20px;
    border-radius: 20px;
  }
  .desc {
    color: rgba(255, 255, 255, 0.8);
    margin-top: 20px;
  }
`;

function OurPolicy() {
  return (
    <Wrapper>
      <div
        className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-2 text-center py-20 
        text-xs sm:text-sm md:text-base px-5"
      >
        <div className="item">
          <img
            src={Currency_Ex}
            className="w-12 m-auto mb-5 "
            alt="exchange icon"
          />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="desc">We offer hassle free Exchange Policy</p>
        </div>

        <div className="item">
          <img
            src={check_icon}
            className="w-12 m-auto mb-5 "
            alt="quality icon"
          />
          <p className="font-semibold">7 Days Retrurn Policy</p>
          <p className="desc">We Provide & Days Free Return Policy</p>
        </div>
        <div className="item">
          <img
            src={Support_Icon}
            className="w-12 m-auto mb-5 "
            alt="suppport icon"
          />
          <p className="font-semibold">Best Customer Support</p>
          <p className="desc">We Provide 24/7 Customer Support</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default OurPolicy;
