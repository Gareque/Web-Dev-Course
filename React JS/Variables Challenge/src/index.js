import React from "react";
import ReactDOM from "react-dom";

const fName = "Mike";
const sName = "Hothersall";
const lNumber = 13;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {sName}!
    </h1>
    <p>Your lucky number is: {lNumber}</p>
  </div>,
  document.getElementById("root")
);
