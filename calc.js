var add = (a, b) => a + b;
var subtract = (a, b) => a - b;
var multiply = (a, b) => a * b;
var divide = (a, b) => a / b;

let a
let b
let operator

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

//Defines operator using HTML buttons
const btnAdd = document.querySelector('#buttonAdd');
    btnAdd.onclick = () => operator = '+';
const btnSub = document.querySelector('#buttonSubtract');
    btnSub.onclick = () => operator = '-';
const btnMult = document.querySelector('#buttonMultiply');
    btnMult = () => operator = '*';
const btnDiv =  document.querySelector('#buttonDivide');
    btnDiv = () => operator = '/';

    

console.log(operate(2, 3,'/'))