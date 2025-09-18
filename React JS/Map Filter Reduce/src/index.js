var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}

var newNumber = numbers.map(double);
console.log(newNumber);

var newNumber = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.

var newNumber = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(newNumber);

newNumber = numbers.filter(function (num) {
  return num > 10;
});

console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.

var newNumber = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(newNumber);

//Find - find the first item that matches from an array.
var newNumber = numbers.find(function (num) {
  return num > 10;
});

console.log(newNumber);

//FindIndex - find the index of the first item that matches.
var newNumber = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(newNumber);

import emojipedia from "./emojipedia";

const newEmoji = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmoji);
