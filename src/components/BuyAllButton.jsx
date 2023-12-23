import React from "react";
import { NavLink } from "react-router-dom";

export default function BuyAllButton({
  setQuantities,
  setProducts,
  totalPrice,
}) {
  return (
    <div className="text-white fixed min-w-full flex justify-center bottom-0	  mt-4 border-t-[1.8px] border-gray-800 bg-gray-900">
      <h3 className="mt-3">Total Price : {totalPrice} $ </h3>
      <NavLink to={"/success"}>
        <button
          className="ml-[20px] mt-[10px] px-4 py-[10px] text-sm text-white bg-purple-800 font-semibold rounded-lg border border-purple-900 hover:text-white hover:bg-purple-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
          onClick={() => {
            setQuantities(0);
            setProducts([]);
          }}
        >
          Buy all
        </button>
      </NavLink>
    </div>
  );
}
