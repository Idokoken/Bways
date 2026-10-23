import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../Responsive";
import brand from "../assets/brand.png";
import axios from "axios";
import { api, BASE_URL } from "./../config/api";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  // width: 100vw;
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // font-family: "Poppins", sans-serif;
  // background-color: #000000;
`;

function Login() {
  const [currentState, setCurrentState] = useState("Login");

  const { token, setToken, navigate } = useContext(ShopContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const { data } = await axios.post(`${BASE_URL}/auth/register`, {
          username,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
          console.log(data.message);
        } else {
          toast.error(data.message);
          console.log(data.message);
        }
      } else {
        const { data } = await axios.post(`${BASE_URL}/auth/login`, {
          email,
          password,
        });
        console.log(data);
        if (data.success) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Wrapper>
      <div className="content">
        {/* <div className="head">
          <img src={brand} alt="brand" width="50" height="50" />
          <h3 className="my-2">
            {currentState === "Login" ? "Login" : "Sign Up"}
          </h3>
        </div> */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-2xl"
        >
          <div className="inline-flex items-center gap-2 mt-10 mb-2">
            <p className="prata-regular text-3xl ">{currentState}</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
          {currentState === "Login" ? (
            ""
          ) : (
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-800"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}

          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer">Forgot your Password ?</p>
            {currentState === "Login" ? (
              <p
                className="cursor-pointer"
                onClick={() => setCurrentState("Sign Up")}
              >
                Create Account
              </p>
            ) : (
              <p
                className="cursor-pointer"
                onClick={() => setCurrentState("Login")}
              >
                Login Here
              </p>
            )}
          </div>
          <button className="bg-black text-white font-light px-8 py-2 mt-2">
            {currentState === "Login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Login;
