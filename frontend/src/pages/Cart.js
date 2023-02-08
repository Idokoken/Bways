import React from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";

const Wrapper = styled.div`
  padding: 10px;
  min-height: 70vh;

  .content {
    display: flex;
    flex-wrap: wrap;
  }
`;

function Cart(props) {
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.split("=")[1]) : 1;

  return (
    <Wrapper>
      <div className="content">
        <h1>Cart screen</h1>
        <p>
          ADD TO CART: productID: {productId} Qty: {qty}
        </p>
      </div>
    </Wrapper>
  );
}

export default Cart;
