import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const countIncrease = () => {
    count++;
    console.log(count);
    setCount(count);
  };
  const countDecrease = () => {
    count--;
    console.log(count);
    setCount(count);
  };

  if (count < 0) {
    count = 0;
    setCount(count);
  }

  return (
    <div className="contents">
      <h1 className="heading">Counter App</h1>
      <span className="number">{count}</span>
      <div className="buttons">
        <button className="btn" onClick={countIncrease}>
          +
        </button>
        <button className="btn" onClick={countDecrease}>
          -
        </button>
      </div>
      <p className="notice">
        <span className="note">Note: </span>You cannot go below 0
      </p>
    </div>
  );
}

export default App;
