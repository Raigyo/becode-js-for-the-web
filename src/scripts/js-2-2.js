
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "../scss/style.scss";
import "../scss/js-2-2.scss";

import axios from 'axios';
/**
Using punkapi : https://punkapi.com/documentation/v2
Using Axios: https://sabe.io/tutorials/using-axios-pull-data-rest-api
**/


//let apiUrl = "https://api.punkapi.com/v2/beers/random";
let apiUrl = "https://api.punkapi.com/v2/beers/";
let input = document.querySelector(".beer_id"); //id
let beerName = document.querySelector(".beer_name");//name
let beerTagline = document.querySelector(".tagline");//tagline
let beerBrewed = document.querySelector(".first_brewed");//first_brewed
let beerImage = document.querySelector(".image_url");//image_url


function getBeerData() {
        axios.get(apiUrl + input.value)
        //axios.get(apiUrl)
        .then(function (response) {
            console.log(response);
            beerName.innerHTML = response.data[0].name;
            beerTagline.innerHTML = response.data[0].tagline;
            beerBrewed.innerHTML = response.data[0].first_brewed;
            beerImage.src= response.data[0].image_url;
        })
        .catch(function (error) {
            //pokemonName.innerHTML = "(An error has occurred.)";
            //pokemonImage.src = "";
        });
    }

let button = document.querySelector(".beer-button");
button.addEventListener("click", getBeerData);
