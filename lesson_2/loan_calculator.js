const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(numberString) {
  return numberString.trim() <= 0 || '' || Number.isNaN(Number(numberString)); 
}

function invalidPercentage(numberString) {
  return ((numberString.trim() === '' || Number.isNaN(Number(numberString)))) || 
    numberString.trim() > 0.99 ||
    numberString.trim() < 0;
}

function numberInDollars(monthlyPayment) {
  monthlyPayment = monthlyPayment.toFixed(2);
  return `\$${monthlyPayment}`;
}

prompt('Welcome to the loan calculator.');

while (true) {
  prompt('Please enter your loan amount.');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('Please enter a valid loan amount. (Numbers only)');
    loanAmount = readline.question();
  } 

  loanAmount = Number(loanAmount);

  prompt('Please enter your annual percentage rate.\nEnter it in percentage format. Example: for 5%, enter it as 0.05');
  let annualPercentageRate = readline.question();

  while (invalidPercentage(annualPercentageRate)) {
    prompt('Please enter a valid annual percentage rate.\nEnter it in percentage format. Example: for 5%, enter it as 0.05');
    annualPercentageRate = readline.question();
  } 

  annualPercentageRate = Number(annualPercentageRate);

  let monthlyInterestRate = annualPercentageRate / 12; 

  prompt('Please enter your loan duration in years.');
  let loanDurationInYears = readline.question();

  while (invalidNumber(loanDurationInYears)) {
    prompt('Please enter a valid loan duration in years. (Numbers only)');
    loanDurationInYears = readline.question();
  }

  loanDurationInYears = Number(loanDurationInYears);

  let loanDurationInMonths = loanDurationInYears * 12; 

  let monthlyPayment;

  if (annualPercentageRate === 0) {
      monthlyPayment = loanAmount / loanDurationInMonths;
  } else {
    monthlyPayment = loanAmount * 
      (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), 
      (-loanDurationInMonths))));
  };

  let monthlyPaymentInDollarsString = numberInDollars(monthlyPayment);

  prompt(`Your total monthly payment is ${monthlyPaymentInDollarsString}.`);

  prompt('Would you like to make a new calculation? Press y or n');
  let answer = readline.question();

  answer = answer.trim().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('Please enter either y or n.');
    answer = readline.question(); 
    answer = answer.trim().toLowerCase();
  }

  if (answer === 'n') break;
}







