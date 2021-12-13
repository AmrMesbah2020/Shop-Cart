var quantityInputs=document.getElementsByClassName('cart-quantity-input')
for(var i=0;i<quantityInputs.length;i++){
	var input=quantityInputs[i]
	input.addEventListener('change',quantityChanged)
}
function quantityChanged(event){
	var input= event.target
	if (isNaN(input.value) || input.value<=0) {
		input.value=1
	}
	updateCartTotal()
}

var removeCartItemButtons=document.getElementsByClassName('btn-danger');
for(var i =0; i< removeCartItemButtons.length;i++){
	var button = removeCartItemButtons[i]
	button.addEventListener('click',function(event){
		buttonClicked = event.target
		buttonClicked.parentElement.parentElement.remove()
		updateCartTotal()
	})
}


function updateCartTotal(){
	var cartItemContainer = document.getElementsByClassName('cart-items')[0]
	var cartRows = cartItemContainer.getElementsByClassName('cart-row')
	var total = 0
	for(var i=0; i<cartRows.length;i++ ){
		var cartRow=cartRows[i]
		var priceElement=cartRow.getElementsByClassName('cart-price')[0]
		var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
		var price =parseFloat(priceElement.innerText.replace('$',''))
		var quantity =quantityElement.value
		total=total+(price*quantity)
	}
	document.getElementsByClassName('cart-total-price')[0].innerText='$'+total
}


// addtofav function from localstorage


var favList = document.getElementById("fav");
var favItems=JSON.parse(localStorage.getItem("products"));

for(var i=0;i<favItems.length;i++){
	var fav=document.createElement("div");

	var image=document.createElement("img");
	image.setAttribute("src",favItems[i].img);
	var PName=document.createElement("span");
	var Pprice=document.createElement("span");
	var del =document.createElement("button");
	del.textContent="Remove";
	var addCart=document.createElement("button");
	addCart.textContent="Add to Cart"
	


	PName.textContent=favItems[i].name ;
	Pprice.textContent=favItems[i].price;
	fav.appendChild(image);
	fav.appendChild(PName);
	fav.appendChild(Pprice);
	fav.appendChild(del);
	fav.appendChild(addCart);
	
	
	favList.appendChild(fav);
}
localStorage.clear();

