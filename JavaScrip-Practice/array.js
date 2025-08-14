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
