//Operator functions
var add = (a, b) => a + b;
var subtract = (a, b) => a - b;
var multiply = (a, b) => a * b;
var divide = (a, b) => a / b;

var a =2
var b = 10
var operator



function operate(a, b, operator) {
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') return;
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        };
    };   

//Defines operator using buttons
const btnAdd = document.querySelector('#buttonAdd');
    btnAdd.onclick = () => operator = '+';
const btnSub = document.querySelector('#buttonSubtract');
    btnSub.onclick = () => operator = '-';
const btnMult = document.querySelector('#buttonMultiply');
    btnMult.onclick = () => operator = '*';
const btnDiv =  document.querySelector('#buttonDivide');
    btnDiv.onclick = () => operator = '/';
const btnEqual = document.querySelector('#buttonEqual');
    btnEqual.onclick = () => operate(a, b, operator);

//Creates buttons for numbers
(function () {
    for (i = 0; i < 10 ; i++) {
        div = document.createElement('button');
            div.setAttribute('id', `${i}`);
            div.innerHTML = `${i}`;
            div.addEventListener('click', () => changeValue())
            document.querySelector('.buttonsNum').appendChild(div);
    }
}) ();

//Defines values for calculator
const btnValue = document.getElementsByClassName('.buttonsNum')
function changeValue() {
    console.log(`${i}`)
}
console.log(operate(2, 3,'/'))