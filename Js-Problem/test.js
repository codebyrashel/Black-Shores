/*
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/

// Answer:

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const task1 = [];
for(const rev of colors){
    console.log(rev);
    task1.unshift(rev);
}
console.log(task1);