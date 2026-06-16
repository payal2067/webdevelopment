import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-amber-900  flex justify-between p-3 px-10 ">
        <div className="flex gap-2">
          <FaStore className="text-2xl text-white"/>
            <Link to={"/"} className="text-white hover:underline">Fakrstore</Link>
        </div>
        <div className="flex gap-4 hover:underline">
          <Link to={"/"} className="text-white hover:underline">Home</Link>
          <Link to={"/about"} className="text-white hover:underline">About</Link>
          <Link to={"/contactUs"} className="text-white hover:underline">ContactUS</Link>
          <Link to={"/products"} className="text-white hover:underline">Products</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
 