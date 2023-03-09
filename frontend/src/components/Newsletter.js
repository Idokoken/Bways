import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #dee6e8;
  background-image: url("/assets/letter_bg.jpg");
  background-size: cover;
  color: white;

  h4 {
    margin-bottom: 20px;
    font-family: "Times New Roman", Times, serif;
    /* margin-top: 5px; */
  }
  div {
    display: flex;
  }
  input {
    padding: 5px;
    border: none;
    border-radius: 20px 0 0 20px;
  }
  button {
    padding: 5px;
    background: teal;
    color: white;
    border: none;
    border-radius: 0 20px 20px 0;
  }
`;

function Newsletter() {
  return (
    <Wrapper>
      <h4>Get personalized insights on products to your inbox</h4>
      <div>
        <input type="email" placeholder="enter email" />
        <button>Subscribe</button>
      </div>
    </Wrapper>
  );
}

export default Newsletter;
