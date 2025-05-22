const buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

function startOver () {
    started = false;
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
}

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    };
});

$(".btn").on("click", function() {
    // Confirm the button clicked by the user and push to a variable
    var buttonClicked = $(this).attr('id');
    userClickedPattern.push(buttonClicked);
    
    $("#" + buttonClicked).addClass("pressed");
    
    setTimeout(function() {
        $("#" + buttonClicked).removeClass("pressed");
    }, 100);

    var userAudio = new Audio("sounds/" + buttonClicked + ".mp3");
    userAudio.play();

    checkAnswer(userClickedPattern.length-1);
});



function checkAnswer(currentLevel) {

    // check the game pattern against the user pattern
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        
        // If the patterns match, move on to the next level
        if (userClickedPattern.length === gamePattern.length){
        
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
        // If they are not the same, confirm the entry was incorrect
        var wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();
        $("h1").html("Game over, press any key to restart!")
        startOver();
    }

}

function nextSequence() {
    userClickedPattern = [];
    // Generate a random number between 0-3
    var randomNumber = Math.floor(Math.random() * buttonColours.length);
    
    // assign the random number to the colour array, then push this to the game array
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Fade the button to make it flash
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // Add the sound effects
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    $("h1").html("Level " + level);
    level++;


}



//          Loop through all of the button colours
//          for (var i = 0; i < buttonColours.length; i++)  { // #1
//          }
//        
//        switch ($(".btn")) {
//            case "green":
//                var tom4 = new Audio('sounds/tom-4.mp3');
//                tom4.play();
//                break;  
//            break;
//
//            case "green":
//            
//            break;
//            
//            case "green":
//            
//            break;
//            
//            case "green":
//            
//            break;
//        
//            
//            
//            default:
//                break;
//        }

        //userChosenColor = $(".btn");
        //console.log(userChosenColor);
