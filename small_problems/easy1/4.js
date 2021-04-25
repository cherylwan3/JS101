/**
 * P -------------------------------------
 * Input: Integer 
 * Output: 2 Integers
 * Rules:
 * -  1 square meter == 10.7639 square feet
 * - User enters Length & Width of room ( in meters)
 *  - use readlineSync.prompt to collect user input
 * - outputs area of room in square meters and square feet
 *  - the output integers have 2 numbers after the decimal.
 * 
 * E ------------------------------------------
 * Enter the length of the room in meters:
 * 10
 * Enter the width of the room in meters:
 * 7
 * The area of the room is 70.00 square meters (753.47 square feet).
 * 
 * D/A ------------------------------------
 * 1. set a variable named readline to the readlineSync library
 * 2. prompt the user to enter the length of room
 * 3. assign the user's input to the variable 'lengthInMeters' 
 * 4. prompt the user to enter the length of room 
 * 5. assign the user's input to the variable 'widthInMeters'
 * 6. declare a variable named 'areaSquareMeters'
 * 7. mulitply 'lengthMeters' and 'widthMeters' and set it to areaSquareMeters'
 * 8. declare a variable named 'areaSquareFeet'
 * 9. mulitply 'areaSquareMeters' by 10.7639 and set it to 'areaSquareFeet'
 * 10. Log the area of the room using 'areaSquareMeters' and 'areaSquareFeet'
 * 
 */

const readline = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log('Enter the length of the room in meters:');
let lengthInMeters = readline.question();
lengthInMeters = parseInt(lengthInMeters);


console.log('Enter the width of the room in meters:');
let widthInMeters = readline.question();
widthInMeters = parseInt(widthInMeters);

let areaSquareMeters = lengthInMeters * widthInMeters;
let areaSquareFeet = areaSquareMeters * SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${areaSquareMeters.toFixed(2)} square meters (${areaSquareFeet.toFixed(2)} square feet).`);


/* // book method
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
); */



