import React from "react";
import { NavLink } from "react-router-dom";

export default function ToProducts() {
  return (
    <div className="ml-[37%] flx justify-center">
      <h2>Add some products here</h2>
      <NavLink to={"/products"}>
        <button className="ml-[10%] px-4 py-[10px] text-sm text-white bg-gray-800 font-semibold rounded-lg border border-gray-900 hover:text-white hover:bg-gray-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
          {"->"} Go to Products
        </button>
      </NavLink>
    </div>
  );
}
