// ==============================================
// 036–041: JavaScript Strings — Master Notes
// ==============================================
//
// Covered topics:
// 1. String creation (Literal vs Constructor)
// 2. Type conversion to string
// 3. Escape notation
// 4. String comparison
// 5. String methods
// 6. String length
// ==============================================

// ------------------------------------------------------
// 1. STRING CREATION
// ------------------------------------------------------

// String Literal (Most Common & Recommended)
const stringLiteral = 'Hello World'
console.log(stringLiteral) // Output: Hello World

// String Constructor (Not commonly used unless you need an object wrapper)
const stringConstructor = String('Hello World')
console.log(stringConstructor) // Output: Hello World

// ------------------------------------------------------
// 2. CONVERTING OTHER TYPES TO STRING
// ------------------------------------------------------

let numberValue = 10

// Method 1: Using String() constructor
let numberAsString1 = String(numberValue)
console.log(numberAsString1, typeof numberAsString1) // Output: "10" string

// Method 2: Adding an empty string
let numberAsString2 = numberValue + ''
console.log(numberAsString2, typeof numberAsString2) // Output: "10" string

// Method 3: Using toString() method
let numberAsString3 = numberValue.toString()
console.log(numberAsString3, typeof numberAsString3) // Output: "10" string

// ------------------------------------------------------
// 3. ESCAPE NOTATION (Special Characters)
// ------------------------------------------------------
//
// Used to insert special formatting or characters into strings.

let escapeSingleQuote = 'This is a \'string\''
console.log(escapeSingleQuote) // Output: This is a 'string'

let newLineExample = 'This is line 1\nThis is line 2'
console.log(newLineExample)
/*
Output:
This is line 1
This is line 2
*/

let tabExample = 'Column1\tColumn2'
console.log(tabExample) // Output: Column1    Column2  (tab space in between)

let backslashExample = 'This is a backslash: \\'
console.log(backslashExample) // Output: This is a backslash: \

// ------------------------------------------------------
// 4. STRING COMPARISON
// ------------------------------------------------------
//
// JavaScript compares strings using **lexicographic order**
// (based on Unicode values of characters).

let compareA = 'abc'
let compareB = 'bcd'
console.log(compareA < compareB) // true (because 'a' comes before 'b')

let compareC = 'aaa'
let compareD = 'aaa'
console.log(compareC === compareD) // true (exact match)

let compareE = 'aaaZ'
let compareF = 'aaaaz'
console.log(compareE < compareF) // true ('Z' has a smaller Unicode value than 'a')

// ------------------------------------------------------
// 5. COMMON STRING METHODS
// ------------------------------------------------------

let firstName = 'I am'
let lastName = 'Rashel'

// concat() → combine strings
let fullName = firstName.concat(' ', lastName)
console.log(fullName) // Output: I am Rashel

// substr(start, length) → get part of string
let partOfName = fullName.substr(5, 3) // Start at index 5, length 3
console.log(partOfName) // Output: ash

// charAt(index) → get character at index
console.log(fullName.charAt(5)) // Output: a

// startsWith() → check beginning
console.log(fullName.startsWith('I am')) // true

// endsWith() → check ending
console.log(fullName.endsWith('Rashel')) // true

// toUpperCase() → uppercase text
console.log('i love programming'.toUpperCase()) // I LOVE PROGRAMMING

// toLowerCase() → lowercase text
console.log(firstName.toLowerCase()) // i am

// trim() → remove spaces from start & end
console.log('     extra spaces here     '.trim()) // "extra spaces here"

// split() → turn string into array
console.log(fullName.split(' ')) // ["I", "am", "Rashel"]

// ------------------------------------------------------
// 6. STRING LENGTH
// ------------------------------------------------------

let sampleString = 'some string'

// charAt() example
console.log(sampleString.charAt(3)) // Output: e

// Finding length manually (loop trick)
let lengthCounter = 0

while (true) {
    if (sampleString.charAt(lengthCounter) === '') {
        break // stop when no character found
    } else {
        lengthCounter++
    }
}
console.log(lengthCounter) // Output: 11

// Using built-in .length property (faster and easier)
console.log(sampleString.length) // Output: 11

// Works directly on string literals too
console.log('aodfhnaoisndfpoaisncdpasnc'.length) // Output: 26

// ==============================================
// WHEN & WHY USE STRINGS THIS WAY
// ==============================================
//
// - Use **string literals** for simplicity and readability.
// - Use escape sequences for formatting output or including special characters.
// - Use .length for quick string size checks.
// - Use string methods (concat, split, trim, etc.) for text manipulation.
// - Understanding lexicographic comparison helps in sorting and searching.
// ==============================================


//---------------Programming hero Note----------------//
// ==============================================
// - String is immutable --> Not Changeable
// - Array is mutable --> You can change the Array elements

//   Once created, the value of a string cannot be altered directly.
//   Any modification returns a *new* string instead of changing the original.

let str = "Hello";
str[0] = "Y";    //  This does nothing
console.log(str); // Output: "Hello"

let newStr = str + " World";  
console.log(newStr); // Output: "Hello World"
// Notice: str stayed the same, only newStr was created


// - Array is mutable --> You can change the Array elements
//   You can add, remove, or replace items inside an array.

let arr = [1, 2, 3];
arr[0] = 99;   // You can modify directly
console.log(arr); // Output: [99, 2, 3]

arr.push(4);   // Add new element
console.log(arr); // Output: [99, 2, 3, 4]

arr.pop();     // Remove last element
console.log(arr); // Output: [99, 2, 3]

// Extra Example: Strings vs Arrays
// --------------------------------
// You cannot "push" into a string, but you can push into an array.

let text = "ABC";
// text.push("D"); // Error: strings don’t support push
let letters = ["A", "B", "C"];
letters.push("D"); // Works
console.log(letters); // Output: ["A", "B", "C", "D"]

