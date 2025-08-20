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