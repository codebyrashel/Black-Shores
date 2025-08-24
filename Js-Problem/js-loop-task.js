/*

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

*/

/*programming hero*/


// Answer:

let text = ' I will invest at least 6 hours every single day for the next 60 days!';
let hours = 1;

while(hours <= 60){
    console.log(hours + text);
    hours++
}




/***

Subtask-1:

Find all the odd numbers from 61 to 100.

*/

// Answer:

let odd = 61
while(odd <= 100){
    if(odd % 2 === 1){
        console.log('Odd Number :' + odd)
    }
    odd++
}


// ChatGpt Version as we already know the start is an odd number we can just increment by 2 and move to the next odd number

let oddCheck = 61;

while (oddCheck <= 100) {
    console.log('Odd Number: ' + oddCheck);
    oddCheck += 2; // jump directly to next odd
}




/***

Subtask-2:

Find all the even numbers from 78 to 98.

*/

/*programming hero*/


// Answer: 

let evenNumber = 78;

while(evenNumber <= 98){
    if(evenNumber % 2 === 0){
        console.log('This is Even Number: ' + evenNumber)
    }
    evenNumber++
}

// Using the logic ChatGpt used Previously when  finding odd number: Version 2: Clean shortcut (jump by 2)

let evenNumber2 = 78;

while(evenNumber2 <= 98){
    console.log('Gpt-Version logic even number: ' + evenNumber2)
    evenNumber2 += 2
}


/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

*/

// Answer: 

let sum = 81;
let total = 0;

while(sum <= 131){
    if(sum % 2 !== 0){
        total += sum
    }
    sum++
}
console.log('sum of all odd number: ', total);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

*/

/*programming hero*/


// Answer:

let sumEven = 206;
let totalEven = 0;

while(sumEven <= 311){
    if(sumEven % 2 === 0){
        totalEven += sumEven
    }
    sumEven++
}

console.log('Sum of all even numbers: ', totalEven);


/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

*/

/*programming hero*/

// Answer:

let number = 5;

for (let i = 1; i <= 10; i++) {
    // console.log(number * i) // number output
    console.log(number + " x " + i + " = " + (number * i)); // for better readability with string output
}

/***

Implement a countdown timer that counts down from 21 to 15.

*/

/*programming hero*/


// Answer:

let c = 21;

while(c >= 15){
    console.log('Countdown: ', c);
    c--;
}


//--------------------------Now Using For Loop-------------------//

/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

*/

/*programming hero*/

// Answer:

for(let i = 1; i <= 60; i++){
    console.log(i, 'I\'ll invest at least 6 hrs every single day for the next 60 days!');
}


/***

Subtask-1:

Find all the odd numbers from 61 to 100.

*/

// Answer:

for(let i = 61; i <= 100; i= i + 2){
    console.log('Odd =', i);
}

//another method

for(let i = 61; i <= 100; i++){
    if(i % 2 === 1){
        console.log('This is odd number: ', i);
    }
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

*/

// Answer:

for(let i = 78; i <= 98; i= i + 2){
    console.log('Even =', i);
}

//another method

for(let i = 78; i <= 100; i++){
    if(i % 2 === 0){
        console.log('This is even number: ', i);
    }
}

/*programming hero*/


/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

*/

//Answer:

let totalResult = 0;
for(let i = 91; i <= 129; i++){
    if(i % 2 === 1){
        totalResult += i
    }
}
console.log('Sum is: ', totalResult);


/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

*/

//Answer:

let totalEvenSum = 0;
for(let i = 51; i <= 85; i++){
    if( i % 2 === 0){
        totalEvenSum += i;
    }
}

console.log('Sum of all even numbers is ', totalEvenSum);

/*programming hero*/


/***

Generate a multiplication table for number 9

*/


let multiplySecond = 9
for(let i = 1; i <= 10; i++){
    console.log(i + ' x ' + multiplySecond + ' = ' + (i * multiplySecond));
}

// Using while loop method

let multiplyNumber = 9;
let multiply = 1;

while(multiplyNumber <= 10){
    console.log(number + ' x ' + multiplyNumber + ' = ' + (number * multiplyNumber));
    number * multiplyNumber;
    multiplyNumber++
}


/*programming hero*/


/***

Implement a countdown timer that counts down from 81 to 65.

*/
//Answer:

for(let i = 81; i >= 65; i--){
    console.log('Countdown: ', i);
}

/*programming hero*/


/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
// Answer:

for(let i = 1; i <= 40; i++){
    if(i % 2 === 1){
        continue
    } 
    console.log(i)
}

// Another method:

for(let i = 1; i <= 40; i++){
    if(i % 2 !== 0){
        continue
    }
    console.log(i);
}

// Now experimenting for printing odd number:

for(let i = 1; i <= 40; i++){
    if(i % 2 !== 1){
        continue
    }
    console.log(i);
}




/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

//Answer:

for(let i = 55; i <= 85; i++){
    if(i % 2 !== 0){
        if( i % 5 === 0){
            continue
        }
        console.log(i);
    }
}

// using while loop

let n = 55;
while (n <= 85) {
    if (n % 2 === 0 || n % 5 === 0) {
        n++;
        continue;
    }
    console.log(n);
    n++;
}

// more shorter way without using nested if condition

// Failed


/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// Answer:

for(let i = 1; i <= 200; i++){
    console.log(i);
    if(i === 100){
        break
    }
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// Answer :

let n2 = 1;
let sum2 = 0;

while (true) {
    sum2 += n2;
    if (sum2 >= 100) {
        break;  // stop when sum reaches or exceeds 100
    }
    n2++;
}

console.log("Final n:", n);
console.log("Final sum:", sum);



/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// Answer:

for (let i = 1; i <= 100; i++) {
    if (i > 1 && Number.isInteger(Math.sqrt(i))) {
        break;
    }
    console.log(i);
}