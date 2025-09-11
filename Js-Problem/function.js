// Task-1
// Take four parameters. Multiply the four numbers and then return the result

// Answer:

function multiplyFourNumbers(a, b, c, d) {
    return a * b * c * d;
}
// console.log(multiplyFourNumbers(1, 2, 3, 4));

const multiply = multiplyFourNumbers(1, 2, 3, 4);
console.log(multiply);




// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// Answer:

function doMath(num1) {
    if (num1 % 2 === 1) {
        let result = num1 * 2
        return result
    } else {
        let result = num1 / 2
        return result
    }
}

// const sum = doMath(10);

const result = doMath(9);

console.log(result)

// I did with many experiment and using my own thinking

// more cleaner answer without let

function doMath(num1) {
    if (num1 % 2 === 1) {
        return num1 * 2;
    } else {
        return num1 / 2;
    }
}

const result2 = doMath(10);
console.log(result2); // 5



// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array) {
    let sum = 0; // start with 0

    // loop through each number in the array
    for (let num of array) {
        sum += num; // add each number to sum
    }

    // average = sum / size of array
    let avg = sum / array.length;

    return avg; // return the result
}

const arrays = [1, 2, 21, 31, 34];
const average = make_avg(arrays);

console.log(average); // 17.8

// Task:

// Write a function called find_max() which will take an array of integers and return the largest number from the array.

// Example:

// Input: [4, 7, 1, 99, 23]

// Output: 99

// function find_max(max){
//     let largest = 0;
//     for(let i = max; max <= largest; i++)
// }
function find_max(arr) {
    // Start by assuming the first number is the largest
    let largest = arr[0];

    // Loop through each number in the array
    for (let number of arr) {
        if (number > largest) {  // If current number is bigger
            largest = number;    // Update largest
        }
    }

    return largest;  // Return the final largest number
}

const arrInteger = [4, 7, 1, 99, 23];
const answer = find_max(arrInteger);

console.log(answer); // 99


// Task:

// Write a function called find_min_max() that takes an array of integers and returns both the smallest and largest numbers in the array as an object.

// Example:

// Input: [4, 7, 1, 99, 23]

// Output: { min: 1, max: 99 }

function find_min_max(arr2){
    let minimum = arr2[0];
    let max = arr2[0];
    for(let number of arr2){
        if(number < minimum){
            minimum = number
        }
        else{
            if(number > max){
                max = number
            }
        }
    }
    return {max, minimum};
}

const minMax = [4, 7, 1, 99, 23];

// find_min_max(minMax); You don’t need to call find_min_max(minMax); before assigning to result3 — that first call does nothing here.

const result3 = find_min_max(minMax);

console.log(result3);

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd