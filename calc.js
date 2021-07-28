var add = (a, b) => a + b;
var subtract = (a, b) => a - b;
var multiply = (a, b) => a * b;
var divide = (a, b) => a / b;

let a =2
let b = 10
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
    btnMult.onclick = () => operator = '*';
const btnDiv =  document.querySelector('#buttonDivide');
    btnDiv.onclick = () => operator = '/';
const btnEqual = document.querySelector('#buttonEqual');
    btnEqual.onclick = () => operate();

    

console.log(operate(2, 3,'/'))