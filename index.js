// Detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
      var buttonText = this.textContent;
      pressedLetter(buttonText);
      buttonAnimation(buttonText);
    });

}

// Detecting keyboard press
document.addEventListener("keydown", function(event){
  pressedLetter(event.key);
  buttonAnimation(event.key);
});

// Function switching on the sound depending on input parameter
function pressedLetter(letter){
  switch (letter) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "a":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "d":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    case "j":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;
    default: console.log(letter);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey); //searching the class of pressed button
  activeButton.classList.add("pressed"); // makes pressed button shadowed
  setTimeout(function(){activeButton.classList.remove("pressed");}, 100); // returns button to previous state after 0.1 second
}
