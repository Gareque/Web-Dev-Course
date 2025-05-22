var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var refresh = document.querySelector("h1");
result1 = [];
result2 = [];

function diceRoller() {

    // Roll the first dice:
    const diceFaces = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
    const randomNumber1 = Math.floor(Math.random() * diceFaces.length);
        result1.push(randomNumber1);
    var finalFace = diceFaces[randomNumber1]
    dice1.src = finalFace;

    // Roll the second dice:
    const randomNumber2 = Math.floor(Math.random() * diceFaces.length);
        result2.push(randomNumber2);
    var finalFace2 = diceFaces[randomNumber2]
    dice2.src = finalFace2

    // Compile the results to confirm which is higher
    result1 = result1[result1.length -1];
    result2 = result2[result2.length -1];

    // change the Header depending on the winner/tie
    if (result1 > result2) {
        refresh.innerHTML = "Player 1 Wins!"
    } 
    else if (result2 > result1) {
        refresh.innerHTML = "Player 2 Wins!"
    } else {
        refresh.innerHTML = "It's a draw!"
    }
}

diceRoller();


--------------------------------------

//The instructors answer:

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;  //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource0);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//set winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}