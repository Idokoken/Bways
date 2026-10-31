import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config/API";
import { toast } from "react-toastify";
import parcel_icon from "../assets/parcel.png";
import { currency } from "../App";
import { data } from "react-router-dom";

function Orders({ token }) {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const { data } = await axios.post(
        `${BASE_URL}/order/list`,
        {},
        { headers: { token } },
      );
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/order/status`,
        { orderId, status: event.target.value },
        { headers: { token } },
      );
      if (data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      {orders.map((order, index) => {
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-3 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
        >
          <img src={parcel_icon} alt="" className="w-12" />
          <div className=""></div>
          <div>
            {order.items.map((item, index) => {
              if (index == order.items.length - 1) {
                return (
                  <p key={index} className="py-0.5">
                    {item.name} x {item.quantity} <span>{item.size}</span>
                  </p>
                );
              } else {
                return (
                  <p key={index} className="py-0.5">
                    {item.name} x {item.quantity} <span>{item.size}</span>,
                  </p>
                );
              }
            })}
          </div>
          <p className="mt-3 mb-2 font-medium">
            {order.address.firstName + " " + order.address.lastName}
          </p>
          <div>
            <p>{order.address.street + ","}</p>
            <p>
              {order.address.city +
                "," +
                order.address.state +
                "," +
                order.address.country +
                "," +
                order.address.zipcode +
                ","}
            </p>
          </div>
          <p>{order.address.phone}</p>
          <div className="text-sm sm:text-[15px]">
            <p className="mt-3">Items: {order.items.length}</p>
            <p>Method: {order.paymentMethod}</p>
            <p>Payment: {order.payment ? "Done" : "Pending"}</p>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
          </div>
          <p className="text-sm sm:text-[15px]">
            {currency}
            {order.amount}
          </p>
          <select
            onChange={(e) => statusHandler(e, order._id)}
            value={order.status}
            className="p-2 font-semibold"
          >
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Deliverd">Delivered</option>
          </select>
        </div>;
      })}
      Orders
    </div>
  );
}

export default Orders;
