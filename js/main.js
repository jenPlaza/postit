
var shopList = document.getElementById("list");
  var item = document.getElementById("item");
  var price = document.getElementById("price");

	var button = document.querySelectorAll('.button');
				//testing
				//console.log(button.length);
			
		//loop through all buttons
		for (var btn of button) {
			btn.addEventListener('click', function(){

			//condition for each button
			if(this.id == 'submit'){
				if (item.value === null || item.value === "" || !isNaN(item.value)) {
					displayItemError();  
				}
				else if (price.value === null || price.value === "") {
					if(price.style.display==="none")
						price.style.display="inline-block";
						
					displayPriceError();
				}
				else{
					displaySuccess();
					addItem();
				}
			}
			if(this.id == 'clear'){
					price.style.display="none";
					if (item.value === null || item.value === "" || !isNaN(item.value)) {
					displayInfo();
				}
				else{
					areYouSure();
				}
			}
		});
	}

const displaySuccess = () => {
	new Noty({
    theme: 'metroui',
	type: 'success',
	layout: 'topRight',
    text: 'Successfully added an item to the list',
	timeout:2500,
}).show();
}
const displayItemError = () => {
	new Noty({
    theme: 'metroui',
	type: 'error',
	layout: 'topRight',
    text: 'Please enter an item to add',
	timeout:2500,
}).show();
}
const displayPriceError = () => {
	new Noty({
    theme: 'metroui',
	type: 'error',
	layout: 'topRight',
    text: 'Please enter the item price to complete adding the item',
	timeout:2500,
}).show();
}
const displayInfo = () => {
	new Noty({
    theme: 'metroui',
	type: 'info',
	layout: 'topRight',
    text: 'Please enter an item to delete',
	timeout:2500,
}).show();
}


const areYouSure = () => {
	new Noty({
    theme: 'metroui',
	type: 'warning',
	layout:'topRight',
    text: 'Do you want to continue deleting this item?',
	timeout:1200,
	buttons:[
	Noty.button('Yes', 'btn', function(){
			removeItem();
		}, 
		{id:'btnYes', 'data-status': 'ok'}),
		Noty.button('No', 'btn', function(){
		areYouSure.close();
		}),
	]
}).show();
}

const addItem = () => {	
    const li = document.createElement("li");
    li.setAttribute('id',item.value);
    li.appendChild(document.createTextNode(item.value+" - $"+ price.value));
    shopList.appendChild(li);
item.value = "";
price.value = ""; 
		
}
		
const removeItem = () => {
    var itemList = document.getElementById(item.value);
    shopList.removeChild(itemList);
	item.value = "";
}
