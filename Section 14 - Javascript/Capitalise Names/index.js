//Change name to upper/lower case
var myName = prompt("Enter your name");
var initial = myName.slice(0,1);
var restOfName = myName.slice(1,myName.length);
var fullName = initial.toUpperCase() + restOfName.toLowerCase();
alert("Hello, " + fullName);

//Dog age:
var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;

alert("Your dog is " + humanAge + " in human years!");

//Info Code for Course:
function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }


//love calculator

var n = Math.random();
n = Math.floor(n * 6) + 1;
console.log(n);

