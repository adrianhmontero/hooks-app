import { useState } from "react";

export const useCounter = (value = 10) => {
  const [counter, setCounter] = useState(value);
  const increment = (factor = 1) => setCounter((prev) => prev + factor);
  const reset = () => setCounter(value);
  const decrement = (factor = 1) => setCounter((prev) => prev - factor);

  return { counter, increment, decrement, reset };
};
