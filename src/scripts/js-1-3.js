
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "../scss/style.scss";
import "../scss/js-1-3.scss";

//fct to delete the content
function deleteInputs() {
  let y = document.getElementsByTagName("input");
  let i;
  for (i = 0; i < y.length; i++) {
    y[i].value = "";
  };
  document.getElementById('display').innerHTML = "";
};

//fct to display the content
function displayInput() {
  let name = document.getElementById("name").value;
  let power = document.getElementById("power").value;
  let motivation = document.getElementById("motivation").value;
  let plan= document.getElementById("plan").value;
  document.getElementById('wrapper').style.visibility='hidden';
  document.getElementById('resultDisplay').style.visibility='visible';
  document.getElementById('display').innerHTML = "<p>Your name is " + name + ".</p>"+ "<p>Your power is " + power + ".</p>" + "<p>Your motivation is " + motivation + ".</p>" + "<p>Your plan is " + plan + ".</p>";
};

//listener for buttons
function prepareButton() {
  document.getElementById("reset").onclick = deleteInputs;
  document.getElementById("result").onclick = displayInput;
};

//launch the fct after the loading of the document
window.onload = prepareButton;
