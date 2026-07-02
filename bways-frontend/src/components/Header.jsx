import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import brand from "../assets/brand.png";
import menu from "../assets/menu.png";
import profile from "../assets/profile.png";
import search from "../assets/search.png";
import shopping_cart from "../assets/shopping_cart.png";
import back_arrow_icon from "../assets/arrow_back.png";
import forward_arrow from "../assets/arrow_forward.png";
import { ShopContext } from "../context/ShopContext";

function Header() {
  const [visible, setVisible] = useState(false);

  const { setShowSearch } = useContext(ShopContext);

  return (
    <header className="flex items-center justify-between py-5 font-medium px-5">
      {/* <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={brand}
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2"
              style={{ borderRadius: "50%" }}
            />
            Bways
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <i className="fa fa-shopping-cart me-1 "></i>
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                  signin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  signup
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Link to="/">
        <img src={brand} alt="brand-icon" className="w-[50px] h-[50px]" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-grey-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/about-us" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/contact-us" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
      </ul>
      <div className="flex item-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={search}
          alt="search-icon"
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            src={profile}
            alt="profile-icon"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-grey">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={shopping_cart} alt="cart-icon" className="w-5 min-w-5" />
          <p
            className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white 
          aspect-square rounded-full text-[8px]"
          ></p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={menu}
          alt="menu-icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* SideBar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transsition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img
              src={forward_arrow}
              alt="dropdown icon"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="px-2 pl-6 border"
            to={`/`}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="px-2 pl-6 border"
            to={`/collection`}
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="px-2 pl-6 border"
            to={`/about-us`}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="px-2 pl-6 border"
            to={`/conatact-us`}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
