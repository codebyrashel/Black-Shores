// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// Answer:


// (2°C × 9/5) + 32 = 35.6°F
function CelFahrenheit(temp) {
    return (temp * 9 / 5) + 32
}

const temperature = CelFahrenheit(8);
console.log(temperature);

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// Task-2: Count how many times each number is repeated in the array

let numbers = [1, 2, 2, 3, 4, 4, 4, 5, 1, 2];

let count = {}; //hashmap

for (let num of numbers) {
  if (count[num]) {
    count[num] += 1;  // If number already exists, increase count
  } else {
    count[num] = 1;   // Otherwise, initialize with 1
  }
}

// Print result
for (let key in count) {
  console.log(`Number ${key} is repeated ${count[key]} time(s).`);
}

// Sub-task 1:

// You are given an array of numbers.
// Find the first number that is repeated in the array.

// Example:
// Input: [3, 5, 2, 3, 7, 5]
// Output: The first repeated number is 3


let array = [3, 5, 2, 3, 7, 5];

let empty = {};

for(num of array){
    // console.log(empty);
    if (empty[num]){
        // console.log(empty);
        // empty[num] += 1;
        console.log("The first repeated number is " + num);
        break
    }
    else{
        // console.log(empty);
        empty[num] = 1;
    }
}

// Sub-task 2:

// You are given an array of numbers.
// Find the number that is repeated the most and print how many times it occurs.

// Example:
// Input: [4, 1, 4, 2, 4, 3, 2, 2, 2]
// Output: The number 4 is repeated 3 times (most repeated)

let repeatedNumbers = [4, 1, 4, 2, 4, 3, 2, 2, 2];

let stored = {};

// Step 1: Count frequencies
for (let num of repeatedNumbers) {
    if (stored[num]) {
        stored[num] += 1;
    } else {
        stored[num] = 1; // cleaner than "+1"
    }
}

console.log("Frequencies:", stored); // just to see the counts

// Step 2: Find the most repeated number
let maxCount = 0;
let mostRepeated;

for (let key in stored) {
    if (stored[key] > maxCount) {
        maxCount = stored[key];
        mostRepeated = key;
    }
}

console.log(`The number ${mostRepeated} is repeated ${maxCount} times (most repeated).`);


// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

// Task-3:
// Write a function to count the number of vowels in a string.

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// Task-5:
// Generate a random number between 10 to 20.
