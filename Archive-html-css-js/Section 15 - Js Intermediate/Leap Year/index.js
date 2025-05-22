//AdvancedBMI Calculator
function bmiCalculator (weight, height) {
    var interpretation = weight / (height * height);
    return Math.round(interpretation);
    
    if (interpretation < 18.5) {
        alert("Your BMI is " + interpretation + ", so you are underweight.");
    }
    if (interpretation => 18.5 && interpretation <= 24.9) {
        alert("Your BMI is " + interpretation + ", so you have a normal weight.");
    } else {
        alert("Your BMI is " + interpretation + ", so you are overweight.");
    }
}

bmiCalculator(65, 1.8)

//Leap Year Calculator
function isLeap(year) {
    if (year % 4) {
        return year
    } else {
        return 'Not leap year.'
    }

    if (year % 100) {
        return year
    } else {
        return 'Leap year.'
    }

    if (year % 400) {
        return 'Leap year.'
    } else {
        return 'Not leap year.'
    }

}


function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return 'Leap year.'
            } else {
                return 'Not leap year.'
            }
        } else {
            return 'Leap year.'
        }
    } else {
        return 'Not leap year.'
    }
}


var a = year % 4
var b = year % 100
var c = year % 400

//Guest List - Learning Arrays
var guestList = ["Mike", "Sam", "Liz", "Sarah"]
var attendee = prompt("Please enter your name:")

if (guestList.includes(attendee)) {
    console.log('Congratulations, you are on the guest list!');
} else {
    console.log('Sorry, you are not on the list...');
}