/*

1) Import React and ReactDOM
2) Get reference to the div with ID root
3) Tell React to take control of that element
4) Create a component - moved to ./App.js
5) Show the component on the screen

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './App';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);
function App() {
  let message = "Bye there!";
  if (Math.random() > 0.5) {
    message = "Hello there!";
  }

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  // let message = [1,2,3]; or {} objects can work as props.
  // return <h1>{message}</h1>;
  return (
    <div>
      <h1>{message}</h1>
      <p>Today's date is {currentDate}</p>
      <p>Current time is {currentTime}</p>
    </div>
  )
}

function App2() {
  const name = 'Ricardo Kreyhsig';
  const age = 30;

  return (
    <div>
      My name is: {name} and my age is {age}
    </div>
  );
}

function App3() {

  return (
    <input style={{ border: '1px solid red' }} type="number" min="1" max="4" />
  );
}

function App4() {
  return <textarea readOnly={false} />;
  // return <input maxLength={6} />;
  // return <input spellCheck={true} />;
  // return <div className="my-class" />;
  // return <input style={{ border: '1px solid blue' }}  />;
  // return <input style={{ backgroundColor: 'gray' }} />;
}


root.render(<MyApp />);

