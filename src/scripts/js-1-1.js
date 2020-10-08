
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "../scss/style.scss";
import "../scss/js-1-1.scss";

//fct to change the color according to the ID
function changeColor(changedColor){
  let elem = document.getElementById("square");
  elem.style.background = changedColor;
};

//listener for buttons
function prepareButton()
{
  document.getElementById('blue').onclick = function() {
    changeColor('blue');
  };
  document.getElementById('red').onclick = function() {
    changeColor('red');
  };
  document.getElementById('green').onclick = function() {
    changeColor('green');
  };
};

//launch the fct after the loading of the document
window.onload = prepareButton;
