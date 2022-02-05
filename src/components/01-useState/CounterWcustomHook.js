import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWcustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(10);
  return (
    <>
      <h1>Counter with custom hook {counter}</h1>
      <hr />
      <button className="btn btn-secondary" onClick={() => decrement(1)}>
        -1
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => increment(5)}>
        +1
      </button>
    </>
  );
};
