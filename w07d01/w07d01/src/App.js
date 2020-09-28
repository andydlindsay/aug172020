import React from 'react';
import './App.css';
import Counter from './components/Counter';

const App = () => {
  const [message, setMessage] = React.useState('hello from the parent');

  return (
    <div className="App">
      <h1>Hello from React!</h1>

      <Counter parentMessage={ message } setMessage={ setMessage }>
        <div>
          <h2>Does this work?</h2>
        </div>
        <h2>More stuff</h2>
      </Counter>

      <Counter />
    </div>
  );
};

export default App;
