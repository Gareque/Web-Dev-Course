import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  const [backgroundColor, setBackgroundColor] = useState("white");

  function clicked() {
    setHeadingText("Submitted");
  }

  function mouseOver() {
    setBackgroundColor("black");
  }

  function mouseOut() {
    setBackgroundColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor }}
        onClick={clicked}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
