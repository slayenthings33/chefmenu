//*********************DOM LINKING********************//

let addDishBtn = document.getElementById('addDishBtn');
let uploadImgBtn = document.getElementById('uploadImgBtn');
let viewQRBtn = document.getElementById('viewQRBtn');
let deleteDishBtn = document.getElementById('deleteDishBtn');
let editDishBtn = document.getElementById('editDishBtn');
let loginBtn = document.getElementById('loginBtn');

let dishNameInput = document.getElementById('dishNameInput');
let dishDescriptionInput = document.getElementById('dishDescriptionInput');
let dishPriceInput = document.getElementById('dishPriceInput');
let dishPlatoInput = document.getElementById('dishPlatoInput');
let dishImageInput = document.getElementById('dishImageInput');



//*********************GO HOME********************//

function goHome() {
    location.replace("/")
}

//*********************ADD DISH********************//

addDishBtn.addEventListener("click", ()=> {
    console.log("function add dish");
    let newDish={
      "name": dishNameInput.value,
      "description": dishDescriptionInput.value,
      "price": dishPriceInput.value,
      "plato": platoInput.value,
      "image": imageValue.value,
    }
    console.log(newDish);
    fetch('/dish/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'},
      body:JSON.stringify(newDish)
        })
        .then((response)=>{
          console.log("Data uploaded successfully!")
          location.replace("/");
          console.log(response)
        })
      .catch((e)=>{
        console.log("error "+ e)
    })});

//***************BUTTON FUNCTIONS***************//

//DELETE DISH
function deleteDish(id) {
    let eraseDish = {
        "id": id
    } 
    fetch('/dish/deleteDish', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(eraseDish)
    })
        .then((response) => {
        console.log(response)
        location.replace("/")
        })
        .catch((e) => {
        console.log("error" + e)
        });
};

//FIND DISH

function getDishDetails(id) {
  let dishURL = `/getEditDish//${id}`;
  location.replace(dishURL)
}