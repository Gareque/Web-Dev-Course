var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++)  { // #1

    document.querySelectorAll(".drum")[i].addEventListener("click", function ()  { // #2
    
      var buttonInnerHTML = this.innerHTML;
      
      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
});

}

    document.addEventListener("keypress", function(event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    })

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
            
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;      
        
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
    
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
            
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 75);
    }



// 1 - this can also be done by adding the 'document.querySelectorAll(".drum").length' as a separate variable
// 2 - a silent function is done by removing the name of the function, then copying it in to the listener

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();