const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number")
let displayValue = document.createElement('h3')

display.appendChild(displayValue)

numbers.forEach(element => {
    element.addEventListener("click", populateDisplay)
});



function add(){
    
}

function subtract() {
    
}

function multiply() {
    
}

function divide() {
    
}

function operate(operator, num1, num2) {

}

function populateDisplay(event) {
    displayValue.textContent += event.target.textContent
}
