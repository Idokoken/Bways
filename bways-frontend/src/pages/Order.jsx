import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { BASE_URL } from "../config/api";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  margin: 0;
  padding: 10px;
  min-height: 50vh;
`;

function Order() {
  const { currency, delivery_fee, token } = useContext(ShopContext);

  const [orderData, setOrderdata] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const { data } = await axios.post(
        `${BASE_URL}/orders/userorders`,
        {},
        { headers: { token } },
      );
      if (data.success) {
        let allOrderItems = [];
        data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrderItems.push(item);
          });
        });
        setOrderdata(allOrderItems.reverse());
      }

      // console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <>
      <Wrapper>
        <div className="border-t pt-16">
          <div className="text-2xl">
            <Title text1={`MY`} text2={`ORDERS`} />
          </div>
          <div className="">
            {orderData.map((item, index) => (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex item-start gap-6 text-sm">
                  <img src={item.image[0]} alt="" className="w-16 sm:w-20" />
                  <div>
                    <p className="sm:text-base font-medium">{item.name}</p>
                    <div className="flex items-center gap-3 mt-2 text-base text-gray">
                      <p className="text-lg">
                        {currency}
                        {item.price}
                      </p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className="mt-2">
                      Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                    </p>
                     <p className="mt-2">
                      Payment: <span className="text-gray-400">{item.paymentMethod}</span>
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                    <p className="text-sm md:text-base">{item.status}</p>
                  </div>
              <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm">
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>

      <Footer />
    </>
  );
}

export default Order;
