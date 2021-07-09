// count value
var plus = document.querySelectorAll('.plus');
var minus = document.querySelectorAll('.minus');
var quantity = document.querySelectorAll('.quantity');
var productPrice = document.querySelectorAll('.productPrice');

var defultvalue = parseFloat(document.querySelector('.default-value').innerText);
console.log(defultvalue);
// var plus = document.getElementById('plus');
function increment() {
    for (let i = 0; i < plus.length; i++) {
        var plusBtn = plus[i];
        console.log(plusBtn);
        var count;
        plusBtn.addEventListener('click', function () {
            let quantityInput = quantity[i];
            // getting value of input
            count = quantityInput.value;
            console.log(quantityInput);
            var numberCount = parseInt(count);
            numberCount++;
            // setting value of input 
            quantityInput.value = numberCount;

            let priceElement = productPrice[i];
                var TotalNumber = priceElement.innerText;
                var currentBalance = parseFloat(TotalNumber);
                var multiplyValue = currentBalance * numberCount;
                priceElement.innerText = multiplyValue;
        });
    }
}
increment()

function decrement(id) {
    for (let i = 0; i < minus.length; i++) {
        var minusBtn = minus[i];
        var count;
        minusBtn.addEventListener('click', function () {
             // getting value of input
             let quantityInput = quantity[i];
            count = quantityInput.value;
            var numberCount = parseInt(count);
            numberCount--;
            // setting value of input 
            quantityInput.value = numberCount;
            // return numberCount;
            if (numberCount >= 1) {
                quantityInput.value = numberCount;
            } else {
                alert('sorry');
                numberCount = 1;
                quantityInput.value = 1
            }

                let priceElement = productPrice[i];
                var TotalNumber = priceElement.innerText;
                var currentBalance = parseFloat(TotalNumber);
                console.log(currentBalance);
                var multiplyValue = currentBalance * numberCount;
                priceElement.innerText = multiplyValue;
            
        });
    }
}
decrement();











