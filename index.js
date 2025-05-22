// Sample code for challenges completed:

// How to add numbers within an array:
function sum (numbers) {
      return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

/* 
accumulator adds the values processed so far

currentValue provides the current element of the array that's being processed

'accumulator + currentValue, 0' starts this off at 0, then adds the current element, stores it in the accumulator, then continues adding the array elements until it gets to the end, providing the final result.

*/

------------------------------------------

// FizzBuzz game:

var output = [];
var count = 1;

function fizzBuzz() {
       
    console.log(output);


    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } 
    
    else if (count % 3 === 0) {
        output.push("Fizz");
    } 
    
    else if (count % 5 === 0) {
        output.push("Buzz");
    } 
    
    else {
        output.push(count);
    }
    count++;
}

fizzBuzz()

------------------------------------------

// Whos Paying for lunch challenge:

// My answer:
function whosPaying(names) {
    
  /******Don't change the code above*******/
      
      // Write your code here.
      var numberOfPeople = names.length
      var output = numberOfPeople[Math.floor(Math.random() * numberOfPeople.length)];
      
      return `${output} is going to buy lunch today!`;
  /******Don't change the code below*******/    
  }

  // This isn't working and cannot figure out why.  Challenge answer:
  function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
           var numberOfPeople = names.length;
           var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
           var randomPerson = names[randomPersonPosition];
            
           return randomPerson + " is going to buy lunch today!";
    /******Don't change the code below*******/    
    }


    // Breaking this down:

    // Establishing the length of the array, as we cannot tell this before the parameters are provided
    var numberOfPeople = names.length;
    
    // Selecting a random position within the array
    // Math.random() * var name will give the numbers between the array at a decimal
    // Math.floor() - This will cut it down to the nearest whole # below it
    // e.g ["Mike", "Sam", "Liz", "Sarah"] = 0-3.  Math.random would return 0-3.9999.
    // Math.floor returns this to 0-3
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);

    //This sets the array randomly within the given array name
    var randomPerson = names[randomPersonPosition];
     
    return randomPerson + " is going to buy lunch today!";

    -----------------------------------------

    //fizzBuzz with 'while' loop:
    var output = [];
var count = 1;

function fizzBuzz() {

    while(count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } 
    
    else if (count % 3 === 0) {
        output.push("Fizz");
    } 
    
    else if (count % 5 === 0) {
        output.push("Buzz");
    } 
    
    else {
        output.push(count);
    }
    count++;
    }

console.log(output);
}

fizzBuzz()