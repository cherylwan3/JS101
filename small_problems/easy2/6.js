/**
 * P -----------------------
 * -input: function accepts a string as an argument
 * - output: next to last word in string 
 * - words = any sequence of non-blank characters
 * - string input will always have at least 2 words
 * E-------------------------
 * console.log(penultimate("last word") === "last"); // logs true
   console.log(penultimate("Launch School is great!") === "is"); // logs true
 * A----------------------------
   - function named 'penultimate' with parameter called 'string'
      - split the string into an array with the seperator of ' '
      - return second to last index element of array
 */

function penultimate(string) {
  let wordsArr = string.split(' ');
  return wordsArr[wordsArr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true