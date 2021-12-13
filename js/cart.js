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
console.log(favItems);



//addtoCart function

var cartList =document.getElementById("cart-items");
var cartItems=JSON.parse(localStorage.getItem("cart_products"));
for(var i=0;i<cartItems.length;i++){
	var cartRow=document.createElement("tr");
	cartRow.classList.add('cart-row');
	var cartRowContent=`
	
	<th scope="row" class="border-0">
	  <div class="p-2">
		<img src="${cartItems[i].img}" alt="" width="70" class="img-fluid rounded shadow-sm">
		<div class="ml-3 d-inline-block align-middle">
		  <h5 class="mb-0 text-dark d-inline-block align-middle cart-item-title">${cartItems[i].name}</h5><span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
		</div>
	  </div>
	</th>
	<td class="border-0 align-middle cart-price"><strong>${cartItems[i].price}</strong></td>
	 <td data-th="Quantity" style="width:10%">
			  <input type="number" class="form-control form-control-lg text-center mt-3 cart-quantity-input" value="1">
		  </td>
	<td class="border-0 align-middle"><button type="button" class="btn btn-danger">Remove</button></td>`
	cartRow.innerHTML=cartRowContent
  console.log(cartItems)
  cartList.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('chang',quantityChanged)

	
}
updateCartTotal()




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

//remove item function

var removeCartItemButtons=document.getElementsByClassName('btn-danger');
for(var i =0; i< removeCartItemButtons.length;i++){
	var button = removeCartItemButtons[i]
	button.addEventListener('click',removeCartItem)



}
function removeCartItem(event){
	    buttonClicked = event.target
		buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()

}


//update subtotal function

function updateCartTotal(){
	
	var total = 0
	for(var i=0;i<cartItems.length;i++){
		var price =parseFloat(cartItems[i].price.replace('$',''))
		var quantityele=document.getElementsByClassName('cart-quantity-input')[i]
		var quantity = quantityele.value
		total = total+quantity * price;

	}
document.getElementsByClassName('cart-total-price')[0].innerText='$'+total
}

localStorage.clear();

var rmvItems=document.getElementsByClassName('dels');
for(var i =0; i< rmvItems.length;i++){
	var button = rmvItems[i]
	button.addEventListener('click',function(event){
		buttonClicked = event.target
		buttonClicked.parentElement.remove()
		
	})
}
