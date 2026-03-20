//Task 1 Array Manipulation Basics
let shoppingList=[];
let item = document.getelementByID("item");
let btnItem = document.getelementByID("btnItem");
let btnRmvItem = document.getelementByID("btnRmvItem");
let shopList = document.getelementByID("shoppingList");
let searchItem = document.getelementByID("searchItem");

btnItem.addEventListener("click", function addItem(item){
    if (item === "") {
      alert("Please enter an item.");
      return;
    }
     shoppingList.push(item);
displayList();
item.value = ""; //clear the input field
});

btnRmvItem.addEventListener("click", function removeLastItem() {
     shoppingList.pop(); // Remove last item from cart array
    displayList();
});


function displayList(){
    shopList.innerHTML = "";
    for (let i=0; i<shoppingList.length; i++){
        let listItem = document.createElement("li");
         listItem.innerText = cart[i];
         shopList.appendChild(listItem);
}
}
//Task 2 Filter and Search an Array

function filterItems (items){
return displayList();
}
searchItem.addEventListener("click", function filterItems() {
      // Remove last item from cart array
    return displayList();
});


    