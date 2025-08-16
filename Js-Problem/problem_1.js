/** Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300

*/


// Answer:

const balance = 1000;
let oranges = 200;
let apples = 300;

let totalPrice = oranges + apples;

const returnMoney = balance - totalPrice;

console.log(returnMoney);


/* 
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
*/

//Answer:

let matheMatics = 75.25;
let Biology     = 65;
let Chemistry   = 80;
let Physics     = 35.45;
let Bangla      = 99.50;

const totalMarks = (matheMatics + Biology + Chemistry + Physics + Bangla);

console.log(totalMarks)
console.log(totalMarks.toFixed(2));


// Another Way 

// const totalSubjectMarks = 75.25 + 65 + 80 + 35.45 + 99.50;
// console.log( typeof totalSubjectMarks.toFixed(4));

// I tried but failed as the first method is the only way I can think

/*
Task-3
You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119

Sample Output:
4
*/

// Answer:

let sum1 = 119;
let sum2 = 4;

const totalSums = sum1 % sum2;
console.log(totalSums);


/*
Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);
var a = isNaN(2-10);

Explain your answers.
*/

// Answer:

let a = isNaN('11');
let b = isNaN(2-10);

console.log(a);
console.log(b);

//another way to write:

let c = '11'
let d = 2-10

console.log(isNaN(c));
console.log(isNaN(d));


// Explanation

// console.log(isNaN('11'));        // false (123 is a number)
// console.log(isNaN(2 - 10));      // false ("123" can be converted to number

/*
isNaN stands for "is Not a Number".
It’s a global function in JavaScript that checks whether a value is not a number (or cannot be converted into a valid number).

It returns:

true → if the value is NaN (not a number).

false → if the value is a number (or can be converted to one).

Syntax: isNaN(value)
*/