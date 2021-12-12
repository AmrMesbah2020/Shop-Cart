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


// Amr Mesbah tradmark
// addtofav function on localstorage
var names=$(".productName");
var prices= $(".productPrice");
var imgsSrc=$(".productCard div img");

var itemList =[];

function obj(name,price,img){
this.name=name;
this.price=price; 
this.img=img;
}
for(var i=0;i<24;i++){
    var item= new obj(names[i].textContent,prices[i].textContent,imgsSrc[i].getAttribute("src"));
    itemList.push(item)
}

console.log(itemList)
var favList=[];
function addToFav(x){
    favList.push(itemList[x])
    localStorage.setItem('products',JSON.stringify(favList));
}
