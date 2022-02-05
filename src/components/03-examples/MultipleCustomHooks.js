import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const bbUrl = "https://www.breakingbadapi.com/api/";
  const bbPostFix = "quotes/";
  const quote = 1;
  const { counter, increment, decrement, reset } = useCounter(quote);
  const { data, loading, error } = useFetch(bbUrl + bbPostFix + counter);
  const { author, quote: phrase } = !!data && data[0];
  return (
    <div>
      <h1>Breaking Bad quotes</h1>
      <br />
      {loading && (
        <div className="alert alert-info text-center">Loading...</div>
      )}
      {data && (
        <>
          <blockquote className="blockquote text-right">
            <p className="mb-0">{phrase}</p>
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
      {error && "Hubo un error en la petición ):"}
    </div>
  );
};
