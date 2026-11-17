import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #dee6e8;
  background-image: url("/images/letter_bg.jpg");
  background-size: cover;
  color: white;

  h4 {
  }
  div {
  }
  input {
    border-radius: 30px 0 0 30px;
    border: 2px solid var(--primary-color);
    color: black;
  }
  button {
    background: var(--primary-color);
    border-radius: 0 30px 30px 0;
  }
`;

function Newsletter() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Wrapper>
        <div className="text-center my-3">
          <p className="text-2xl font-semibold text-black">
            Receive Update on Our Latest Promotions
          </p>
          <p className="text-black mt-3 ">
            {" "}
            Subscribe today and get access to special discounts, exciting
            promotions, and exclusive offers you won't want to miss
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-1/2 flex items-center gap-0 mx-auto my-6 pl-3"
          >
            <input
              className="w-full sm:flex-1 outline-none py-2.5 px-4"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
            <button type="submit" className=" text-white text-xs px-10 py-4">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}

export default Newsletter;
