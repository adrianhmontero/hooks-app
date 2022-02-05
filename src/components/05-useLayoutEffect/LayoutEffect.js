import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const LayoutEffect = () => {
  const bbUrl = "https://www.breakingbadapi.com/api/";
  const bbPostFix = "quotes/";
  const quote = 1;
  const { counter, increment, decrement, reset } = useCounter(quote);
  const { data, error } = useFetch(bbUrl + bbPostFix + counter);
  const { author, quote: phrase } = !!data && data[0];

  const phraseRef = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(phraseRef?.current?.getBoundingClientRect())
  }, [phrase]);

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <br />
      {data && (
        <>
          <blockquote className="blockquote text-right">
            <p ref={phraseRef} className="mb-0">{phrase}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
          {counter >= 0 && (
            <button key="back" onClick={() => decrement()}>
              back
            </button>
          )}
          <button key="restart" onClick={reset}>
            restart
          </button>
          <button key="next" onClick={() => increment()}>
            next
          </button>
        </>
      )}
      <pre>
          {JSON.stringify(boxSize, null, 3)}
      </pre>
      {error && "Hubo un error en la petición ):"}
    </div>
  );
};
