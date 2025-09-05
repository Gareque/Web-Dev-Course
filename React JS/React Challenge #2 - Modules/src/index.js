import React from "react";
import ReactDOM from "react-dom";
import pi from "./math";
import { piDouble, piTriple } from "./math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{piDouble()}</li>
    <li>{piTriple()}</li>
  </ul>,
  document.getElementById("root")
);
