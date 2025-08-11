// 028. Introduction to Loops

// Loops are statements that repeatedly execute a block of code until a specified condition becomes false.
// There are mainly three types of loops in JavaScript:
// 1. For Loop
// 2. While Loop
// 3. Do While Loop

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