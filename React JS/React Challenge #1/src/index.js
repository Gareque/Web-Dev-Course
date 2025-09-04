//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

function currentTime() {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

function colorScheme() {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return { color: "red" };
  } else if (currentHour >= 12 && currentHour < 18) {
    return { color: "green" };
  } else {
    return { color: "blue" };
  }
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={colorScheme()}>
      {" "}
      {currentTime()}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
