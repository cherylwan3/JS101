const readline = require('readline-sync');

const ONE_ROUND = 1;
const NO_WINS = 0;
const MAX_WINS = 5;

const WORD_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
};
const LETTER_CHOICES = Object.keys(WORD_CHOICES);
const VALID_CHOICES = Object.values(WORD_CHOICES);

const WINNING_COMBOS = {
  rock:     ['scissors'],
  paper:    ['rock'],
  scissors: ['paper'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(player, opponent) {
  return WINNING_COMBOS[player].includes(opponent);
}

let currentRound = NO_WINS;
let numOfHumanWins = NO_WINS;
let numOfComputerWins = NO_WINS;

function displayGrandWinner(numOfHumanWins, numOfComputerWins) {
  if (numOfHumanWins > numOfComputerWins) {
    prompt('Congraluations! You are the grand winner!');
  } else {
    prompt('Computer is the grand winner! Nice try!');
  }
}

function displayRoundWinner(humanChoice, computerChoice) {
  if (playerWins(humanChoice, computerChoice) === true) {
    prompt('You win this round.\n');
  } else if (humanChoice === computerChoice) {
    prompt("It's a tie!\n");
  } else {
    prompt('Computer wins this round.\n');
  }
}

function addScore(humanChoice, computerChoice) {
  if (playerWins(humanChoice, computerChoice)) {
    numOfHumanWins += ONE_ROUND;
  } else if (playerWins(computerChoice, humanChoice)) {
    numOfComputerWins += ONE_ROUND;
  }
}

prompt('Welcome to the rock paper scissors game!');
prompt('Win 5 rounds first to become the grand winner.');

while (true) {
  while (true) {
    console.log(`----------Round: ${currentRound + ONE_ROUND}----------------------------------------`);
    console.log(`=> Current Win Rate - Your wins: ${numOfHumanWins} / Computer wins: ${numOfComputerWins}`);

    prompt(`Choose one: ${LETTER_CHOICES.join(', ')}.`);
    prompt(`r is for rock, p for paper, and s for scissors.`);
    let humanChoiceInLetter = readline.question().toLowerCase()[0];

    while (!LETTER_CHOICES.includes(humanChoiceInLetter)) {
      prompt("That's not a valid choice.");
      humanChoiceInLetter = readline.question().toLowerCase()[0];
    }

    let humanChoice = WORD_CHOICES[humanChoiceInLetter];

    let randomIndex = Math.floor(Math.random() * (VALID_CHOICES.length));
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${humanChoice}, computer chose ${computerChoice}.`);

    addScore(humanChoice, computerChoice);

    if (numOfHumanWins < MAX_WINS && numOfComputerWins < MAX_WINS) {
      displayRoundWinner(humanChoice, computerChoice);
      currentRound += ONE_ROUND;
    } else {
      console.log(`=> Current Win Rate - Your wins: ${numOfHumanWins} / Computer wins: ${numOfComputerWins}`);
      displayGrandWinner(numOfHumanWins, numOfComputerWins);
      currentRound = NO_WINS;
      numOfHumanWins = NO_WINS;
      numOfComputerWins = NO_WINS;
      break;
    }
  }
  prompt('Do you want to play again? y or n');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'y') {
    console.log('**********************************************************************\n\n');
  }
  if (answer[0] === 'n') break;
}