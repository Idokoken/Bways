import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import bin_icon from "../assets/bin_icon.png";
import CartTotal from "../components/CartTotal";

const Wrapper = styled.div`
  margin: 0;
  padding: 10px;
  min-height: 50vh;
  background-image: linear-gradient(
    to bottom right,
    rgba(92, 122, 169, 1),
    white,
    white,
    rgba(92, 122, 169, 1)
  );

  .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    ${tablet({ flexDirection: "row" })}
  }
  .cart {
    flex: 100%;
    background: linear-gradient(159.48deg, #37ac97 26.53%, #ffffff 71.2%);
    /* box-shadow: 4px 4px 5px 5px rgba(0, 0, 0, 0.25); */
    color: black;
    ${tablet({ flex: "70%" })}
  }
  .cart-items {
    display: grid;
    grid-template-columns: 20% 30% 15% 15% 20%;
    place-content: center;
    padding: 5px;
    z-index: 10;
  }
  .summary {
    flex: 100%;
    background-color: aliceblue;
    padding: 20px;
    ${tablet({ flex: "30%", alignSelf: "center" })}
  }
  .img-container {
    height: 50px;
    width: 50px;
  }
  img {
    height: 100%;
    width: 100%;
    border: 2px solid #ffffff;
    border-radius: 10px;
  }
  .del {
    height: 40px;
    ${tablet({ marginRight: "20px" })}
  }
  input {
    width: 40px;
    height: 35px;
  }
  .cart p {
    align-self: center;
  }
  h2 {
    color: rgba(30, 51, 187, 1);
    margin: 20px 0;
  }
`;

function Cart(props) {
  // const productId = props.match.params.id;
  // const qty = props.location.search ? Number(props.location.split("=")[1]) : 1;
  const { getCartCount, products, currrency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
    // console.log(tempData);
  }, [cartItems]);

  return (
    <>
      {/* <Wrapper> */}
      {/* <h2>Cart screen</h2> */}
      {/* <p>
          ADD TO CART: productID: {productId} Qty: {qty}
        </p> */}
      {/* <div className="content">
          <div className="cart">
            <div className="cart-items">
              <div className="img-container">
                <img src="images/items/project1.jpg" alt="product icon" />
              </div>
              <p className="name">Name of item</p>
              <input type="number" />
              <p className="price">$904</p>
              <button className="btn btn-danger del">Delete</button>
            </div>
            <div className="cart-items">
              <div className="img-container">
                <img src="/images/items/project2.jpg" alt="product icon" />
              </div>
              <p className="name">Name of item</p>
              <input type="number" />
              <p className="price">$904</p>
              <button className="btn btn-danger del">Delete</button>
            </div>
          </div>
          <div className="summary">
            <p className="total">
              Subtotal(9 items): $<span>180</span>
            </p>
            <button className="btn btn-info">Proceed to Checkout</button>
          </div>
        </div> */}
      {/* </Wrapper> */}
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div className="">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id == item._id,
            );
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] 
                sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="felx items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt="product"
                  />
                  <div className="">
                    <p className="text-xs sm-text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currrency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                        {productData.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  className="border max-w-10 sx:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Nymber(e.target.value),
                        )
                  }
                />
                <img
                  src={bin_icon}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  alt="bin_icon"
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button className="bg-black text-white text-sm my-8 px-6 py-3">
                PROCCED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
