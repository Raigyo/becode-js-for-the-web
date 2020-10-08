
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "../scss/style.scss";
import "../scss/js-1-2.scss";

//operations according to the button pressed
function operation(operator){
  let numberOne = parseInt(document.getElementById("numberOne").value);
  let numberTwo = parseInt(document.getElementById("numberTwo").value);
  let resultOp;
    if (operator === "plus"){
      resultOp = numberOne+numberTwo;
    }
    else if (operator === "minus"){
      resultOp = numberOne-numberTwo;
    }
    else if (operator === "multiplier"){
      resultOp = numberOne*numberTwo;
    }
    else if  (operator==="divider"){
      resultOp = numberOne/numberTwo;
    }
    else {
      console.log("trace: problem");
    }
    document.getElementById("result").value = resultOp;
};

//listener for buttons
function prepareButton()
{
  document.getElementById('plus').onclick = function() {
    operation('plus');
  };
  document.getElementById('minus').onclick = function() {
    operation('minus');
  };
  document.getElementById('multiplier').onclick = function() {
    operation('multiplier');
  };
  document.getElementById('divider').onclick = function() {
    operation('divider');
  };
};

//launch the fct after the loading of the document
window.onload = prepareButton;
