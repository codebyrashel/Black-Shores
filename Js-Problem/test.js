// Task-3:
// Write a function to count the number of vowels in a string.

function vowelsCount (count){
    let vowelCount = 0;
    for(let char of count){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            vowelCount ++; 
        }
    }
    return vowelCount;
}

const normalString = vowelsCount("How quickly daft jumping zebras vex my boy");

console.log(normalString);

// With few failed attempt This one is mine as I solved it with the knowledge I had, Now below will be the solution given by the AI

// Shorter version 

function vowelsCount(str) {
    const vowels = "aeiou";
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// Another one using one line 

const vowelsCount = str => [...str.toLowerCase()].filter(c => "aeiou".includes(c)).length;
