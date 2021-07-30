//Operator functions
var add = (a, b) => a + b
var subtract = (a, b) => a - b
var multiply = (a, b) => a * b
var divide = (a, b) => a / b

const screen = document.querySelector('.screen');
var a = null
var b = null
var operator = null
var sum = null

function operate(a, b, operator) {
    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') return;
        switch(operator) {
            case '+':
                sum = add(a, b);
                break;
            case '-':
                sum = subtract(a, b);
                break;
            case '*':
                sum = multiply(a, b);
                break;
            case '/':
                if (b == 0) return;
                sum = divide(a, b);
                break;
            };
        console.log(sum);
        updateScreen(sum);
}; 
  
//Defines the operator using the html buttons
const btnAdd = document.querySelector('#buttonAdd');
    btnAdd.onclick = () => {
        if (b !== null) repeatOperator();
        operator = '+' 
    };
const btnSub = document.querySelector('#buttonSubtract');
    btnSub.onclick = () => {
        if (b !== null) repeatOperator();
        operator = '-';
    };
const btnMult = document.querySelector('#buttonMultiply');
    btnMult.onclick = () => {
        if (b !== null) repeatOperator();
        operator = '*';
    };
const btnDiv =  document.querySelector('#buttonDivide');
    btnDiv.onclick = () => {
        if (b !== null) repeatOperator();
        operator = '/';
    };
const btnEqual = document.querySelector('#buttonEqual');
    btnEqual.onclick = () => operate(a, b, operator);
const btnClear = document.querySelector('#buttonClear');
    btnClear.onclick = () => clearCalculator();
const btnDel = document.querySelector('#buttonDelete');
    btnDel.onclick = () => deleteNumber();

function repeatOperator() {
    operate(a, b, operator);
    a = sum;
    b = null;
}
    
function clearCalculator() {
    a = null;
    b = null;
    sum = null;
    operator = null;
    updateScreen(0)
};

function deleteNumber() {
    if (operator == null) {
        if (a == null || a == 0) return;
        a = (a / 10 ^ 0);
        updateScreen(a);
    } else {
        if (b == null || b == 0) return;
        b = (b / 10 ^ 0);
        updateScreen(b);
    };
}

//Creates buttons for numbers 0-9
// (function () {
//     for (i = 0; i < 10 ; i++) {
//         div = document.createElement('button');
//             div.setAttribute('id', `${i}`)
//             div.setAttribute('class', `number`);
//             div.innerHTML = `${i}`;
//             document.querySelector('.buttonsNum').appendChild(div);
//     }
// }) ();

//Defines values 'a' and 'b' for calculation
const btnNumber = document.querySelectorAll('.number');
    btnNumber.forEach((button) =>
        button.addEventListener('click', () => concatNumber(button.textContent)));

function concatNumber(value) {
    if (operator == null) {
        a == null ? a = parseInt(value) : a = parseInt(a+value);
        console.log(a)
        updateScreen(a)
    } else {
        b == null ? b = parseInt(value) : b = parseInt(b+value);
        console.log(b)
        updateScreen(b);
    };
};

function updateScreen(input) {
    screen.value = input
}
