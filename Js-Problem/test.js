// Task-4:
// Write a function to find the longest word in a given string.

let sentence = "I don't know Programming";

function findLongestWord(inputString) {
    let words = inputString.split(" ");
    let longestWord = words[0];

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const result = findLongestWord(sentence);

console.log(result);

// console.log(findLongestWord(sentence));
