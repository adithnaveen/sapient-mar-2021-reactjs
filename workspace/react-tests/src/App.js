import React from 'react'

const MyComponent = () => {
  return (
    <div>
      <h2>Hi from MyComponent</h2>
    </div>
  );
}

const App = () => {

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

export default App;