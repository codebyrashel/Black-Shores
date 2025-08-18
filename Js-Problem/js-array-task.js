/*

1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array

*/

//Answer:

const arrFruits = ['Mango', 'Banana', 'Pineapple', 'Orange', 'Jackfruit'];

console.log(arrFruits[3]); // logged the 3rd index element

arrFruits[2] = 'Jambura'; // 2nd index value changed to element jambura

console.log(arrFruits); // Final Array




/*

2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output

*/

//Answer:

const turistPlaces = ["Cox's Bazar", "Rangamati", "Himchari"];
console.log("Initial:", turistPlaces);

// push -> add to END
turistPlaces.push("Kuakata");
console.log("After push Kuakata:", turistPlaces);

// push -> add two more to END
turistPlaces.push("Kagrachori", "Monipur");
console.log("After push two more:", turistPlaces);

// pop -> remove last one
turistPlaces.pop();
console.log("After pop (remove last):", turistPlaces);

// unshift -> add to START
turistPlaces.unshift("Sundarban");
console.log("After unshift Sundarban (added to start):", turistPlaces);

// shift -> remove first one
turistPlaces.shift();
console.log("After shift (removed first):", turistPlaces);

// Final result
console.log("Final:", turistPlaces);


/* 

3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.

*/

// Answer:

const arr2 = ['math', 'bangla', 'physics', 'chemistry', 'history'];
console.log(arr2.includes('history'));
console.log(arr2.includes('Religion')); // checking the false output
console.log('The element is present in the array: ', arr2);


// ChatGpt Version Answer:

const books = ['Math', 'Bangla', 'Physics', 'Chemistry', 'History', 'JavaScript'];

// check if JavaScript book exists
if (books.includes('JavaScript')) {
    console.log("Yes, the array contains a JavaScript book.");
} else {
    console.log("No, the array does not contain a JavaScript book.");
}



/* 

4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.

*/


// Answer:

const arrayCheck1 = [];                         // Array
const arrayCheck2 = [1, 2, 3, 5, 7, 7, 9, 4];   // Array
const arrayCheck3 = 'ainadsdoh';                // String (Not Array)
const arrayCheck4 = { name: 'Rashel' };         // Object (Not Array)

console.log(Array.isArray(arrayCheck1)); // true
console.log(Array.isArray(arrayCheck2)); // true
console.log(Array.isArray(arrayCheck3)); // false
console.log(Array.isArray(arrayCheck4)); // false

// Trying with if else condition (Experiment)

if (Array.isArray(arrayCheck1)) {
    console.log("arrayCheck1 is an Array");
} else {
    console.log("arrayCheck1 is NOT an Array");
}

if (Array.isArray(arrayCheck2)) {
    console.log("arrayCheck2 is an Array");
} else {
    console.log("arrayCheck2 is NOT an Array");
}

if (Array.isArray(arrayCheck3)) {
    console.log("arrayCheck3 is an Array");
} else {
    console.log("arrayCheck3 is NOT an Array");
}

if (Array.isArray(arrayCheck4)) {
    console.log("arrayCheck4 is an Array");
} else {
    console.log("arrayCheck4 is NOT an Array");
}

// // Now using ternary operator

// Array.isArray(arrayCheck1) ? Array.isArray(arrayCheck2) ? Array.isArray(arrayCheck3) : 
console.log(Array.isArray(arrayCheck1) ? "Yes, Array" : "No, Not Array");
console.log(Array.isArray(arrayCheck2) ? "Yes, Array" : "No, Not Array");
console.log(Array.isArray(arrayCheck3) ? "Yes, Array" : "No, Not Array");
console.log(Array.isArray(arrayCheck4) ? "Yes, Array" : "No, Not Array");


/* 

5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().

*/


// Answer:


const arrayConcat1 = ['Android', 'Iphone', 'Mac'];
const arrayConcat2 = ['Linax', 'HyperOS', 'Windows'];

console.log('Checking the first Array: ', arrayConcat1);
console.log('Checking the second Array: ', arrayConcat2);

console.log('After ConCatening both Array: ', arrayConcat1.concat(arrayConcat2));

// Another try via storing the array in a variable and Combining arrays

const combinedArray = arrayConcat1.concat(arrayConcat2);

console.log('After Concatenating:', combinedArray);

// Js Array Task all Complete