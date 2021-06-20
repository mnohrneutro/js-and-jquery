// javascript
var num1EL;
var num2El;
var sumEl = document.getElementById('sum-el');
var errEl = document.getElementById('error-el');



function add() {
    num1EL = document.getElementById('num1-el').value;
    // alert(typeof num1EL);
    num2El = document.getElementById('num2-el').value;
    var num1 = parseInt(num1EL);
    var num2 = parseInt(num2El);
    sumEl.innerHTML = num1 + num2;
    // console.log(num1EL);
    // alert(num1EL);
}

function sub() {
    num1EL = document.getElementById('num1-el').value;
    // alert(typeof num1EL);
    num2El = document.getElementById('num2-el').value;
    sumEl.innerText = num1EL - num2El;
}

function divide() {
    num1EL = document.getElementById('num1-el').value;
    // alert(typeof num1EL);
    num2El = document.getElementById('num2-el').value;
    if (num2El != 0) {
        sumEl.innerText = num1EL / num2El;
    } else {
        sumEl.innerText = 'math error';
    }
}

function multiply() {
    num1EL = document.getElementById('num1-el').value;
    // alert(typeof num1EL);
    num2El = document.getElementById('num2-el').value;
    sumEl.innerText = num1EL * num2El;
}