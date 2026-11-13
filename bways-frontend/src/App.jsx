import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import Orders from "./pages/Order";
import Verify from "./pages/Verify";
import Collection from "./components/Collection";
import PlaceOrder from "./components/PlaceOrder";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Faq from "./pages/Faq";
import CookiePolicy from "./pages/CookiePolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import Career from "./pages/Career";

import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ToastContainer />
      {/* <Header /> */}
      <SearchBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/collection" element={<Collection />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<SingleProduct />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
