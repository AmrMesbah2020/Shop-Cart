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

// remove favlist from local storage
localStorage.removeItem('products');



var rmvItems=document.getElementsByClassName('dels');
for(var i =0; i< rmvItems.length;i++){
	var button = rmvItems[i]
	button.addEventListener('click',function(event){
        debugger
		buttonClicked = event.target
		buttonClicked.parentElement.remove()
		
	})
}