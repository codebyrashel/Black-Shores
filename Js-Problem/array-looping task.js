//array-looping-tasks

/*
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/

// Answer Using method 1

// using for of

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// using for of

const task1 = [];
for(const rev of colors){
    console.log(rev);
    task1.unshift(rev);
}
console.log(task1);

// Using reverse method
colors.reverse();
console.log(colors);

// Using for loop
for(let i = colors.length -1; i >= 0; i--){
    console.log(colors[i]);
}

// using while loop
let loop = [];
while(colors.length){
    const element = colors.pop();
    loop.push(element);
}
console.log(loop);

/*

Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]

*/

// Answer

// using for of 
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];
for(const number of numbers){
    if(number % 2 === 0){
        evenNumbers.push(number);
    }   
}
console.log(evenNumbers);

// Using for loop
const evenNum = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNum.push(numbers[i]);
    }
}
console.log(evenNum);

// Using while loop
const even = [];
let i = 0;
while(i < numbers.length){
    if(numbers[i] % 2 === 0){
        even.push(numbers[i]);
    }  
    i++;
}
console.log(even);

// Using filter method
const evenNumFilter = numbers.filter(n => n % 2 === 0);
console.log(evenNumFilter);

// Using forEach method
const evenNumForEach = [];
numbers.forEach(n => {
    if(n % 2 === 0){
        evenNumForEach.push(n);
    }
});
console.log(evenNumForEach);

// Using map method
const evenNumMap = [];
numbers.map(n => {
    if(n % 2 === 0){
        evenNumMap.push(n);
    }
});
console.log(evenNumMap);    

// Using reduce method
const evenNumReduce = numbers.reduce((acc, curr) => {
    if(curr % 2 === 0){ 
        acc.push(curr);
    } 
    return acc;
}, []);
console.log(evenNumReduce);

// Using for...in method
const evenNumForIn = [];
for(const index in numbers){
    if(numbers[index] % 2 === 0){
        evenNumForIn.push(numbers[index]);
    }   
}
console.log(evenNumForIn);

// Using do...while method
const evenNumDoWhile = [];
let j = 0;
do{
    if(numbers[j] % 2 === 0){
        evenNumDoWhile.push(numbers[j]);
    }
    j++;
}while(j < numbers.length);
console.log(evenNumDoWhile);    

// Using some method
const evenNumSome = []; 
numbers.some(n => {
    if(n % 2 === 0){
        evenNumSome.push(n);
    }   
});
console.log(evenNumSome);

//

/*

Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

*/

// Answer

const numArray = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatenatedString = '';
for (const name of numArray){
    concatenatedString += name;
}
console.log(concatenatedString); // Output: 'TomTimTinTik'


/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'


*/

// Answer 

// This one is not the correct answer of the task but it is also a way to reverse a string
const statement = 'I am a hard working person';
const wordsArray = statement.split(' ');
console.log(wordsArray); // Output: ['I', 'am', 'a', 'hard', 'working', 'person']
const reversedWordsArray = wordsArray.reverse();
console.log(reversedWordsArray); // Output: ['person', 'working', 'hard', 'a', 'am', 'I']
const reversedStatement = reversedWordsArray.join(' ');
console.log(reversedStatement); // Output: 'person working hard a am I'

// using for loop

// This one is the correct answer of the task
const statementTwo = 'I am a hard working person';
let reversedStatementFor = '';
for(let i = statementTwo.length - 1; i >= 0; i--){
    reversedStatementFor += statementTwo[i];
}  
console.log(reversedStatementFor); // Output: 'nosrep gnikrow drah a ma I'


// using while loop 

// This one is not the correct answer of the task but it is also a way to reverse a string

let i = wordsArray.length - 1;
let reversedStatementWhile = '';
while(i >= 0){
    reversedStatementWhile += wordsArray[i] + (i !== 0 ? ' ' : '');
    i--;
}
console.log(reversedStatementWhile); // Output: 'person working hard a am I'

// using sort method

// This one is not the correct answer of the task but it is also a way to reverse a string

const reversedWordsSort = wordsArray.sort((a, b) => wordsArray.indexOf(b) - wordsArray.indexOf(a));
const reversedStatementSort = reversedWordsSort.join(' ');
console.log(reversedStatementSort); // Output: 'person working hard a am I'

/*

Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]


*/

// Answer

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Using spread operator to copy the array
copiedArray[0] = 99; // Changing the first element of the copied array to 99
console.log('Original:', originalArray); // Output: Original: [1, 2, 3]
console.log('Copy:', copiedArray); // Output: Copy: [99, 2, 3]



/*
Task 6
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected ooutput:
John scored 85
Alice scored 90
Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]

*/