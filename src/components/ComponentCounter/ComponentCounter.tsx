import React, { useState } from 'react';

const ComponentCounter = () => {
  
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className='contador'>
      <h1>Counter: {count}</h1>
      <div className='container-botones'>
      <button className='botones' onClick={increment}>Incrementar</button>
      <button className='botones' onClick={decrement}>Decrementar</button>
      </div>
    </div>
  );
};
export default ComponentCounter