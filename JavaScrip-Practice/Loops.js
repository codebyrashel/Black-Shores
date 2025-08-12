// 028. Introduction to Loops

// Loops are statements that repeatedly execute a block of code until a specified condition becomes false.
// There are mainly three types of loops in JavaScript:
// 1. For Loop
// 2. While Loop
// 3. Do While Loop


// 1. For Loop → Use when you know EXACTLY how many times you want to run the loop.
// 2. While Loop → Use when you DON'T know how many times the loop will run, and it should keep going until a condition becomes false.
// 3. Do While Loop → Similar to while, but guarantees the loop runs AT LEAST ONCE before checking the condition.



// Below is the For loop syntax and examples:

/*
    for (initializer; condition; increment) {
        // code block to be executed repeatedly
    }
*/

// Example 1: Print "Rashel Hossen" 100 times with numbering starting from 1
for (let i = 0; i < 100; i++) {
    console.log((i + 1) + " Rashel Hossen");
}

// Example 2: Print numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Example 3: Print all odd numbers between 1 and 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// Example 4: Sum numbers from 1 to 10 with step-by-step logging
let sum = 0;
for (let i = 1; i <= 10; i++) {
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum += i;
}
console.log('result = ' + sum);

// Example 5: Print all even numbers between 1 and 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



// Below is the While loop syntax and examples:

// WHILE LOOP SYNTAX
/*
    while (condition) {
        // code block runs as long as condition is true
    }
*/

// Example 6: Basic while loop - print "Rashel Hossen" 10 times
let i = 0;
while (i < 10) {
    console.log("Rashel Hossen");
    i++;
}

// Example 7: While loop with a random number generator until a specific value appears
let isRunning = true; // Must use 'let' so we can reassign

while (isRunning) {
    const rand = Math.floor(Math.random() * 10 + 1); // Generates number between 1 and 10

    if (rand === 9) {
        console.log("Winner winner");
        isRunning = false; // Stops the loop
    } else {
        console.log("You have got " + rand);
    }
}



// Below is the While loop syntax and examples:

// DO WHILE LOOP SYNTAX
/*
    do {
        // code block to run
    } while (condition);
*/

// Example 8: Do while loop - always runs at least once
let counter = 0;

do {
    console.log("This will run even if the condition is false at first");
    counter++; // increases counter by 1 on each loop
} while (counter < 3);

// Example 9: Random number generator with do while loop
// This guarantees we get at least one random number before checking the condition
let randomNum;

do {
    randomNum = Math.floor(Math.random() * 10 + 1);
    console.log("You got: " + randomNum);
} while (randomNum !== 7);

console.log("Finally got lucky number 7!");



/*

Js Loop calculator problem set requirement :


Requirements:

Create four separate functions for the following operations:

Addition (add) → returns the sum of two numbers

Subtraction (subtract) → returns the difference between two numbers

Multiplication (multiply) → returns the product of two numbers

Division (divide) → returns the result of dividing the first number by the second

Create another function named calculator(a, b, operation) that:

Takes two numbers (a and b) and a string (operation) as input

Calls the appropriate function based on the value of operation ("add", "subtract", "multiply", "divide")

Returns the result of the chosen operation

If the operation is not recognized, return the string "This function is not defined".

Call the calculator function with the arguments 20, 5, and "multiply", then print the result to the console.

Write your code below:

*/


function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply( num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function calclator(a, b, operation){
    if(operation === "add"){
        const result = add(a, b)
        return result;
    }else if(operation === "subtract"){
        const result = subtract(a, b)
        return result;
    }else if (operation === "multiply"){
        const result = multiply(a, b)
        return result;
    }else if(operation === "divide"){
        const result = divide(a, b)
        return result;
    } else{
        return "This function is not defined"
    }
}

const result = calclator(20, 5, "multiply")
console.log(result)


// ChatGpt Generated code using browser

while (true) {
    let num1 = parseFloat(prompt("Enter first number:"));
    let operator = prompt("Enter operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter second number:"));

    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
    } else {
        result = "Invalid operator!";
    }

    alert(`Result: ${result}`);

    let again = prompt("Do you want to calculate again? (y/n)").toLowerCase();
    if (again !== "y") {
        alert("Calculator closed!");
        break;
    }
}
