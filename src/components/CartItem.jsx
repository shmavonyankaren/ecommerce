import React from "react";
import Button from "../components/Button";
import Item from "../components/Item";
import { useNavigate } from "react-router-dom";

export default function CartItem({
  removeFunction,
  i,
  changeQuantities,
  item,
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-cener items-center">
        <Button
          className="mr-2 px-3 py-2 text-sm bg-purple-700 text-white font-semibold rounded-lg border border-purple-900 hover:text-white hover:bg-purple-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
          onClick={() => {
            removeFunction(i);
            navigate("/success");
          }}
          title="Buy"
        />
      </div>
      <Item
        className="m-2 mx-2 max-w-[400px] min-w-[400px] max-h-[250px] min-h-[250px] py-8 px-3 pr-[16px] bg-white/[0.90] rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
        key={item.id}
        title={item.title}
        price={item.price}
        category={item.category}
        description={item.description}
        image={item.image}
        btn1ClassName="mr-3 ml-[80px] px-3 py-2 text-sm text-white bg-gray-800 font-semibold rounded-lg border border-gray-900 hover:text-white hover:bg-gray-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        btn2ClassName="hidden px-3 py-2 text-sm bg-purple-800 text-white font-semibold rounded-lg border border-purple-900 hover:text-white hover:bg-purple-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
      />
      <div className="flex justify-cener items-center">
        <Button
          className="ml-2 px-3 py-2 text-sm text-white bg-gray-700 font-semibold rounded-full border border-gray-900 hover:text-white hover:bg-gray-900 hover:border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          onClick={() => {
            removeFunction(i);
            changeQuantities("dec");
          }}
          title="X"
        />
      </div>
    </>
  );
}
