// The function queryselector() is used to target html elements like h1
// queryselector() operates like css selectors
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


// -------- JavaScript Variables (no specified datatypes) --------
let myName = "Callieallie"; // String
let myNum = 10; // Number
let isValid = true; // Boolean
let apartmentNumbers = [100, 105, 110, 120, 125, 130]; // Array
// Everything in JavaScript is an object

// -------- JavaScript Operators --------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
6 + 3; // Addition
'Get' + 'That' + 'Bit'; // Addition
12 - 5; // Subtraction
9 * 34; // Multiplication
74 / 2; // Division
myNum === 16; // Strict equality (returns a boolean value)
myNum !== 18; // Negation of strict equality

// -------- JavaScript Conditionals --------
let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
} else {
    alert("Awwww, but chocolate is my favorate...");
}

// -------- JavaScript Functions --------
// queryselector and alert are functions which are built into the browser
let someVariable = document.querySelector("h1");
alert("hello!");

// A function is declared using the word function whereas a variable uses the word let
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

// -------- JavaScript Events --------
// Events are code structures that listen for activity in the browser and run code in response
// The event handler (the frunction handling the alert) is attached to an element (in this case, "ul")
// NOTICE: the function passed into addEventListener is nameless. Nameless functions like this
// are called anonymous functions.
document.querySelector("ul").addEventListener("click", function() {
    alert("Ouch! Stop poking me!");
});

// -------- JavaScript Arrow Functions --------
// -------------- or lambdas ------------
document.querySelector("p").addEventListener("click", () => {
    alert("what the actual hose?!");
});