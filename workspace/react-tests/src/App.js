import React from 'react'
import Counter from './components/Counter';

const MyComponent = () => {
  return (
    <div>
      <h2>Hi from MyComponent</h2>
    </div>
  );
}

const App = () => {
 
  return (
    <>
    <Counter /> 
    </>
  );
}

export default App;