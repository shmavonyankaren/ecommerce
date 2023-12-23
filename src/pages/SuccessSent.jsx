import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { runFireWorks } from "../services/CanvasAnimation";

export default function SuccessSent() {
  useEffect(() => {
    runFireWorks();
  }, []);

  return (
    <div className="min-h-[60vh]">
      <div className="w-[1000px] h-[400px] ml-[14%] mt-[100px] bg-slate-200 p-[50px] rounded-2xl	flex justify-center items-center flex-col">
        <h2 className="capitalize mt-[15px] font-semibold text-[40px] text-gray-700">
          Thank you for your message!{" "}
        </h2>
        <h3 className=" text-center capitalize mt-[15px] font-semibold text-gray-700">
          We'll try to respond as quickly as possible, it may take 1-2 business
          days for a response
        </h3>
        <NavLink to="/contact">
          <button
            type="button"
            width="300px"
            className="ml-[20px] mt-[10px] px-4 py-[10px] text-sm text-white bg-purple-800 font-semibold rounded-lg border border-purple-900 hover:text-white hover:bg-purple-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
          >
            Anything else?
          </button>
        </NavLink>
      </div>
    </div>
  );
}
