import React from 'react';

const Counter = (props) => {
  const [count, setCount] = React.useState({ internalCount: 0 });

  const clickHandler = () => {
    props.setMessage(`the old value for count is ${count.internalCount}`);
    setCount({ internalCount: count.internalCount + 1 });
  };

  return (
    <>
      <h2>Hello from Counter</h2>
      <h4>Parent message: { props.parentMessage }</h4>
      <h2>Counter: { count.internalCount }</h2>
      <button onClick={ clickHandler }>Increment</button>
      <button onClick={ () => setCount(count + 1) }>Increment</button>

      { props.children }
    </>
  );
};

export default Counter;
