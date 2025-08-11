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