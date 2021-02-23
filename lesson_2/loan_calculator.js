const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(numberString) {
  return numberString.trim() === '' ||
        Number(numberString) < 0    ||
        Number.isNaN(Number(numberString));
}

prompt('Welcome to the loan calculator.');

while (true) {
  prompt('-------------------------------------------');
  prompt('Please enter your loan amount.');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('Please enter a positive number.');
    loanAmount = readline.question();
  }

  prompt('Please enter your annual percentage rate.\nExample: for 5%, enter it as 5.');
  let annualPercentageRate = readline.question();

  while (invalidNumber(annualPercentageRate)) {
    prompt('Please enter a positive number');
    annualPercentageRate = readline.question();
  }

  prompt('Please enter your loan duration in years.');
  let loanDurationInYears = readline.question();

  while (invalidNumber(loanDurationInYears)) {
    prompt('Please enter a positive number');
    loanDurationInYears = readline.question();
  }

  loanAmount = Number(loanAmount);
  annualPercentageRate = Number(annualPercentageRate) / 100;
  let monthlyInterestRate = annualPercentageRate / 12;
  loanDurationInYears = Number(loanDurationInYears);
  let loanDurationInMonths = loanDurationInYears * 12;

  let monthlyPayment;
  if (annualPercentageRate === 0) {
    monthlyPayment = loanAmount / loanDurationInMonths;
  } else {
    monthlyPayment = loanAmount *
          (monthlyInterestRate /
          (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));
  }

  prompt(`Your total monthly payment is: $${monthlyPayment.toFixed(2)}.`);

  prompt('Would you like to make a new calculation? Press "y" or "n".');
  let answer = readline.question();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}