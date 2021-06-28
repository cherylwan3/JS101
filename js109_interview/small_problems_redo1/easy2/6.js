// func input: string 
// func output: next to last word in string
// rules
// - string always contains >= 2 words
// E----
// [last, word]
// length = 2, 
// index 1st word = 0
// A---
// - split the string into an array of words
// - get the word at index: array's length - 2



console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function penultimate(string) {
  let wordArr = string.split(' ');
  return wordArr[wordArr.length - 2];
}

