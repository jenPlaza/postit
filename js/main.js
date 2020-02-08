
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
					alert("Please enter an item to add");     
				}
				else if (price.value === null || price.value === "") {
					if(price.style.display==="none")
						price.style.display="inline-block";
						
					alert("Please enter the item price to complete adding the item");
				}
				else{
					addItem();
				}
			}
			if(this.id == 'clear'){
					price.style.display="none";
					if (item.value === null || item.value === "" || !isNaN(item.value)) {
					alert("Please enter an item to delete");
				}
				else{
					removeItem();
				}
			}
		});
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