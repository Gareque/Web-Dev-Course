// 99 bottles of beer on the wall
var bottle = 99;

function bottles() { 
    while (bottle >= 1) {
        var currentBottle = bottle - 1;
        if (bottle >= 2) {
            console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. Take 1 down, pass it around, " + currentBottle + " bottles of beer on the wall.");
        } else {
            console.log(bottle + " bottle of beer on the wall, " + bottle + " bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall.");
        }
        bottle--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer.  Go to the store and buy some more, 99 bottles of beer on the wall");
}

// Call the function
bottles();


// Courses answer:
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// This creates a variable for the bottle wording to re-use this instead of writing out a couple of different lines for each
