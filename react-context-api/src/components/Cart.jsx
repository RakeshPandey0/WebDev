import React from "react";
import { useCart } from "../providers/CartProvider";
export const Cart = () => {
  const { items } = useCart();
  const total = items.reduce((prev, total) => prev + total.price, 0);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {items &&
        items.map((item, index) => (
          <li key={index}>
            {item.name}-${item.price}
          </li>
        ))}
      <h5>Total - ${total}</h5>
    </div>
  );
};
