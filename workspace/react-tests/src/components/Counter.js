import React from 'react'

const Counter = () => {

    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <h2>First Test React App</h2>
        <h3 id="counter-value">{count}</h3>
        <button id="incr-btn" onClick={() => { setCount(count + 1) }}>Increment</button>
        <button id="decr-btn" onClick={() => { setCount(count - 1) }}>Decrement</button>
      </div>
    );
  }
  
  export default Counter;