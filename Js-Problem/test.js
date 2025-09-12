// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// Answer:

function odd_even(intValue){
    if(intValue % 2 === 0){
        return "even"
    }
    else{
        return "odd"
    }
}

// odd_even(2);

const checkNumber = odd_even(5);
console.log(checkNumber);


function Twoodd(year){
    for(const leap of year){
        if(leap % 4 === 0){
            return true
        }
        else{
            return false
        }
    }
}

const lipi = Twoodd(2100);
console.log(lipi);