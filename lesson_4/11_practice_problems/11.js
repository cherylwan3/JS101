let statement = "The Flintstones Rock";
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let statementCharArr = statement.split('').filter(char => char !== ' ');

let result = {};

statementCharArr.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);



