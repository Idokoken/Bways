import React from "react";
import { Link } from "react-router-dom";
import { assets } from "./../assets/assets";

function Navbar({setToken}) {
  return (
    <>
      <div className="flex items-center py-2 px-[4%] justify-between">
        <Link className="navbar-brand" to="/">
          <img
            src={assets.brand}
            alt="brand"
            width="30"
            height="30"
            className="w-[max-(10%, 80px)]"
            style={{ borderRadius: "50%" }}
          />
          Bways
        </Link>
        <button onClick={() => setToken('')} className="bg-gray-600  text-white px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm">
          Logout
        </button>
      </div>
    </>
  );
}

export default Navbar;
