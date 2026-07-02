import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Rating from "./Rating";
import { tablet } from "../Responsive";
import { ShopContext } from "../context/ShopContext";
import star_icon from "../assets/star_icon.png";

const Wrapper = styled.div`
  min-height: 50vh;
  font-family: var(--primary-font);
  background: var(--bg-color);

  .row {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 5px;
    padding: 20px;
    padding-left: 10px;
    min-height: 60vh;
    ${tablet({ gridTemplateColumns: "40% 60%", padding: "1rem" })}
  }
  .img-container {
    width: 100%;
    height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .content {
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
    font-family: "Times New Roman", Times, serif;
    ${tablet({ gridTemplateColumns: "60% 40%" })}
  }
  .desc h4 {
    color: rgba(30, 51, 187, 1);
  }
  .addtocart {
    background-color: rgba(000, 000, 000, 0.9);
    color: white;
    width: 90%;
    max-height: 200px;
    padding: 10px;
    border-radius: 10px;
    /* ${tablet({ position: "absolute", right: "20px" })} */
  }
  button {
    background-color: yellow;
    width: 90%;
  }
  .rating,
  .addtocart p {
    margin-bottom: 6px;
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

  /* .relateditem {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 5px;
    margin: 1rem;
    ${tablet({ gridTemplateColumns: "25% 25% 25% 25%" })}
  } */
`;

function Product(props) {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const product = products.find((a, i) => a._id === productId);

  // const handleAddToCart = () => {
  //   props.history.push(`/cart/${id}?qty={qty}`);
  // };

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    // <Wrapper>
    //   {/* { {loading ? (
    //     <LoadingBox></LoadingBox>
    //   ) : error ? (
    //     <MessageBox>{error}</MessageBox>
    //   ) : (
    //   product && ( */}
    //   <>
    //     <div className="row">
    //       <div className="img-container">
    //         <img src={product.image} alt={product.name} />
    //       </div>
    //       <div className="content">
    //         <div className="desc">
    //           <h4>Addidas Fit Shirt</h4>
    //           <Rating rating={product.rating} numReviews={product.numReviews} />
    //           <div className="price">
    //             <p>Price: ${product.price}</p>
    //             <p>Description: {product.description}</p>
    //           </div>
    //         </div>
    //         <div className="addtocart">
    //           <p>Seller</p>
    //           <p>{product.brand}</p>
    //           <Rating rating={product.rating} numReviews={product.numReviews} />
    //           <p>
    //             Price <span>${product.price}</span>
    //           </p>
    //           <p className="status">
    //             Status{" "}
    //             {product.countInStock > 0 ? (
    //               <span className="text-success text-right">In Stock</span>
    //             ) : (
    //               <span className="text-danger text-right">Unavailable</span>
    //             )}
    //           </p>
    //           <div className="qty">
    //             <div>Qty</div>
    //             <div>
    //               {/* <select
    //                     value={qty}
    //                     onChange={(e) => setQty(e.target.value)}
    //                   >
    //                     {[...Array(product.countInStock.keys())].map((x) => (
    //                       <option key={x + 1} value={x + 1}>
    //                         {x + 1}
    //                       </option>
    //                     ))}
    //                   </select> */}
    //             </div>
    //           </div>
    //           {product.countInStock > 0 && (
    //             <>
    //               <button>Add to Cart</button>
    //             </>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </>

    //   <div className="related container py-3">
    //     <h4>Related Products</h4>
    //     <div className="relateditem">Products</div>
    //   </div>
    // </Wrapper>

    <div className="border-t-2 pt-10 transotion-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-grow">
            <div
              className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll 
            justify-between sm:justify-normal sm:w-[18.7%] w-full"
            >
              {/* {productData.image.map((item, index) => {
                <img
                  onClick={() => setImage(image)}
                  src={item}
                  key={index}
                  alt="item"
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                />;
              })} */}
            </div>
            <div className="w-full sm:w-[80%]">
              <img className="w-full h-auto" src={image} alt="" />
            </div>
          </div>
          {/* Product Info */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={star_icon} alt="star_icon" className="w-3 5" />
              <img src={star_icon} alt="star_icon" className="w-3 5" />
              <img src={star_icon} alt="star_icon" className="w-3 5" />
              <img src={star_icon} alt="star_icon" className="w-3 5" />
              <img src={star_icon} alt="star_icon" className="w-3 5" />
              <img src={star_icon} alt="star_icon" className="w-3 5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
