import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireWorks } from "../services/CanvasAnimation";

export default function Success({ setQuantities, setProducts }) {
  useEffect(() => {
    runFireWorks();
  }, []);

  return (
    <div className="min-h-[60vh]">
      <div className="w-[1000px] h-[400px] ml-[14%] mt-[100px] bg-slate-200 p-[50px] rounded-2xl	flex justify-center items-center flex-col">
        <p className="text-green-500 text-[40px]">
          <BsBagCheckFill />
        </p>
        <h2 className="capitalize mt-[15px] font-semibold text-[40px] text-gray-700">
          Thank you for your orders!
        </h2>
        <p className="text-[16px] font-semibold text-center m-[10px] mt-[30px]">
          If you have any questions, please email
          <a
            className="ml-[5px] text-red-600"
            href="mailto:karen.shmavonyan.2020@mail.ru"
          >
            karen.shmavonyan.2020@mail.ru
          </a>
        </p>
        <NavLink to="/products">
          <button
            type="button"
            width="300px"
            className="ml-[20px] mt-[10px] px-4 py-[10px] text-sm text-white bg-purple-800 font-semibold rounded-lg border border-purple-900 hover:text-white hover:bg-purple-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
          >
            Continue Shopping
          </button>
        </NavLink>
      </div>
    </div>
  );
}
