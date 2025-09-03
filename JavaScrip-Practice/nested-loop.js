// 032. JS Nested Loops

const n = 5

for (let i = 1; i <= n; i++){
    let result = ""
    for (let j = 1; j <= i; j++){
        result += j + " "
    }
    console.log(result)
}


// problem set

/*

*
* *
* * *
* * * *
* * * * *

Print it
*/

const n = 10
for(i = 1; i <= n; i++){
    let result = ""
    for(let j = 1; j <= i; j++){
        result += "* "
    }
    console.log(result)
}



// ChatGpt Explanation Note:


// ===========================================
// EXAMPLE 1: NUMBER TRIANGLE PATTERN
// ===========================================

// Step 1: Decide how many rows (lines) you want in the pattern.
const n = 5

/*
Here we are using TWO loops:
1. OUTER LOOP → Controls the number of rows.
2. INNER LOOP → Controls what to print in each row.
*/

// Outer loop (goes row by row)
for (let i = 1; i <= n; i++) {
    /*
    i = current row number.
    For example:
    - First run → i = 1 (Row 1)
    - Second run → i = 2 (Row 2)
    - Third run → i = 3 (Row 3)
    */

    // Create an empty string for this row
    let result = ""

    // Inner loop (prints numbers in the current row)
    for (let j = 1; j <= i; j++) {
        /*
        j = column number in the current row.

        RULE:
        - Row 1 → print numbers from 1 to 1
        - Row 2 → print numbers from 1 to 2
        - Row 3 → print numbers from 1 to 3
        - This is why inner loop runs until j <= i
        */
        result += j + " " // Add the number and a space
    }

    // Print the row after inner loop finishes
    console.log(result)
}

/*
FINAL OUTPUT:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

// ===========================================
// EXAMPLE 2: STAR (*) TRIANGLE PATTERN
// ===========================================

/*
GOAL:
We want this pattern (example with 5 rows):
*
* *
* * *
* * * *
* * * * *

TECHNIQUE:
- Same logic as Example 1, but instead of numbers, we print "*"
- This teaches that loops don't care what you're printing — text, numbers, symbols — the logic is the same.
*/

// Total rows in the pattern
const rows = 10

// Outer loop → controls the number of rows
for (let i = 1; i <= rows; i++) {
    let result = "" // Reset for each row

    // Inner loop → controls how many stars to print in each row
    for (let j = 1; j <= i; j++) {
        result += "* " // Append star and space
    }

    // After finishing stars for current row → print them
    console.log(result)
}

/*
FINAL OUTPUT for rows = 5:
*
* *
* * *
* * * *
* * * * *

WHY THIS IS USEFUL:
- Great practice for understanding nested loops.
- Helps build logic thinking: "outer loop for rows, inner loop for columns."
- Foundation for more complex graphics in future (canvas, game dev, 3D rendering).
*/

// ===========================================
// EXAMPLE 3: REVERSE STAR TRIANGLE
// ===========================================

/*
GOAL:
* * * * *
* * * *
* * *
* *
*

DIFFERENCE:
- Outer loop starts from max size and decreases.
- Inner loop runs until j <= current row count.
*/

const size = 5

for (let i = size; i >= 1; i--) {
    let result = ""

    for (let j = 1; j <= i; j++) {
        result += "* "
    }

    console.log(result)
}

// ===========================================
// EXAMPLE 4: RIGHT-ALIGNED TRIANGLE
// ===========================================

/*
GOAL:
        * 
      * * 
    * * * 
  * * * * 
* * * * *

KEY IDEA:
- Add spaces before stars so the stars shift to the right.
- Use " ".repeat() to create the exact number of spaces needed.
*/

const height = 5

for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i)   // spaces before stars
    let stars = "* ".repeat(i)            // stars for the row
    console.log(spaces + stars)           // combine and print
}



// ===========================================
// PRO TIPS & NOTES
// ===========================================

/*
1. **Outer vs Inner Loop**
   - OUTER = controls rows (how many lines will print).
   - INNER = controls columns (what goes inside each line).

2. **Reset your string**
   Always reset `result = ""` inside the outer loop, otherwise rows will mix together.

3. **Spaces & Alignment**
   - Use `" ".repeat(n)` for padding.
   - Think of "spaces" as invisible characters that shape the design.

4. **Common Interview Trick**
   Nested loop questions are often asked in interviews to test your logical thinking, not math.

5. **Debug Tip**
   - Print `(i, j)` instead of `*` to see how loops actually run.
   Example: `console.log(i, j)` → lets you track flow.

6. **Practice Variations**
   - Replace `*` with `#` or numbers.
   - Try odd/even rows only.
   - Try hollow patterns (stars only at borders).
*/


/*
HOW IT WORKS:
- Row 1: 4 spaces + 1 star
- Row 2: 3 spaces + 2 stars
- Row 3: 2 spaces + 3 stars
- ...
- Spaces decrease, stars increase.
*/

// ===========================================
// WHEN & WHY YOU USE THESE PATTERNS:
// ===========================================
// 1. To practice nested loops deeply (outer for rows, inner for columns).
// 2. To train your brain in algorithmic thinking (step-by-step execution).
// 3. As a warm-up before working with real UI (tables, grids, animations).
// 4. For coding interviews (basic loop logic questions).
// 5. To create ASCII art or text-based designs in the console.
