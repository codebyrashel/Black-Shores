//  025. JS Logical Operators

// && || !

// Logical Operators Only Used when We have tow or more Condition and result Comes from both of their participation

// A && B
// true && true = true
//true && false = false
//false && true = false
//false && false = false

// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false = false

let a = 10;
let b = 20;
let c = 40;
let d = 50;

if (a > b && c > d) {
    console.log("A is greater than B and C is greater than D");
} else {
    console.log("At least one condition is false")
}


if (a > b || c > d) {
    console.log("A is greater than B or C is greater than D");
} else {
    console.log("Both conditions are false")
}

let check = !(a > b)
console.log(check)

let check = !!(a > b)
console.log(check)