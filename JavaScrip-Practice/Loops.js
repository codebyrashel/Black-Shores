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
