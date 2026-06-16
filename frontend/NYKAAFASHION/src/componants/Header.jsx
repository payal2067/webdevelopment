import React from "react";
import { Link } from "react-router-dom";
import nykaafashion from "../assets/nykaafashion.png";

const Header = () => {
  return (
    <>
      <div className="  flex justify-between p-3 px-10 border-2 shadow-amber-50 top-0 z-50 sticky bg-white border-amber-600 ">
        <div className="text-2xl">
          <img src={nykaafashion} alt="NykaaFashion" />
        </div>
        <div className="flex gap-6 hover:underline">
          <Link
            to={"/"}
            className="text-black hover:underline hover:text-amber-600"
          >
            Home
          </Link>
          <Link
            to={"/Men"}
            className="text-black hover:underline hover:text-amber-600"
          >
            Men
          </Link>
          <Link
            to={"/Women"}
            className="text-black hover:underline hover:text-amber-600"
          >
            Women
          </Link>
          <Link
            to={"/Kids"}
            className="text-black hover:underline hover:text-amber-600"
          >
            Kids
          </Link>
          <Link
            to={"/Products"}
            className="text-black hover:underline hover:text-amber-600"
          >
            Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
