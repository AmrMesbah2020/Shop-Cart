// Redirecting user to selected category : 

var btnLiv = document.getElementsByClassName("btnLiv");
var btnKit = document.getElementsByClassName("btnKit");
var btnBed = document.getElementsByClassName("btnBed");
var btnDin = document.getElementsByClassName("btnDin");

for (let i = 0; i < btnLiv.length; i++) {
    btnLiv[i].addEventListener('click', function () {
        location.href = "./productsLiv.html";
    }); 
}

for (let i = 0; i < btnKit.length; i++) {
    btnKit[i].addEventListener('click', function () {
        location.href = "./productsKit.html";
    }); 
}

for (let i = 0; i < btnBed.length; i++) {
    btnBed[i].addEventListener('click', function () {
        location.href = "./productsBed.html";
    }); 
}


for (let i = 0; i < btnDin.length; i++) {
    btnDin[i].addEventListener('click', function () {
        location.href = "./productsDin.html";
    }); 
}


//********************************************************************************** */
//display category products on click the category

// let switcherList = document.querySelectorAll(".switcher li");
// let products = document.querySelectorAll(".allProducts");

// switcherList.forEach(catCards => {
//     catCards.addEventListener('click', removeActive);
//     catCards.addEventListener('click', manageProducts);
// });

// function removeActive() {
//     switcherList.forEach(catCards => {
//         catCards.classList.remove('active');
//         this.classList.add('active');
//     });
// }


// function manageProducts() {
//     products.forEach((productsDiv) => {
//         productsDiv.style.display = 'none'
//     });
//     document.querySelectorAll(this.dataset.cat).forEach((el) => {
//         el.style.display = "block"
//     })
// }