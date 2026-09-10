import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Orders from "./pages/Orders";
import ListProduct from "./pages/ListProduct";
import AddProduct from "./pages/AddProduct";
import ScrollToTop from "./ScrollToTop";
import AdminHome from "./AdminHome";
import SideBar from "./components/SideBar";
import { ToastContainer } from "react-toastify";

export const currency = "$";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : "",
  );
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <LoginPage setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <SideBar />
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/" element={<AdminHome />} />
                <Route path="/signin" element={<LoginPage />} />
                <Route path="/orders" element={<Orders token={token} />} />
                <Route path="/add" element={<AddProduct token={token} />} />
                <Route path="/list" element={<ListProduct token={token} />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
