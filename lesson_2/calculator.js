// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// loading calculator_messages.json into an object
// assigned to MESSAGES
const MESSAGES = require('./calculator_messages.json');

// start of calculator.js
const readline = require('readline-sync');

const LANGUAGE = 'en';

function prompt(string) {
  let message = messages(string, LANGUAGE);
  console.log(`=> ${message}`);
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('welcome');

let newCalcuation;

do {
  prompt('firstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('validNumber');
    number1 = readline.question();
  }

  prompt('secondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('validNumber');
    number2 = readline.question();
  }

  prompt(`${number1} ${number2}`);

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('validOperation');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':  // '1' represents addition
      output = Number(number1) + Number(number2);
      break;
    case '2': // represents subtraction
      output = Number(number1) - Number(number2);
      break;
    case '3': // '3' represents multiplication
      output = Number(number1) * Number(number2);
      break;
    case '4': // '4 ' represents division
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is : ${output}`);

  // starting a new calculation round
  prompt('newCalc');
  newCalcuation = readline.question();

  while (!['y','n'].includes(newCalcuation)) {
    prompt('validNewCalc');
    newCalcuation = readline.question();
  }

} while (newCalcuation === 'y');