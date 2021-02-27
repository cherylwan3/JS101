const readline = require('readline-sync');

const MAX_WINS = 5;
const LETTER_CHOICES = ['r', 'p', 's'];
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

const WORD_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
}

const WINNING_COMBOS = {
  rock:     ['scissors'],
  paper:    ['rock'],
  scissors: ['paper'],
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(humanChoice, computerChoice) {
  return WINNING_COMBOS[humanChoice].includes(computerChoice);
}

function displayWinner(humanChoice, computerChoice) {
  if (playerWins(humanChoice, computerChoice) === true) {    
    prompt('You win!');    
  }  else if (humanChoice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt('Computer wins!');
  }
}

let answer;
do {
  prompt('----------------------------------------------------');

  prompt(`Choose one: ${LETTER_CHOICES.join(', ')}.`);
  prompt(`r is for rock, p for paper, and s for scissors.`);
  let humanChoiceInLetter = readline.question().toLowerCase()[0];

  while (!LETTER_CHOICES.includes(humanChoiceInLetter)) {
    prompt("That's not a valid choice."); 
    humanChoiceInLetter = readline.question();
  }

  let humanChoice = WORD_CHOICES[humanChoiceInLetter];
 
  let randomIndex = Math.ceil(Math.random() * (VALID_CHOICES.length - 1));
  let computerChoice = VALID_CHOICES[randomIndex];
  
  prompt(`You chose ${humanChoice}, computer chose ${computerChoice}.`);
  displayWinner(humanChoice, computerChoice);

  

  prompt('Do you want to play again? y or n');
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
} while (answer[0] === 'y');
  


