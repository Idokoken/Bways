import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import search_icon from "../assets/search.png";
import close_icon from "../assets/close_icon.png";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    // console.log(location.pathname);
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div
        className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 
         rounded-full w-3/4 sm:w-1/2"
      >
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          className="inline w-4 cursor-pointer"
          src={search_icon}
          alt="search_icon"
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={close_icon}
        alt="close_icon"
      />
    </div>
  ) : null;
}

export default SearchBar;
