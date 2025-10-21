import React, { useState } from "react";

function App() {
  const [list, setList] = useState(["First", "Second"]);
  const [item, setItem] = useState("");

  function handleCheck(event) {
    setItem(event.target.value);
  }

  function addItem() {
    setList((prevValue) => {
      return [...prevValue, item];
    });
    setItem(""); //Clearing the input
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleCheck} name="item" type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
