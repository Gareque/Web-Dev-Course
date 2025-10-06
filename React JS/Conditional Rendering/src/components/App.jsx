import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// Using the normal way through a function,
// it would look like this:
//function renderConditionally() {
//  if (isLoggedIn === true) {
//    return <h1>Hello</h1>;
//  } else {
//    return <Login />;
//  }
//}

//function App() {
//  return <div className="container">{renderConditionally()}</div>;
//}

//To use a Ternary Operator however, you can use:
//function App() {
//  return (
//    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
//  );
//}

// The Ternary Operator works as follows:
// CONDITION ? DO IF TRUE : DO IF FALSE
// In the above example:
// // CONDITION = isLoggedIn === true
// // DO IF TRUE = H1
// // DO IF FALSE = Login Function

// To show something based of something like time:

// const currentTime = new Date(2025, 11, 1, 19).getHours();

var x = 5;
var y = 10;

function App() {
  return (
    <div className="container">
      {x > 10 || y < 15 ? <h1>Why are you still working?</h1> : null}
    </div>
  );
}

export default App;
