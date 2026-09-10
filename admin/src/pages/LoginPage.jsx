import React, { useState } from "react";
import { styled } from "styled-components";
// import styled from "styled-components";
import { tablet } from "../Responsive";
import { BASE_URL } from "../config/API";
import axios from "axios";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
  }
`;

function LoginPage({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(BASE_URL);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resp = await axios.post(`${BASE_URL}/auth/admin`, {
        email,
        password,
      });
      if (resp.data.success) {
        setToken(resp.data.token);
        toast.success(resp.data.message);
        console.log(resp.data.message);
      } else {
        toast.error(resp.data.message);
        console.log(resp.data.success);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      // toast.error(error.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <Wrapper className="min-h-screen flex items-center justify-center w-full">
        <div className="bg-white showdow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 min-w-72">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Email Address
              </p>
              <input
                className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
                type="email"
                required
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="password"
              />
            </div>
            <div className="mb-3 min-w-72">
              <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
              <input
                className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
              />
            </div>
            <button className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black">
              Login
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}

export default LoginPage;
