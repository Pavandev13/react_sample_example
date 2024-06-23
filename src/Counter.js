import React, { useState, useRef } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);

  const startCounter = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setCounter((pre) => pre + 1);
      }, 1000);
    }
  };

 

  const pauseCounter = () => {
    if (intervalRef.current != null) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetCounter = () => {
    pauseCounter();
    setCounter(0);
  };
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button className="button" onClick={startCounter}>
        Start
      </button>
      <button className="button" onClick={pauseCounter}>
        Pause
      </button>
      <button className="button" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}

export default App;
