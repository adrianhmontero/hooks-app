import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import {Small} from './components/Small';

const Memorize = () => {
   const {counter, increment} = useCounter();
   const [show, setShow] = useState(false);
  return <>
    <h1>Memorize: <Small value={counter} /></h1>
    <hr />
    {show && <button onClick={()=>increment()}>+1</button>}
    <button onClick={()=>setShow(!show)}>{!show?'Show':'Hide'}</button>
  </>;
};

export default Memorize;