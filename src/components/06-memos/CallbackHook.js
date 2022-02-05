import React, { useCallback, useState } from 'react';
import ShowIncrement from './components/ShowIncrement';

const CallbackHook = () => {
    const [counter, setCounter] = useState(1),
    [show, setShow]=useState(true);

    const increment = useCallback(num => {
        setCounter(prev => prev + num);
    }, [setCounter]);

  return <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <button onClick={()=> setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <ShowIncrement increment={increment} />}
  </div>;
};

export default CallbackHook;
