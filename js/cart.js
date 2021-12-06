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