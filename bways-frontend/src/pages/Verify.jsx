import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../config/api";
import axios from "axios";

function Verify() {
  const { navigate, token, setCartItems } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async()=> {
try {
  if(!token){
    return null;
  }
  const { data } = await axios.post(
            `${BASE_URL}/order/verifystripe`,
            {success, orderId},
            {
              headers: { token },
            },
          );
  if(data.success){
    setCartItems({})
    navigate('/orders')
  }else{
    navigate('/cart')
  }
} catch (error) {
  console.log(error)
  toast.error(error.message)
}
  }

  useEffect(() => {
    verifyPayment()
  }, [token])
  

  return <div>Verify</div>;
}

export default Verify;
 