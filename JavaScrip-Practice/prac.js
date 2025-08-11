let user = { name: "Rashel", age: 22 };

let jsonString = JSON.stringify(user);

console.log(jsonString); // '{"name":"Rashel","age":22}'
console.log(typeof jsonString);


// 023. JS Else If Condition

let a = 20

let b = 20

if (a > b){
    console.log("A is greater than B")
} else if ( a < b){
    console.log( "B is Greater than A")
} else{
    console.log("They are both Same")
}


/** 

If else Problem set :


**/



// 024. JS Switch statement

let date = new Date()


// 0 - Sunday, 1 - Monday, 2 - Tuesday
const today = date.getDay()

switch(today){
    case 0:
        console.log("Today is Sunday")
        break
    case 1:
        console.log("Today is Monday")
        break
    case 2:
        console.log("Today is Tuesday")
        break
    case 3:
        console.log("Today is Wednesday")
        break
    case 4:
        console.log("Today is Thursday")
        break
    case 5:
        console.log("Today is Friday")
        break
    case 6:
        console.log("Today is Saturday")
        break
    default: console.log("Not a Valid Number")          
}


/** 

Switch statement Problem set :


**/