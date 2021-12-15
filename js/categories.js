

let filterList = document.querySelectorAll(".filter li");
filterList.forEach(li => {
    li.addEventListener('click', removeActive);
});

function removeActive() {
    filterList.forEach(li => {
        li.classList.remove('active');
        this.classList.add('active');
    });
}
//variables
let products = document.querySelectorAll(".categories .border-dark");
let liKitchens = document.getElementById('Kitchens');
let liLivingRoom = document.getElementById("LivingRoom");
let liDinningRoom = document.getElementById("DinningRoom");
let liBedRoom = document.getElementById("BedRoom");
let cardlivingroom = document.querySelectorAll(".categories .LivingRoom");
let cardKitchens = document.querySelectorAll(".categories .Kitchens");
let cardDinningRoom = document.querySelectorAll(".categories .DinningRoom");
let cardBedRoom = document.querySelectorAll(".categories .BedRoom");
let cath1 = document.getElementById("headercat");
//add event listener
liKitchens.addEventListener('click', kitchencat);
liLivingRoom.addEventListener('click', livingcat);
liDinningRoom.addEventListener('click', dinningcat);
liBedRoom.addEventListener('click', bedroomcat);
//function
function livingcat() {
    products.forEach(card => {
        card.style = 'display:none';
        cardlivingroom.forEach(livingroom => {
            livingroom.style = 'display:block'
        })
    });
    cath1.innerHTML = "Living Room"
    filterList.forEach(li => {
        li.classList.remove('active');
        liLivingRoom.classList.add('active');
    });
}

function kitchencat() {
    products.forEach(card => {
        card.style = 'display:none';
        cardKitchens.forEach(Kitchens => {
            Kitchens.style = 'display:block'
        })
    });
    cath1.innerHTML = "Kitchens"
    filterList.forEach(li => {
        li.classList.remove('active');
        liKitchens.classList.add('active');
    });
}

function dinningcat() {
    products.forEach(card => {
        card.style = 'display:none';
        cardDinningRoom.forEach(DinningRoom => {
            DinningRoom.style = 'display:block'
        })
    });
    cath1.innerHTML = "Dinning Room"
    filterList.forEach(li => {
        li.classList.remove('active');
        liDinningRoom.classList.add('active');
    });
}

function bedroomcat() {
    products.forEach(card => {
        card.style = 'display:none';
        cardBedRoom.forEach(BedRoom => {
            BedRoom.style = 'display:block'
        })
    });
    cath1.innerHTML = "Bed Room"
    filterList.forEach(li => {
        li.classList.remove('active');
        liBedRoom.classList.add('active');
    });
}



// addtofav function on localstorage
var names = $(".productName");
var prices = $(".productPrice");
var imgsSrc = $(".productCard div img");

var itemList = [];

function obj(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img;
}
for (var i = 0; i < 24; i++) {
    var item = new obj(names[i].textContent, prices[i].textContent, imgsSrc[i].getAttribute("src"));
    itemList.push(item)
}


var favList = [];

function addToFav(x) {
    var r = favList.includes(itemList[x]);
    if (!r) {
        favList.push(itemList[x])
    }

    localStorage.setItem('products', JSON.stringify(favList));
}


//addtoCart function
// var names1=$(".productName");
// var prices1= $(".productPrice");
// var imgsSrc1=$(".productCard div img");

var cartProducts = [];

function obj2(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img;
}
for (var i = 0; i < 24; i++) {
    var cartItem = new obj2(names[i].textContent, prices[i].textContent, imgsSrc[i].getAttribute("src"));
    cartProducts.push(cartItem)
}
console.log(cartProducts)
var cartList = []

function addToCart(e) {
    cartList.push(cartProducts[e])
    localStorage.setItem('cart_products', JSON.stringify(cartList));
}



var catIndex = parseInt(localStorage.getItem("catIndex"))
switch (catIndex) {
    case (0):
        livingcat()
        break;
    case (1):
        dinningcat()
        break;
    case (2):
        kitchencat()
        break;
    case (3):
        bedroomcat()
        break;
}
localStorage.removeItem("catIndex")





// /*Start Add To Cart */
// var carts = document.querySelectorAll('.add');
// for (var i = 0; i < carts.length; i++) {
//     carts[i].addEventListener('click', () => {
//         cartNumbers();
//     })
// }
// function onLoadCartNumbers(){
//     var productNumbers = localStorage.getItem('cartNumbers');
//     if (productNumbers) {
//         document.querySelector('.cart span').textContent = productNumbers;
//     }
// }
// function cartNumbers() {
//     var productNumbers = localStorage.getItem('cartNumbers');

//     productNumbers = parseInt(productNumbers);

//     if (productNumbers) {
//         localStorage.setItem('cartNumbers ', productNumbers + 1);
//         document.querySelector('.cart span').textContent = productNumbers + 1;
//     } 
//      else {

//         localStorage.setItem('cartNumbers', 1)
//         document.querySelector('.cart span').textContent = 1;
//     }
// };
// onLoadCartNumbers();

// /*End Add To Cart */

var cartCounter=0
// function for add to cart 
let elementsArray2 = document.querySelectorAll(".btn-outline-info");
for(let i=0;i<elementsArray2.length;i++){
    elementsArray2[i].addEventListener('click',togcart)
}
function togcart(e){
  let classes= this.classList;
  let act=false;
    for(let i=0;i<classes.length;i++){
            if(classes[i]==="active"){
                act=true;
                break;
            }
    }
if(act===true){
    document.querySelector('.cart span').textContent = --cartCounter;
    this.classList.remove("active");
    
}
else{
    this.classList.add("active");
    document.querySelector('.cart span').textContent = ++cartCounter;
}
localStorage.setItem("cartCount",cartCounter);
}

//function for add to fav
let elementsArray = document.querySelectorAll(".btn-outline-danger");
for(let i=0;i<elementsArray.length;i++){
    elementsArray[i].addEventListener('click',togfav)
}
function togfav(e){
    let classes= this.classList;
    let act=false;
      for(let i=0;i<classes.length;i++){
              if(classes[i]==="active"){
                  act=true;
                  break;
              }
      }
  if(act===true){
      this.classList.remove("active");
      removeCartItem(this);
  
  }
  else{
      this.classList.add("active");
  }
  
  }


