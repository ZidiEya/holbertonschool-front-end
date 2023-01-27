/*
Create a func divideBy:
    It takes into argument firstNumber (number)
    It returns a func that takes into arg secondNumber (number)
    It returns the second number divided by the first number
Create a func addBy:
    It takes into argument firstNumber (number)
    It returns a func that takes into argument secondNumber (number)
    It returns the sum of the two numbers
Create four closures:
    addBy100, that uses the func addBy with the number 100
    addBy1000, that uses the func addBy with the number 1000
    divideBy10, that uses the func divideBy with the number 10
    divideBy100, that uses the func divideBy with the number 100
*/
function divideBy(firstNumber) {
    return (secondNumber) => (secondNumber / firstNumber)
}

function addBy(firstNumber) {
    return (secondNumber) => (firstNumber + secondNumber)
}

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);
