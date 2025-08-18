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


/* 

4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.

*/



/* 

5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().

*/
