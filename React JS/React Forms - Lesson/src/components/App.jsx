import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setUserInput(event.target.value);
  }

  function handleClick(event) {
    setHeading(userInput);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={userInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
