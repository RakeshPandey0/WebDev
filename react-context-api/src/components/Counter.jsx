import React from "react";
import { useCount } from "../providers/CountProvider";
const Counter = () => {
  const { count, setCount } = useCount();
  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
