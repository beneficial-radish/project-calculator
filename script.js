function add(a,b) {
    sum = Number(a) + Number(b)
    return sum
}

function subtract(a,b) { 
    difference = Number(a)-Number(b)
    return difference
}

function multiply(a,b) {
    product = Number(a)*Number(b)
    return product
}

function divide(a,b) {
    quotient = Number(a)/Number(b)
    return quotient
}

let firstNumber = ""
let secondNumber = ""
let operator = ""

function operate(firstNumber, operator, secondNumber) {
switch(operator) {
    case '+':
        add(firstNumber, secondNumber)
        break;
    case '-':
        subtract(firstNumber,secondNumber)
        break;
    case '*':
        multiply(firstNumber,secondNumber)
        break;
    case '/':
        divide(firstNumber,secondNumber)
        break;
}
}