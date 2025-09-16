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

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

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


// You are given an array of numbers.
// Find the least repeated number (the one with the smallest frequency).

// Example:
// Input: [6, 6, 7, 7, 7, 8]
// Output:

// The number 8 is repeated 1 time (least repeated)


let subArray = [1, 2, 2, 3, 4, 4, 5, 4];

let arrayStored = {};

// Count frequencies
for (let num of subArray) {
    if (arrayStored[num]) {
        arrayStored[num] += 1;
    } else {
        arrayStored[num] = 1;
    }
}
console.log("Frequencies:", arrayStored);

// Print only numbers repeated more than once
for (let key in arrayStored) {
    if (arrayStored[key] > 1) {
        console.log(`Number ${key} is repeated ${arrayStored[key]} times`);
    }
}


// Sub-task 4

// You are given an array of numbers.
// Find the least repeated number (the one with the smallest frequency).

// Example:
// Input: [6, 6, 7, 7, 7, 8]
// Output:

// The number 8 is repeated 1 time (least repeated)

let lastArray = [6, 6, 7, 7, 7, 8];
let lastStored = {};

// Count frequencies
for (let arr of lastArray) {
    if (lastStored[arr]) {
        lastStored[arr] += 1;
    } else {
        lastStored[arr] = 1;
    }
}

console.log("Frequencies:", lastStored);

let leastCount = Infinity;  // start with very large number
let leastRepeated;

for (let key in lastStored) {
    if (lastStored[key] < leastCount) {
        leastCount = lastStored[key];
        leastRepeated = key;
    }
}

console.log(`The least repeated number is ${leastRepeated}, repeated ${leastCount} time(s).`);


// Task-3:
// Write a function to count the number of vowels in a string.

function vowelsCount (count){
    let vowelCount = 0;
    for(let char of count){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            vowelCount ++; 
        }
    }
    return vowelCount;
}

const normalString = vowelsCount("How quickly daft jumping zebras vex my boy");

console.log(normalString);

// With few failed attempt This one is mine as I solved it with the knowledge I had, Now below will be the solution given by the AI

// Shorter version 

function vowelsCount(str) {
    const vowels = "aeiou";
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// Another one using one line 

const vowelsCount = str => [...str.toLowerCase()].filter(c => "aeiou".includes(c)).length;


// Task-4:
// Write a function to find the longest word in a given string.

let sentence = "I don't know Programming";

function findLongestWord(inputString) {
    let words = inputString.split(" ");
    let longestWord = words[0];

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const result = findLongestWord(sentence);

console.log(result);

// console.log(findLongestWord(sentence));


// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// Task-5:
// Generate a random number between 10 to 20.
