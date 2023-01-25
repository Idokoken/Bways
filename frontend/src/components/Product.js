import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Rating from "./Rating";
import { tablet } from "../Responsive";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  gap: 10px;
  margin: 1rem;
  ${tablet({ gridTemplateColumns: "40% 60%" })}

  img {
    width: 100%;
  }

  .content {
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
    ${tablet({ gridTemplateColumns: "50% 50%" })}
  }
  .desc {
  }
  .addtocart {
    background-color: gray;
    width: 90%;
    height: 200px;
    padding: 10px;
    /* ${tablet({ position: "absolute", right: "20px" })} */
  }
  button {
    background-color: yellow;
    width: 90%;
  }
  .rating,
  .addtocart p {
    margin-bottom: 16px;
  }

  .rating span {
    color: #f0c040;
    margin: 0.1rem 0;
    font-size: 0.8rem;
  }
  .rating span:last-child {
    color: #404040;
  }
  .status {
    width: 100%;
  }
`;

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const resp = await fetch(`/product/${id}`);
      const data = await resp.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Wrapper>
      <div className="img-container">
        <img src="/items/project1.jpg" alt={product.name} />
      </div>
      <div className="content">
        <div className="desc">
          <h4>Addidas Fit Shirt</h4>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <div className="price">
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
          </div>
        </div>
        <div className="addtocart">
          <p>Seller</p>
          <p>{product.brand}</p>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <p>
            Price <span>${product.price}</span>
          </p>
          <p className="status">
            Status{" "}
            {product.countInStock > 0 ? (
              <span className="text-success text-right">In Stock</span>
            ) : (
              <span className="text-danger  text-right">Unavailable</span>
            )}
          </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Product;
