// 042. JavaScript Arrays

// ----------------------
// 1. What is an Array?
// ----------------------
// An array is a data structure that allows you to store multiple values in a single variable.
// Each value has an index (starting from 0).

// Example: Array Literal Syntax
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); 
// Output: [1, 2, 3, 4, 5]

// Accessing elements by index
console.log(numbers[0]); 
// Output: 1 (first element)

console.log(numbers[3]); 
// Output: 4 (fourth element, because index starts at 0)

console.log(numbers[7]); 
// Output: undefined (no value stored at index 7)

console.log(numbers.length); 
// Output: 5 (there are 5 elements in the array)

// ----------------------
// 2. Adding Data to an Array
// ----------------------
const fruits = ["Apple", "Banana"];
console.log(fruits); 
// Output: ["Apple", "Banana"]

// Add at the next available index
fruits[2] = "Cherry";
console.log(fruits); 
// Output: ["Apple", "Banana", "Cherry"]

// Add at an index far beyond current length
fruits[5] = "Orange";
console.log(fruits); 
// Output: ["Apple", "Banana", "Cherry", empty × 2, "Orange"]
// Note: Empty slots are "empty items", not undefined values.

// ----------------------
// 3. Difference between length in String and Array
// ----------------------
// For both strings and arrays, length is a *property*, not a method.  
// In strings: "hello".length → gives number of characters  
// In arrays: array.length → gives number of items in the array

const strExample = "Hello";
console.log(strExample.length); 
// Output: 5 (characters count)

console.log(fruits.length); 
// Output: 6 (highest index + 1)

// ----------------------
// 4. Last Index in an Array
// ----------------------
const colors = ["Red", "Green", "Blue"];
console.log(colors.length - 1); 
// Output: 2 (last index position)

// Last element
console.log(colors[colors.length - 1]); 
// Output: "Blue"

// ----------------------
// 5. Adding Items - Methods
// ----------------------

// push() → add to the end
const animals = ["Dog", "Cat"];
animals.push("Elephant");
console.log(animals); 
// Output: ["Dog", "Cat", "Elephant"]

// unshift() → add to the start
animals.unshift("Tiger");
console.log(animals); 
// Output: ["Tiger", "Dog", "Cat", "Elephant"]

// ----------------------
// 6. Viewing & Modifying Array Data
// ----------------------
const cars = ["BMW", "Toyota", "Tesla"];
console.log(cars[1]); 
// Output: "Toyota" (view)

cars[1] = "Honda"; // Modify item
console.log(cars); 
// Output: ["BMW", "Honda", "Tesla"]

// Another modification example
cars[0] = "Ford";
console.log(cars); 
// Output: ["Ford", "Honda", "Tesla"]

// ----------------------
// 7. Creating Array using Constructor
// ----------------------
const arr1 = Array(); // Empty array
console.log(arr1); 
// Output: []

const arr2 = Array(3); // Creates an array with length 3 (empty slots)
console.log(arr2); 
// Output: [empty × 3]

const arr3 = Array("A", "B", "C");
console.log(arr3); 
// Output: ["A", "B", "C"]

// ----------------------
// 8. Which One to Use?
// ----------------------
// - Use array literal [] most of the time. It's shorter, cleaner, and more common.
// - Use Array() constructor rarely, mainly for special cases like creating a fixed-size array.





// ====================================
// 044. JS Array Traversing Examples
// ====================================

// Example 1: Accessing elements by index
// ---------------------------------------
const numbers1 = [4, 5, 8, 7, 2, 3, 50];

// Accessing the last element
const lastElement = numbers1[numbers1.length - 1];
console.log("Last element:", lastElement); 
// Output: Last element: 50


// Example 2: Increasing each element by 5
// ----------------------------------------
const numbers2 = [4, 5, 8, 7, 2, 3, 50];

// Loop through array and add 5 to each element
for (let i = 0; i < numbers2.length; i++) {
    numbers2[i] = numbers2[i] + 5;
}
console.log("Array after adding 5 to each element:", numbers2);
// Output: Array after adding 5 to each element: [9, 10, 13, 12, 7, 8, 55]


// Example 3: Summing all elements in the array
// --------------------------------------------
const numbers3 = [4, 5, 8, 7, 2, 3, 50];
let sum = 0;

for (let i = 0; i < numbers3.length; i++) {
    sum += numbers3[i];
}
console.log("Sum of all elements:", sum);
// Output: Sum of all elements: 79


// Example 4: Filtering EVEN numbers
// ----------------------------------
const numbers4 = [4, 5, 8, 7, 2, 3, 50];
console.log("Even numbers:");
for (let i = 0; i < numbers4.length; i++) {
    if (numbers4[i] % 2 === 0) {
        console.log(numbers4[i]);
    }
}
/*
Output:
Even numbers:
4
8
2
50
*/


// Example 5: Filtering ODD numbers
// ---------------------------------
const numbers5 = [4, 5, 8, 7, 2, 3, 50];
console.log("Odd numbers:");
for (let i = 0; i < numbers5.length; i++) {
    if (numbers5[i] % 2 !== 0) {
        console.log(numbers5[i]);
    }
}
/*
Output:
Odd numbers:
5
7
3
*/


// Example 6: Sum of EVEN and ODD numbers separately
// -------------------------------------------------
const numbers6 = [4, 5, 8, 7, 2, 3, 50];
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < numbers6.length; i++) {
    if (numbers6[i] % 2 === 0) {
        evenSum += numbers6[i];
    } else {
        oddSum += numbers6[i];
    }
}

console.log("Sum of even numbers:", evenSum); 
// Output: Sum of even numbers: 64
console.log("Sum of odd numbers:", oddSum);   
// Output: Sum of odd numbers: 15








