import { useContext, createContext, useState } from "react";
import React from "react";

const CountContext = createContext(null);

export const useCount = () => {
  return useContext(CountContext);
};

export const CountProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {props.children}
    </CountContext.Provider>
  );
};
