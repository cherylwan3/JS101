// p------------
// input:
// - ask user for length of room (m)
// - ask user for width of room (m)
// output:
// - The area of the room is (square m and square ft)
// rules:
// - 1 square meter == 10.7639 square feet
// A---------
// get the length and width 
// compute area of room in square m
// convert the square m to square ft 
// log the area

const readline = require('readline-sync');

let length = Number(readline.question('Enter the length of the room in meters: '));
let width = Number(readline.question('Enter the width of the room in meters: '));

let areaSqMeters = length * width;
let areaSqFeet = areaSqMeters * 10.7639;

console.log(`The area of the room is ${areaSqMeters.toFixed(2)} square meters (${areaSqFeet.toFixed(2)} square feet).`);