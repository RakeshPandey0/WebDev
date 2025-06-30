import React from "react";
import { useCart } from "../providers/CartProvider";
export const Item = (props) => {
  const { items, setItems } = useCart();
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Price:$ {props.price}</h3>
      <button
        onClick={() =>
          setItems([...items, { name: props.name, price: props.price }])
        }
      >
        Add to cart
      </button>
    </div>
  );
};
