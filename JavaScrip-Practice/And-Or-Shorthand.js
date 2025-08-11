// 027. And Or Shorthand

let name = ""

let fullName = name || "Rashel Hossen"
console.log(fullName)

// Explanation:
// We declare a variable 'name' and initialize it with an empty string ("").
// Then we declare 'fullName' and assign it the value of 'name || "Rashel Hossen"'.
//
// The '||' operator (logical OR) returns the first **truthy** value it encounters.
// In JavaScript, an empty string ("") is considered **falsy**,
// so 'name' is falsy here.
//
// Therefore, 'name || "Rashel Hossen"' evaluates to "Rashel Hossen",
// because 'name' is falsy and the OR operator falls back to the second value.
//
// If 'name' had any truthy value (like a non-empty string), 'fullName' would be that value instead.
//
// This is a common pattern used for setting default values when a variable might be empty, null, or undefined.
//
// So when we log 'fullName', it outputs "Rashel Hossen" because 'name' is empty.
//
// Summary:
// - '||' returns first truthy value.
// - empty string "" is falsy.
// - fallback to default string "Rashel Hossen".


let isOK = true

isOK && console.log("everything is Okay")

// Explanation:
// We declare a boolean variable 'isOK' and set it to true.
//
// Then we use the shorthand logical AND (&&) operator:
// 'isOK && console.log("everything is Okay")'
//
// How this works:
// - The '&&' operator evaluates the left side first.
// - If the left side (isOK) is **truthy** (true here), it evaluates the right side.
// - So 'console.log("everything is Okay")' runs only if isOK is true.
// - If isOK was false, the right side would NOT execute, and nothing logs.
//
// This is a common shorthand to conditionally run a single expression without writing:
// if (isOK) { console.log("everything is Okay") }
//
// Important notes:
// - This shorthand only works for **single expressions**, not multiple statements.
//   You can't do multiple lines of code here unless you wrap them inside a block or function.
// - If you want to run multiple lines conditionally, use an explicit 'if' statement.
//
// Example if isOK is false:
// let isOK = false;
// isOK && console.log("everything is Okay");  // No output, because left side is false.
//
// --- Better example ---
// Using this shorthand to display a message only if the user is logged in:
let isLoggedIn = true;
isLoggedIn && console.log("Welcome back, user!");

// If you had multiple actions to do when logged in, better to use:
if (isLoggedIn) {
    console.log("Welcome back, user!");
    // Other code lines can go here safely
}