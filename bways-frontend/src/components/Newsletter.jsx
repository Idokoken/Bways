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
          <p className="text-2xl font-medium text-gray-800 ">
            Subscribe Now to Recieve Update on Our Latest Promotion
          </p>
          <p className="text-gray-400 mt-3 ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            itaque.
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-1/2 flex items-center gap-0 mx-auto my-6 pl-3"
          >
            <input
              className="w-full sm:flex-1 outline-none py-2.5 px-2"
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
