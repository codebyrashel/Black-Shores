// 033. JS Break Statement


// =============================================
// JavaScript Loop Control Statements: break & continue
// =============================================

/* 
  What are these?

  - `break`: Stops the entire loop immediately and jumps out of it.
  - `continue`: Skips the current iteration and moves to the next one.
  
  These statements give you more control inside loops.
*/

// ----------------------------------------------------
// EXAMPLE 1: Using `break` to exit a loop early
// ----------------------------------------------------

console.log("Example 1: break statement")

// Scenario: Find the first number divisible by 7 between 1 and 20

for (let i = 1; i <= 20; i++) {
    // Check if 'i' is divisible by 7
    if (i % 7 === 0) {
        console.log("Found a number divisible by 7:", i)

        // WHY use break here?
        // Because once we find the first number divisible by 7, we don’t need to keep searching.
        // This saves time and CPU cycles.

        break  // Immediately exit the for loop
    }

    // If not divisible by 7, print the number with a message
    console.log(i, "is not divisible by 7")
}

console.log("Loop ended after break\n")

// ----------------------------------------------------
// EXAMPLE 2: Using `continue` to skip certain iterations
// ----------------------------------------------------

console.log("Example 2: continue statement")

// Scenario: Print only odd numbers between 1 and 10 (skip even numbers)

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        // i is even, so skip the rest of this iteration
        // This means the console.log below will NOT run for even numbers
        continue
    }
    
    // This line runs only if 'i' is NOT even (i.e., odd)
    console.log(i, "is odd")
}

console.log("Loop ended after continue\n")

// ----------------------------------------------------
// EXAMPLE 3: Using both `break` and `continue` together
// ----------------------------------------------------

console.log("Example 3: break and continue combined")

// Scenario: Print numbers 1 to 10, but:
// - Skip printing the number 5
// - Stop the loop entirely once 8 is reached

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping 5")
        continue  // Skip printing 5, go to next iteration
    }

    if (i === 8) {
        console.log("Stopping at 8")
        break  // Exit loop completely here
    }

    console.log(i)
}

console.log("Loop ended after break and continue\n")

// ----------------------------------------------------
// EXTRA NOTES & TIPS:
// ----------------------------------------------------

/*
1) When `break` runs, the loop stops *immediately* — no further code inside the loop runs.

2) When `continue` runs, the rest of the code in the current loop iteration is skipped,
   but the loop itself keeps going with the next iteration.

3) Both `break` and `continue` only affect the *closest* loop they are inside.
   In nested loops, they don’t automatically affect outer loops.

4) Use these statements to make your loops efficient and avoid unnecessary work.

5) Overusing them can sometimes make code harder to understand — so use them wisely.

6) In some rare cases, you can label loops to break or continue outer loops — but that's advanced stuff!

*/

// ----------------------------------------------------
// BONUS PRACTICE: Try to predict the output of these!
// ----------------------------------------------------

console.log("BONUS: Practice with break & continue")

for (let i = 1; i <= 7; i++) {
    if (i === 3) continue
    if (i === 6) break
    console.log("Number:", i)
}

/*  
Output:
Number: 1
Number: 2
Number: 4
Number: 5

Explanation:
- When i=3, 'continue' skips printing.
- When i=6, 'break' stops the loop.
*/

