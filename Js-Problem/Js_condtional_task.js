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





