// // count value
// var plus = document.querySelectorAll('.plus');
// var minus = document.querySelectorAll('.minus');
// var quantity = document.querySelectorAll('.quantity');
// var productPrice = document.querySelectorAll('.productPrice');

// // var plus = document.getElementById('plus');
// function increment() {
//     for (let i = 0; i < plus.length; i++) {
//         var plusBtn = plus[i];
//         console.log(plusBtn);
//         var count;
//         plusBtn.addEventListener('click', function () {
//             let quantityInput = quantity[i];
//             // getting value of input
//             count = quantityInput.value;
//             console.log(quantityInput);
//             var numberCount = parseInt(count);
//             numberCount++;
//             // setting value of input 
//             quantityInput.value = numberCount;

//             let priceElement = productPrice[i];
//                 var TotalNumber = priceElement.innerText;
//                 var currentBalance = parseFloat(TotalNumber);
//                 var multiplyValue = currentBalance * numberCount;
//                 priceElement.innerText = multiplyValue;
//         });
//     }
// }
// increment()

// function decrement(id) {
//     for (let i = 0; i < minus.length; i++) {
//         var minusBtn = minus[i];
//         var count;
//         minusBtn.addEventListener('click', function () {
//              // getting value of input
//              let quantityInput = quantity[i];
//             count = quantityInput.value;
//             var numberCount = parseInt(count);
//             numberCount--;
//             // setting value of input 
//             quantityInput.value = numberCount;
//             // return numberCount;
//             if (numberCount >= 1) {
//                 quantityInput.value = numberCount;
//             } else {
//                 alert('sorry');
//                 numberCount = 1;
//                 quantityInput.value = 1
//             }

//                 let priceElement = productPrice[i];
//                 var TotalNumber = priceElement.innerText;
//                 var currentBalance = parseFloat(TotalNumber);
//                 console.log(currentBalance);
//                 var multiplyValue = currentBalance * numberCount;
//                 priceElement.innerText = multiplyValue - numberCount;
            
//         });
//     }
// }
// decrement();









// document.getElementById('plus').addEventListener('click', function () {
//     productHandler(true);
//     var getQuantity = document.getElementById('quantity');
//     var phoneQuantity = parseInt(getQuantity.value);
//     var quantityCount = phoneQuantity + 1;
//     getQuantity.value = quantityCount;
//     var productPriceCount = quantityCount * 1219;
//     document.getElementById('productPrice').innerText = productPriceCount;
// });

// document.getElementById('minus').addEventListener('click', function () {
//     productHandler(false);
//     if (quantityCount < 1 || productPriceCount == 0) {
//         alert('please add product');
//         getQuantity.value = 1;
//         productPriceCount = 1219;
//         document.getElementById('productPrice').innerText = 1219;
//     } else {
        
//     }
// });

function productHandler(products,isIncrase) {
    var getQuantity = document.getElementById(products + '-quantity');
    var phoneQuantity = parseInt(getQuantity.value);
    var caseCount = phoneQuantity;
    if (isIncrase == true) {
        caseCount = phoneQuantity + 1;
        console.log('test');
    } else if (isIncrase == false && caseCount > 0) {
        caseCount = phoneQuantity - 1;
    }
  
    getQuantity.value = caseCount;
    if (products == 'phone') {
        var productPriceCount = caseCount * 1219;
    } else if (products == 'case') {
        var productPriceCount = caseCount * 59;
    }
    document.getElementById(products + '-total').innerText = productPriceCount;
    calculateFuntion();
}
calculateFuntion();
function calculateFuntion() {
    // sub total calculate function
    var phoneInput = getInputValue('phone');
    var caseInput = getInputValue('case');
    var subTotal = phoneInput * 1219 + caseInput * 59;
    document.getElementById('subtotal').innerText = subTotal;
    console.log(subTotal);


    var tax = Math.round(subTotal * 0.1);
    document.getElementById('tax').innerText = tax;

    var grandTotal = subTotal + tax;
    document.getElementById('grandTotal').innerText = grandTotal;

}

function getInputValue(products) {
    var getQuantity = document.getElementById(products + '-quantity');
    var phoneQuantity = parseInt(getQuantity.value);
    return phoneQuantity;
}

//  = subTotal;
 
// function productcase(isIncrase) {
//     var getQuantity = document.getElementById('quantity1');
//     var phoneQuantity = parseInt(getQuantity.value);
//     var caseCount = phoneQuantity;
//     if (isIncrase == true) {
//         caseCount = phoneQuantity + 1;
//         console.log('test');
//     } else if (isIncrase == false && caseCount > 0) {
//         caseCount = phoneQuantity - 1;
//     }
//     getQuantity.value = caseCount;
//     var productPriceCount = caseCount * 59;
//     document.getElementById('productPrice1').innerText = "$" + productPriceCount;
//  }
