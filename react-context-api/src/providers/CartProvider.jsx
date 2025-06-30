import { useContext, createContext, useState } from "react";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
