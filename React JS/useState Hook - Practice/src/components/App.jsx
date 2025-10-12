import React, { useState } from "react";

let now = new Date().toLocaleTimeString();

function App() {
  setInterval(getTime, 1000);

  let [time, setTime] = useState(now);
  console.log(time);

  function getTime() {
    setTime((time = new Date().toLocaleTimeString()));
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
