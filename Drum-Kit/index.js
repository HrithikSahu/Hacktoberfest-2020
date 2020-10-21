
var noButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < noButtons ; i++) {

  // By clicking the button.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var innerButtonHTML = this.innerHTML;
    makeSound(innerButtonHTML);
    buttonPressed(innerButtonHTML);

  });
}

// by pressing the keyboard buttons.

document.addEventListener("keydown", function(event){

  makeSound(event.key);
  buttonPressed(event.key);

});

function makeSound(key){

  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;


    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;


    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
    console.log("Pressing Wrong Keyword, sike");
  }
}

function buttonPressed(currentKey){

var button = document.querySelector("."+ currentKey);

  // To add another class via JS
  button.classList.add("pressed");

  // To remove the class after some interval (in this case 100 ms)
  setTimeout(function(){
    button.classList.remove("pressed");
  },100);

}
