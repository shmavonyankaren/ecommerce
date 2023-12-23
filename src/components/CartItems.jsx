import React from "react";
import BuyAllButton from "./BuyAllButton";
import CartItem from "./CartItem";

export default function CartItems({
  products,
  changeQuantities,
  removeFunction,
  setProducts,
  setQuantities,
  totalPrice,
}) {
  return (
    <div>
      {products.map((item, i) => {
        return (
          <div
            key={item.id}
            className="mb-[10px] flex justify-center overflow-hidden"
          >
            <CartItem
              removeFunction={removeFunction}
              i={i}
              changeQuantities={changeQuantities}
              item={item}
            />
          </div>
        );
      })}
      <BuyAllButton
        setQuantities={setQuantities}
        setProducts={setProducts}
        totalPrice={totalPrice}
      />
    </div>
  );
}
