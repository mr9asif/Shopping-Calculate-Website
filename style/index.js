
var moneyValue = 0;
var buttons = document.getElementsByClassName('btn');
for (let button of buttons) {
    button.addEventListener('click', function() {
        // Get the parent card element of the clicked button
        var card = this.parentElement;
        
        // Get the title element (h2) within the card element
        var cardTitle = card.getElementsByTagName('h2')[0];
        
        // Get the text content of the title element
        var title = cardTitle.innerText;

        // Create a new list item
        var listItem = document.createElement('li');

        // Set the text content of the list item to the title
        listItem.innerText = title;

        // Get the parent container with class "list"
        var listContainer = document.querySelector('.list');

        // Append the list item to the parent container
        listContainer.appendChild(listItem);

        // money
        var moneyText = card.getElementsByClassName('money')[0];
        let moneyCost = parseFloat(moneyText.innerText);
        
       
       moneyValue += moneyCost;
       console.log(moneyValue);
       const inputField = document.getElementById('costMoney');
       inputField.value = `$${moneyValue}`;

     

        
    });
}  
 //offer---------
 let offerBtn = document.getElementById('offer-btn');
 offerBtn.addEventListener('click',function(){
   if(moneyValue >= 300){
     let discount = parseFloat(moneyValue * 0.2);
     let discountField = document.getElementById('offer');
      discountField.value = `$${discount}`;
      let totalMoney = document.getElementById('total');
    let totalM= moneyValue - discount;
   totalMoney.value = `$${totalM}`
   console.log(totalM);
   }else{
     alert('need more shopping')
   }
   
 })
 let shopping = document.getElementById('shopping')
 console.log('object');





  