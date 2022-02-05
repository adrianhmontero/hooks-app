import React, { useMemo, useState } from 'react';
import { largeProcess } from '../../helpers/largeProcess';
import { useCounter } from '../../hooks/useCounter';

const MemoHook = () => {
   const {counter, increment} = useCounter(1000);
   const [show, setShow] = useState(false);

   // useMemo me permite identificar cuando es necesario volver a memorizar un valor con base en el arreglo de
   // dependencias
   const largeProcessMemo = useMemo(() => largeProcess(counter), [counter]);

  return <>
    <h3>MemoHook: <small>{counter}</small></h3>
    <hr />
    <p>{largeProcessMemo}</p>
    <button onClick={()=>setShow(!show)}>{!show?'Show':'Hide'}</button>
    {show && <button onClick={()=>increment()}>+1</button>}
  </>;
};

export default MemoHook;