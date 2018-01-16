//LEVEL 0
var x = 5;
var y = 2;
console.log("x + y = ",x+y);
console.log("x - y = ",x-y);
console.log("x / y = ",x/y);
console.log("x * y = ",x*y);
console.log("x % y = ",x%y);

//LEVEL 1
function add (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(add(x,y));

function substract (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
console.log(substract(x,y));

function multiply (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
console.log(multiply(x,y));

function divide (firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}
console.log(divide(x,y));

function modulo (firstNumber, secondNumber) {
  return firstNumber % secondNumber;
}
console.log(modulo(x,y));

//LEVEL 2

var result = add(substract(x,y), divide(x,y));

console.log(result);
