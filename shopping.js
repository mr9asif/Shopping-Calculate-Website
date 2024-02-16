// Retrieve stored shopping details and total cost from session storage
var storedShoppingCart = JSON.parse(sessionStorage.getItem('shoppingCart'));
var storedTotalCost = parseFloat(sessionStorage.getItem('totalCost'));

// Update the list of buying products
var productList = document.querySelector('.unorderlist');
storedShoppingCart.forEach(function(product) {
    var listItem = document.createElement('li');
    listItem.textContent = product.name + ' - $' + product.price;
    productList.appendChild(listItem);
});

// Display the net cost money
var costMoneyInput = document.getElementById('costMoney');
costMoneyInput.value = '$' + storedTotalCost.toFixed(2);

// Calculate and display the discount and total with offer money
if (storedTotalCost >= 300) {
    var discount = storedTotalCost * 0.2;
    var discountField = document.getElementById('offer');
    discountField.value = '$' + discount.toFixed(2);

    var totalMoney = document.getElementById('total');
    var totalWithDiscount = storedTotalCost - discount;
    totalMoney.value = '$' + totalWithDiscount.toFixed(2);
} else {
    alert('Need more shopping to qualify for the discount.');
}
