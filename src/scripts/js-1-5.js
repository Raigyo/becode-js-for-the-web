// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "../scss/style.scss";
import "../scss/js-1-5.scss";
import imgs from "../img/cats/*.jpg";

/***
Sources:
https://developer.mozilla.org/fr/docs/Web/API/HTMLImageElement/Image
https://www.w3schools.com/w3css/w3css_slideshow.asp
https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
***/

//fct that add the images in the web page
function addImage() {
  for (let i in imgs) {
      let myImage = new Image();
      myImage.src = imgs[i];
      myImage.classList.add("slide");
      let src = document.getElementById("displayBox");
      src.appendChild(myImage);
  };
};

//fct that runs the slideshow
function slideShow(index) {
  let myIndex = parseInt(index);
  let i;
  let x = document.getElementsByClassName("slide");
  //hide all images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  };
  myIndex++;
  //if myIndex > than number of elements it's set to  1
  if (myIndex > x.length) {
    myIndex = 1;
  };
  x[myIndex-1].style.display = "block";
  setTimeout(slideShow, 1000, myIndex); // Change image every second
};

//launch the fct
addImage();
slideShow(0);
