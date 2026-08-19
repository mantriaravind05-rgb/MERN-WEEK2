// Counter.js
import React, { useState } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
