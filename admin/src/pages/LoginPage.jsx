import React from "react";
import { styled } from "styled-components";
// import styled from "styled-components";
import { tablet } from "../Responsive";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
  }
`;

function LoginPage() {
  return (
    <div>
      <Wrapper>
        <h2>hello Login Page</h2>
      </Wrapper>
    </div>
  );
}

export default LoginPage;
