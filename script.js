function add(firstNumber,secondNumber) {
    if (firstNumber.length == 0){
        return secondNumber
    } else if (secondNumber.length == 0) {
        return firstNumber
    } else {
        sum = Number(firstNumber) + Number(secondNumber)
        return sum
    }
}

function subtract(firstNumber, secondNumber) { 
    if (firstNumber.length == 0){
        return secondNumber
    } else if (secondNumber.length == 0) {
        return firstNumber
    } else {
        difference = Number(firstNumber)-Number(secondNumber)
        return difference
    }
}

function multiply(firstNumber, secondNumber) {
    if (firstNumber.length == 0){
        return secondNumber
    } else if (secondNumber.length == 0) {
        return firstNumber
    } else {
        product = Number(firstNumber)*Number(secondNumber)
        return product
    }
}

function divide(firstNumber, secondNumber) {
    if (firstNumber.length == 0){
        return secondNumber
    } else if (secondNumber.length == 0) {
        return firstNumber
    } else {
        quotient = Number(firstNumber)/Number(secondNumber)
        return quotient
    }
}
let secondNumber = "0"
let firstNumber = ""
let operator = ""
let solution = ""


function operate () {
switch(operator) {
    case '':
        solution = displayBox.value
        break;
    case '+':
        solution = add(firstNumber, secondNumber)
        break;
    case '-':
        solution = subtract(firstNumber,secondNumber)
        break;
    case '*':
        solution = multiply(firstNumber,secondNumber)
        break;
    case '/':
        solution = divide(firstNumber,secondNumber)
        break;
}
    solution = Number(parseFloat(solution.toFixed(4)))
    solution = String(solution)
    firstNumber = solution
    secondNumber = ""
    displayBox.value = solution
    return solution
}

//create variables to call each digit and add to display box
let displayValue = 0
const displayBox = document.querySelector("input")
const digits = document.querySelectorAll(".digit")



digits.forEach((num) => {
    num.addEventListener ("click", () => 
    displayValue == 0 || displayValue == "" ? displayBox.value = num.value: displayBox.value = String(displayBox.value) + 
    String(num.value))
    num.addEventListener ("click", () => displayValue = displayBox.value)
    num.addEventListener("click", () => secondNumber = displayBox.value)
    } )

//operators
const plusButton = document.querySelector(".add")
const minusButton = document.querySelector(".subtract")
const timesButton = document.querySelector(".multiply")
const dividedButton = document.querySelector(".divide")

plusButton.addEventListener("click", () => operator = "+")
minusButton.addEventListener("click", () => operator = "-")
timesButton.addEventListener("click", () => operator = "*")
dividedButton.addEventListener("click", () => operator = "/")

const operators = document.querySelectorAll(".operator")

operators.forEach((op) => {
    op.addEventListener("click", operate)
    op.addEventListener("click", () => firstNumber = displayBox.value)
    op.addEventListener("click", () => secondNumber = "")
    op.addEventListener("click", () => displayBox.value = "")
} )
    




//equal button 

const equal = document.querySelector(".equals")
equal.addEventListener("click", operate)
equal.addEventListener("click", () => displayValue = "")


function clear() {
    firstNumber = ""
    secondNumber = ""
    operator = ""
    displayBox.value = ""

}
const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", clear)