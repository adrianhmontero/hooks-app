import React, { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log(value);
  return <small>{value}</small>;
});
