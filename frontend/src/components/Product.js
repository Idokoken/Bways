import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";
import Rating from "./Rating";
import { tablet } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { Data } from "../configs/data";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { productDetail } from "../redux/action";

const Wrapper = styled.div`
  .row {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
    margin: 1rem;
    min-height: 60vh;
    ${tablet({ gridTemplateColumns: "40% 60%" })}
  }

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
    height: 250px;
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

  .relateditem {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 5px;
    margin: 1rem;
    ${tablet({ gridTemplateColumns: "25% 25% 25% 25%" })}
  }
  .card {
    border: 0.1rem #c0c0c0 solid;
    background-color: #f8f8f8;
    border-radius: 0.5rem;
  }
  .card img {
    border-radius: 0.5rem;
    max-width: 29rem;
    width: 100%;
  }
  .card .image-container {
    height: 200px;
    background-color: white;
    ${tablet({ height: "250px" })}
  }
  .card .card-body {
    margin: 0;
    padding: 0;
  }
  .card h3 {
    font-size: 1.2rem;
    padding: 1rem 0;
  }
  .card h4 {
    font-size: 1rem;
    padding: 0.5rem 0;
  }
  .card .rating span {
    color: #f0c040;
    margin: 0.1rem 0;
    font-size: 0.8rem;
  }
  .card .rating span:last-child {
    color: #404040;
  }
`;

function Product(props) {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct);
  const { loading, error, product } = singleProduct;

  useEffect(() => {
    dispatch(productDetail(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    props.history.push(`/cart/${id}?qty={qty}`);
  };

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
    <Wrapper>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="row">
          <div className="img-container">
            <img src={product.image} alt={product.name} />
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
              <div className="row">
                <div>Qty</div>
                <div>
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock.keys())].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {product.countInStock > 0 && (
                <>
                  <button onClick={handleAddToCart}>Add to Cart</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="related">
        <h4>Related Products</h4>
        <div className="relateditem">{items}</div>
      </div>
    </Wrapper>
  );
}

export default Product;
