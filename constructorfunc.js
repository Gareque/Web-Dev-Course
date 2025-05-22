function HouseKeeper(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experienceInYears = experience;
    this.clean = function () {
        alert("Cleaning in progress")
    }
}

// Call the function:

var houseKeeper1 = new HouseKeeper("Alfred", 59, 43);


// Methods:
// A method is a function that's called with relation to objects

