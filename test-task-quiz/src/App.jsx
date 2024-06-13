import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [time, setTime] = useState(
    JSON.parse(localStorage.getItem("time")) || 0
  );
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    startTimer &&
      setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
  }, [startTimer]);

  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(time));
  }, [time]);

  function resetTimer() {
    setTime(0);
  }

  console.log(time);

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={() => setStartTimer((prev) => !prev)}>
        Start timer
      </button>
      <button onClick={resetTimer}>Reset timer</button>
    </div>
  );
}

export default App;
