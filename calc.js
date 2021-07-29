//Operator functions
var add = (a, b) => parseInt(a) + parseInt(b)
var subtract = (a, b) => a - b
var multiply = (a, b) => a * b
var divide = (a, b) => a / b

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
}; 
  

//Defines the operator using the html buttons
const btnAdd = document.querySelector('#buttonAdd');
    btnAdd.onclick = () => operator = '+';
const btnSub = document.querySelector('#buttonSubtract');
    btnSub.onclick = () => operator = '-';
const btnMult = document.querySelector('#buttonMultiply');
    btnMult.onclick = () => operator = '*';
const btnDiv =  document.querySelector('#buttonDivide');
    btnDiv.onclick = () => operator = '/';
const btnEqual = document.querySelector('#buttonEqual');
    btnEqual.onclick = () => {
        operate(a, b, operator);
        console.log(sum);
    };
const btnClear = document.querySelector('#buttonClear');
    btnClear.onclick = () => {
        a = null
        b = null
        operator = null
    };

//Creates buttons for numbers 0-9
(function () {
    for (i = 0; i < 10 ; i++) {
        div = document.createElement('button');
            div.setAttribute('class', `number`);
            div.innerHTML = `${i}`;
            document.querySelector('.buttonsNum').appendChild(div);
    }
}) ();

//Defines values 'a' and 'b' for calculation
const btnNumber = document.querySelectorAll('.number');
    btnNumber.forEach((button) =>
        button.addEventListener('click', () => concatNumber(button.textContent))
    );
    function concatNumber(value) {
        if (operator == null) {
            a == null ? a = `${Number(value)}` : a = `${a}${Number(value)}`;
            console.log(a)
        } else {
            b == null ? b = `${Number(value)}` : b = `${b}${Number(value)}`;
            console.log(b)
            operate(a, b, operator); //remove console.log
            console.log(sum); //remove
        };
    };

//
