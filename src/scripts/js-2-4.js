
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "../scss/style.scss";
import "../scss/js-2-4.scss";

import axios from 'axios';
/** https://flaviocopes.com/axios/ **/
let apiUrl = "https://character-database.becode.xyz/characters";
//fct to display characters datas and buttons more ino / edit / delete
function getCharcterData() {
        axios.get(apiUrl)
        .then(function (response) {
            for (let i = 0; i < 100; i++){
                //variables declaration
                let Remarkable = require('remarkable'); //to display markdown uses remarkable class
                let md = new Remarkable(); //var to convert into markdown
                //create elements
                //li elements
                let liAdd = document.createElement('li');
                //btn more info
                let infoBtn = document.createElement ("button");
                infoBtn.setAttribute("class", "modal-info-btn");
                infoBtn.innerText = "More Info";
                //btn edit
                let editBtn = document.createElement ("button");
                editBtn.setAttribute("class", "modal-edit-btn");
                editBtn.innerText = "Edit";
                //btn delete
                let deleteBtn = document.createElement ("button");
                deleteBtn.setAttribute("class", "modal-delete-btn");
                deleteBtn.innerText = "Delete";
                //li content in grid container: name/images/shot descr
                liAdd.innerHTML = "<div class='grid-container'><div class='charImg'><img src='data:image/jpeg;base64," + response.data[i].image + "'/></div><div class='charName'>" + response.data[i].name + "</div><div class='charShortDescr'>" + response.data[i].shortDescription + "</div></div>";
                //buttons listeners/actions
                //btn more infoBtn
                infoBtn.addEventListener("click", () => {
                  document.getElementById("modDescr").innerHTML = md.render(response.data[i].description);
                  myModal.style.display = "block";
                })//end listener infoBtn
                //btn editBtn
                editBtn.addEventListener("click", () => {
                  editModal.style.display = "block";
                  //dispaly already existing values
                  editName.value = response.data[i].name;
                  editShortDescr.value = response.data[i].shortDescription;
                  editDescr.value = response.data[i].description;
                  let saveEditChar = document.getElementById("saveEditChar");
                  saveEditChar.addEventListener("click", async () => {
                    //if = empty file input so use the previous uimage / else = new image
                    if (document.getElementById("editImg").files[0] === undefined){
                      console.log("keep previous image");
                      let fileBase64 = response.data[i].image;
                      await axios.put('https://character-database.becode.xyz/characters/'+response.data[i].id, {
                        name : editName.value,
                        shortDescription : editShortDescr.value,
                        description : editDescr.value,
                        image : response.data[i].image
                      });//end axios put
                    } else {
                      console.log("use new image");
                      let fileImg = document.getElementById("editImg").files[0];
                      let reader = new FileReader();
                      reader.readAsDataURL(fileImg);
                      reader.onload = async function () {
                        let fileBase64 = reader.result;
                        fileBase64 = fileBase64.substring(23);
                        await axios.put('https://character-database.becode.xyz/characters/'+response.data[i].id, {
                          name : editName.value,
                          shortDescription : editShortDescr.value,
                          description : editDescr.value,
                          image : fileBase64
                        });//end axios put
                      }//end fct reader
                    }//end else
                    window.location.reload();
                  })//end btn saveEditChar
                })//end listener editBtn
                //btn deleteBtn
                deleteBtn.addEventListener("click", async () => {
                    let deleteConfirm = confirm("Are you sure that you want to delete: " + response.data[i].name + " with ID " + response.data[i].id);
                    if (deleteConfirm == true) {
                      await axios.delete("https://character-database.becode.xyz/characters/"+response.data[i].id);
                      console.log("https://character-database.becode.xyz/characters/"+response.data[i].id);
                    } // end if
                    window.location.reload();
                })//end listener deleteBtn
                //adding elements in html
                let ulList = document.querySelector("#charList");
                let nodeContainer = document.querySelector(".grid-container");
                let nodeCharMore = document.createElement("div");
                nodeCharMore.classList.add("charMore");
                ulList.appendChild(liAdd);
                liAdd.appendChild(nodeCharMore);
                nodeCharMore.appendChild(infoBtn);
                nodeCharMore.appendChild(editBtn);
                nodeCharMore.appendChild(deleteBtn);
            } //end for
        })//end then
        .catch(function (error) {
          console.log("Error downloading APi data");
        });//end catch
}// end fct getCharcterData

//btn main add characters
let addChar = document.getElementById("addChar");
addChar.onclick = function() {
  addModal.style.display = "block";
  let imgChar = document.getElementById('addImg');
  imgChar.type = 'file';
  imgChar.accept = 'image/*';
}

//btn modal add character SAVE
let saveChar = document.getElementById("saveChar");
saveChar.onclick = function() {
  let fileImg = document.getElementById("addImg").files[0];
  let reader = new FileReader();
  reader.readAsDataURL(fileImg);
  //reader("onload", async () => {
  reader.onload = async function () {
    let fileBase64 = reader.result;
    let indexOfFirst = fileBase64.indexOf(",");
    fileBase64 = fileBase64.substring(indexOfFirst+1);
    await axios.post('https://character-database.becode.xyz/characters/', {
      name : newName.value,
      shortDescription : newShortDescr.value,
      description : newDescr.value,
      image : fileBase64
    });//end axios post
    window.location.reload();
  }//end fct reader

}//end saveChar

//fct to close modal boxes
let closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function() {
  myModal.style.display = "none";
}

let closeAddModal = document.getElementsByClassName("close")[1];
closeAddModal.onclick = function() {
  addModal.style.display = "none";
}

let closeEditModal = document.getElementsByClassName("close")[2];
closeEditModal.onclick = function() {
  editModal.style.display = "none";
}

//launch fct
getCharcterData();
