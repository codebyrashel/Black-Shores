//  026. JS Ternary Operator

let n = 10

let str = ""

if (n%2 === 0) {
    str = "EVEN"
} else {
    str = "ODD"
}

console.log(str)

let result = n % 2 === 0 ? "EVEN" : "ODD" // without if or else condition and with single line code This is the Ternary operator
console.log(result)

// condition ? true side : false side

// this is a single statement for one code not for multiple line for multiple line we need to use if else block condition
