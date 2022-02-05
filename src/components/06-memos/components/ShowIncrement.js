import React, { memo } from 'react';

const ShowIncrement = memo(({ increment }) => {
    console.log('ME regeneré >:)')
  return <button onClick={()=>increment(5)}>Increment</button>;
});

export default ShowIncrement;
