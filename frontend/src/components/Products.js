import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { tablet } from "../Responsive";
import { Data } from "../configs/data";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
  margin: 1rem;
  ${tablet({ gridTemplateColumns: "25% 25% 25% 25%" })}

  .item {
    justify-content: center;
  }
  .card {
    border: 0.1rem #c0c0c0 solid;
    background-color: #f8f8f8;
    border-radius: 0.5rem;
  }
  img {
    border-radius: 0.5rem;
    max-width: 29rem;
    width: 100%;
  }
  .image-container {
    height: 200px;
    background-color: white;
    ${tablet({ height: "250px" })}
  }
  .card-body {
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 1.2rem;
    padding: 1rem 0;
  }
  h4 {
    font-size: 1rem;
    padding: 0.5rem 0;
  }
  .rating span {
    color: #f0c040;
    margin: 0.1rem 0;
    font-size: 0.8rem;
  }
  .rating span:last-child {
    color: #404040;
  }
`;
function Products() {
  const [product, setProduct] = useState([]);
  //const [loading, setLoading] = useState(false)
  //const [error, seterror] = useState(false)

  const getproducts = async () => {
    try {
      const resp = await axios.get("/product");
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);

  const items = Data.map((item, i) => {
    return (
      <div className="card" key={item._id}>
        <NavLink to={`/product/${item._id}`} style={{ textDecoration: "none" }}>
          <div className="image-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="card-body">
            <h3>{item.name}</h3>
          </div>
        </NavLink>
        <Rating rating={item.rating} numReviews={item.numReviews} />
        <div className="price">
          <h4>${item.price}</h4>
        </div>
      </div>
    );
  });

  return (
    <>
      <Wrapper className="row">{items}</Wrapper>
    </>
  );
}

export default Products;
