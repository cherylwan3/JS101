let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// LS method
// statement1.split('').filter(char => char === 't').length;

console.log(statement1.match(/t/g).length); // 2

console.log(statement2.split('').filter(char => char === 't').length); //0

