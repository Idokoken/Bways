import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/API";
import { currency } from "../App";

function ListProduct({ token }) {
  const [list, setList] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`);
      setList(data.products);
      console.log(data.products);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const { data } = await axios.delete(
        `${BASE_URL}/products/${id}`,
        { id },
        { headers: { token } },
      );
      toast.success(data.message);
      await fetchProducts();

      console.log(data.products);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* .....List Table Title..... */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* ......Product List..... */}
        {list.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
          >
            <img src={item.image[0]} alt="product image" className="w-12" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <p
              onClick={() => removeProduct(item._id)}
              className="text-right md:text-center cursor-pointer text-lg"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListProduct;
