import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//Traditional way of doing functions:
const newNumber = numbers.map(function (x) {
  return x * x;
});

console.log(newNumber);

// Arrow Function way of doing this if there are 2 values:
const newNumber = numbers.map( (x, y) => x * y);

console.log(newNumber);

// If the value is singular, you can remove the parenthesis around the accepted values as well:
const newNumber = numbers.map(x => x * x;);

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map( x => x * 2);

console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
const newNumbers = numbers.filter( num => num < 10);

console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

console.log(newNumber);

////Find - find the first item that matches from an array.
const newNumber = numbers.find(num => num > 10);

console.log(newNumber);

////FindIndex - find the index of the first item that matches.
const newNumber = numbers.findIndex( num => num > 10);

console.log(newNumber);
