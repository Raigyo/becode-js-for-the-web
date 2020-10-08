
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "../scss/style.scss";
import "../scss/js-1-4.scss";

//adding years in the selectbox
function addYear() {
  let min = 1900;
  let max = new Date().getFullYear();
  let select = document.getElementById('year');
  for (let i = max; i>=min; i--){
      let opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      select.appendChild(opt);
  }
}

//adding days in the selectbox according the year/month selection
function addDays(numDays) {
  elementDay.options.length=1;
  let min = 1;
  let max = numDays;
  let select = document.getElementById('day');
  for (let i = max; i>=min; i--){
      let opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      select.appendChild(opt);
  };
};

//calculate number of days in a month global: needed
let getDaysInMonth = function(month,year) {
  return new Date(year, month, 0).getDate();
};

//global: needed
let elementYear = document.getElementById('year');
let elementMonth = document.getElementById('month');
let elementDay = document.getElementById('day');

//Event listeners
//year
elementYear.addEventListener('click', function() {
  let numDays = getDaysInMonth(elementMonth.value, elementYear.value);
  addDays(numDays);
}, false);

//month + days
elementMonth.addEventListener('click', function() {
  //if (elementYear.value != 0 && elementMonth.value != 0){
  let numDays = getDaysInMonth(elementMonth.value, elementYear.value);
  addDays(numDays);
  //}
}, false);

//final test: age calculation
elementDay.addEventListener('click', function() {
  if (elementYear.value != 0 && elementMonth.value != 0 && elementDay.value != 0){
    let today = new Date();
    let birthDate = new Date(elementYear.value, elementMonth.value-1, elementDay.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    };
    document.getElementById('ageBox').innerHTML = age;
  }
  else{
    prompt("Please choose values for all select boxes");
  }
}, false);

//load the function after the html document
window.onload=addYear;
