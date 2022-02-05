import React, { useState } from "react";

export const CounterApp = () => {
  const [{ c1, c2 }, setCounter] = useState({ c1: 10, c2: 0 });
  return (
    <>
      <h1>Counter 1 : {c1}</h1>
      <h1>Counter 2: {c2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setCounter((prev) => ({ ...prev, c1: prev?.c1 + 1 }))}
      >
        c1 +1
      </button>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setCounter((prev) => ({ ...prev, c2: prev?.c2 + 1 }))}
      >
        c2 +1
      </button>
    </>
  );
};
