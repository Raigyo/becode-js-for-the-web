
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "../scss/style.scss";
import "../scss/js-1-6.scss";
import imgs from "../img/cats/*.jpg";
/***
Sources:
https://javascript.info/keys-values-entries
***/

//create an object with the url of the images generated by parcelJS
let imagesList = [];
for (let i in imgs) {
  imagesList = Object.values(imgs);
};

// fct to add images in the div
function addImage(imgObject) {
  for (let i in imgObject) {
      let myImage = new Image();
      myImage.src = imgObject[i];
      let src = document.getElementById("displayBox");
      src.appendChild(myImage);
  };
};

//fct to listen to buttons
function prepareButton() {
  document.getElementById('btRandom').onclick = function() {
    randomizeImg(imagesList);
  };
};

//fct to randomize array with images + remove the old images
function randomizeImg(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    //remove the childs of the div displayBox (all images)
    while (displayBox.firstChild) {
    //The list is LIVE so it will re-index each call
    displayBox.removeChild(displayBox.firstChild);
  };
    //replace the images with the same but in a different order
    addImage(imagesList);
};

//launch the fct
addImage(imagesList);
window.onload = prepareButton;
