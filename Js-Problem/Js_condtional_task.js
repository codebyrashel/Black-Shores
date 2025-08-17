/*
Free Drinks
- Burger more than 500tk: free Coke
- Else Coke: 30tk
*/

// Answer:

const burber = 500

if(burber > 500){
    console.log('The coke is on the house')
} else{
    console.log('coke price is 30 USD')
}


/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

- Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
- BMI < 18.5, you are underweight.
- BMI >= 18.5 and BMI <=24.9, you are normal.
- BMI >=25 and BMI <= 29.9, you are overweight.
- Otherwise, you are obese.

*/



const bmi = 49 / 1.6 ** 2

if (bmi < 18.5){
    console.log(`You're underweight`)
}
else{
    if(bmi >= 18.5 && bmi <= 24.9){
        console.log('You\'re normal')
    }
    else if(bmi >= 25 && bmi <= 29.9){
        console.log('You\'re Overweight')
    }
    else{
        console.log('You\'re Obese')
    }
}


/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


// Answer:

let score = 670

if (score >= 90 && score <= 100) {
    console.log('Grade A')
}
else if (score >= 80 && score <= 89) {
    console.log('Grade B')
}
else if (score >= 70 && score <= 79) {
    console.log('Grade C')
}
else if (score >= 60 && score <= 69) {
    console.log('Grade D')
}
else if (score >= 0 && score <= 59) {
    console.log('Grade F')
}
else {
    console.log('Invalid score')
}



/***

if you get more then 80 then inside your friend score. 
If your friend get more than 80. then go for a lunch. 
if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/


// Answer :

let myScore = 91;
let myFriendsScore = 39;

if(myScore > 80){
    if(myFriendsScore > 80){
        console.log('Yay! Let\'s go for lunch')
    }
    else if(myFriendsScore >= 60){
        console.log('Good Luck for next time, Buddy!')
    }
    else if(myFriendsScore >= 40){
        console.log('Keep your friend\'s message unseen')
    }
    else{
        console.log('I\'m blocking you so, Don\'t Contact me Again')
    }
}
else{
    console.log('Go Home, Sleep and act sad')
}

