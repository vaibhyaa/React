import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    // <header className="flex items-center justify-between bg-yellow-500 uppercase px-4 py-3 border-b border-stone-600 sm:px-6">
    //   {/* tracking-widest */}
    //   <Link to={"/"} className="tracking-[5px]">
    //     Fast React Pizza Co.
    //   </Link>
    //   <SearchOrder />
    //   {/* <p>Vaibhav</p> */}
    //   <UserName />
    // </header>

    <header className="flex items-center justify-between border-b border-stone-600 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      {/* Logo */}
      <Link
        to="/"
        className="text-sm font-bold tracking-[5px] text-stone-800 hover:text-stone-900 transition-colors"
      >
        Fast React Pizza Co.
      </Link>

      {/* Search */}
      <SearchOrder />

      {/* Username */}
      <UserName />
    </header>
  );
};

export default Header;
