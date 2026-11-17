import React, { useContext, useState } from "react";
import Products from "./Products";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import styled from "styled-components";
import { tablet } from "../Responsive";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;

  .row {
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: center;
    gap: 30px;
    padding: 1rem;
    margin: 30px;
    ${tablet({ gridTemplateColumns: "23% 23% 23% 23%" })}
  }
`;

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  // console.log(products);

  return (
    <Wrapper>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1={`LATEST`} text2={`COLLECTIONS`} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base ">
            Discover our newest arrivals, carefully selected to bring you the
            latest styles, trends, and must-have products. Explore fresh
            collections and find something you’ll love.
          </p>
        </div>
        {/* Rendering Products */}
        <div className="row">
          {latestProducts.map((item, i) => (
            <ProductItem
              key={i}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>

        {/* <div className="test">
                {latestProducts.map((item, i) => <>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                </>)}
            </div> */}
      </div>
    </Wrapper>
  );
}

export default LatestCollection;
