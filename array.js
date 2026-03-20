//Task 1 Array Manipulation Basics
let shoppingList = [];
let item = document.getElementById("item");
let btnItem = document.getElementById("btnItem");
let btnRmvItem = document.getElementById("btnRmvItem");
let shopList = document.getElementById("shoppingList");
let searchItem = document.getElementById("searchItem");
let btnSearch = document.getElementById("btnSearch");

btnItem.addEventListener("click", function addItem() {
    let newItem = item.value;
    if (newItem === "") {
        alert("Please enter an item.");
        return;
    }
    // Task 2 Modifying function addItem() to add logic to not add duplicate items to the list
    if (shoppingList.includes(newItem)) {
        alert("Item already present in the cart");
        return;
    }
    shoppingList.push(newItem);
    displayList();
    item.value = ""; //clear the input field
    console.log(shoppingList);
});

btnRmvItem.addEventListener("click", function removeLastItem() {
    shoppingList.pop(); // Remove last item from cart array
    displayList();
});


function displayList() {
    shopList.innerHTML = "";
    for (let i = 0; i < shoppingList.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = shoppingList[i];
        shopList.appendChild(listItem);
    }
}
//Task 2 Filter and Search an Array

function filterItems(srchTerm) {
    return shoppingList.filter(function(item));
    {
        return item.includes(srchTerm);
    };
}
searchItem.addEventListener("click", function filterItems() {
    let srchTerm = searchItem.value;
    let searchResults = filterItems(srchTerm);

    displayFilteredList(searchResults);
});


