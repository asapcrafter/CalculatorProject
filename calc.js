var add = (a, b) => a + b;

var subtract = (a, b) => a - b;

var multiply = (a, b) => a * b;

var divide = (a, b) => a / b;

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

console.log(operate(2, 3,'/'))