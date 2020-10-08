// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "../scss/style.scss";
import "../scss/js-2-1.scss";

// import axios
import axios from 'axios';

let imagesList = [];



//fct that add the images in the web page
function addImage(imagesList) {
  for (let i = 0; i < imagesList.length; i++) {
      let myImage = new Image();
      console.log(myImage);
      myImage.src = imagesList[i];
      myImage.classList.add("slide");
      let src = document.getElementById("displayBox");
      src.appendChild(myImage);
  };
  slideShow(0);
};

//fct ta load images from API
let getCats = async() => {
      for (let i = 0; i < 12; i++) {
        await axios.get("https://aws.random.cat/meow")
          .then(function (response) {
            imagesList[i] = response.data.file;
          });
          //console.log(imagesList[i]);
      };
      addImage(imagesList);
};
getCats();


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
  setTimeout(slideShow, 5000, myIndex); // Change image every second
};
