// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "../scss/style.scss";
import "../scss/js-1-7.scss";

/***
clientHeight/clientWidth includes padding.
offsetHeight/ offsetWidth includes padding, scrollBar and borders.
***/

//global
let counter = 0;
//height and withd of an element
let divWidth = document.getElementById('content').clientWidth;
let divHeight = document.getElementById('content').clientHeight;

//fct to move the div randomly + troll message
function moveDiv() {
  let btnClk = document.getElementById("btClickMe");
  btnClk.style.left = Math.floor((Math.random() * divWidth) + 1) + "px";
  btnClk.style.top = Math.floor((Math.random() * divHeight) + 1) + "px";
  counter++;
  if (counter == 5) {
    document.getElementById("btClickMe").innerHTML = "Catch me if you can!";
  };
  if (counter == 10) {
    document.getElementById("btClickMe").innerHTML = "Are you afraid of me?";
  };
  if (counter == 15){
    document.getElementById("btClickMe").innerHTML = "Yes you are!";
  };
  if (counter == 20){
    document.getElementById("btClickMe").innerHTML = "Click me!";
    counter = 0;
  };
};

//listener for buttons
function prepareButton() {
  document.getElementById("btClickMe").onmouseover = function() {
  moveDiv();
  };
};

//launch the fct after the loading of the document
window.onload = prepareButton;
