
  var shopList = document.getElementById("list");
  var item = document.getElementById("item");
  var price = document.getElementById("price");
  /*var currentItem = item.value+", "+ price.value;*/	  	  
const addItem = () => {
    const li = document.createElement("li");
    li.setAttribute('id',item.value);
    li.appendChild(document.createTextNode(item.value+" - $"+ price.value));
    shopList.appendChild(li);
item.value = "";
price.value = "";  
};
const removeItem = () => {
    var itemList = document.getElementById(item.value);
    shopList.removeChild(itemList);
}