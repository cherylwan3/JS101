const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const ONE_ROUND = 1;
const MAX_WINS = 5;
const NO_WINS = 0;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// shuffle an array
function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }

  return array;
}

function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function cardValues(cards) {
  return cards.map(cardArr => cardArr[1]);
}

function total(cards) {
  let values = cardValues(cards);

  let numOfA = 0;
  let sum = values.reduce((sum, value) => {
    if (['J', 'Q', 'K'].includes(value)) {
      value = 10;
    } else if (value === 'A') {
      numOfA += 1;
      value = 11;
    }
    return sum + Number(value);
  }, 0);

  while (sum > 21 && numOfA > 0) {
    sum -= 10;
    numOfA -= 1;
  }

  return sum;
}

function busted(cards) {
  return total(cards) > 21;
}

function getCardNames(cards) {
  let values = cardValues(cards);
  return values.map(value => {
    switch (value) {
      case 'J':
        return 'Jack';
      case 'Q':
        return 'Queen';
      case 'K':
        return 'King';
      case 'A':
        return 'Ace';
      default:
        return value;
    }
  });
}

function joinCards(cardNames) {
  switch (cardNames.length) {
    case 2:
      return `${cardNames[0]} and ${cardNames[1]}`;
    default:
      return cardNames.slice(0, -1).join(', ') +  ', and ' +
           cardNames[cardNames.length - 1];
  }
}

function displayPlayerCardsTotal(playerCards, dealerCards) {
  let playerCardNames = getCardNames(playerCards);
  let dealerCardNames = getCardNames(dealerCards);
  let numDealerCardMinusOne = dealerCardNames.length - 1;

  console.log(`Dealer has: ${dealerCardNames[0]} and ${numDealerCardMinusOne} unknown card(s).\n`);
  console.log(`You have: ${joinCards(playerCardNames)}.`);
  console.log(`Your total: ${total(playerCards)}.\n`);
}

function displayAllCardsTotal(playerCards, dealerCards) {
  let playerCardNames = getCardNames(playerCards);
  let dealerCardNames = getCardNames(dealerCards);

  console.log(`Dealer has: ${joinCards(dealerCardNames)}.`);
  console.log(`Dealer total: ${total(dealerCards)}.\n`);
  console.log(`You have: ${joinCards(playerCardNames)}.`);
  console.log(`Your total: ${total(playerCards)}.\n`);
}

function detectResult(playerCards, dealerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function logWithStars(str) {
  console.log(`${'*'.repeat(8)} ${str} ${'*'.repeat(8)}\n`);
}

function displayRoundWinner(playerCards, dealerCards) {
  let result = detectResult(playerCards, dealerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      logWithStars('You busted! Dealer wins this round!');
      break;
    case 'DEALER_BUSTED':
      logWithStars('Dealer busted! You win this round!');
      break;
    case 'PLAYER':
      logWithStars('You win this round!');
      break;
    case 'DEALER':
      logWithStars('Sorry, dealer wins this round!');
      break;
    case 'TIE':
      logWithStars("It's a tie this round!");
  }
}

function displayGrandWinner(playerCards, dealerCards) {
  let result = detectResult(playerCards, dealerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      logWithStars('You busted! Dealer is the grand champion!');
      break;
    case 'DEALER_BUSTED':
      logWithStars('Dealer busted! You are the grand champion!');
      break;
    case 'PLAYER':
      logWithStars('You are the grand champion!');
      break;
    case 'DEALER':
      logWithStars('Dealer is the grand champion! Try again next time!');
      break;
    case 'TIE':
      logWithStars("It's a tie!");
  }
}

let currentRound = NO_WINS;
let numPlayerWins = NO_WINS;
let numDealerWins = NO_WINS;

function addScore(playerCards, dealerCards) {
  let result = detectResult(playerCards, dealerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      numDealerWins += ONE_ROUND;
      break;
    case 'DEALER_BUSTED':
      numPlayerWins += ONE_ROUND;
      break;
    case 'PLAYER':
      numPlayerWins += ONE_ROUND;
      break;
    case 'DEALER':
      numDealerWins += ONE_ROUND;
      break;
  }
}

function displayWinner(playerCards, dealerCards) {
  if (numPlayerWins < MAX_WINS && numDealerWins < MAX_WINS) {
    displayRoundWinner(playerCards, dealerCards);
  } else {
    displayGrandWinner(playerCards, dealerCards);
  }
}

function playAgain() {
  currentRound += ONE_ROUND;

  if (numPlayerWins === MAX_WINS || numDealerWins === MAX_WINS) {
    currentRound = NO_WINS;
    numPlayerWins = NO_WINS;
    numDealerWins = NO_WINS;

    prompt('Play again? (y or n)');
    let answer = readline.question().toLowerCase()[0];

    while (answer !== 'y' && answer !== 'n') {
      prompt('please enter y or n');
      answer = readline.question().toLowerCase()[0];
    }
    if (answer === 'y') console.clear();
    return answer === 'y';
  }

  return true;
}

let welcomeStr = 'Welcome to the game of Twenty-One.';
welcomeStr = `\n${welcomeStr.padStart(welcomeStr.length + 5)}\n`;

console.clear();
console.log(welcomeStr);

while (true) {
  let roundStr = `Round: ${currentRound + ONE_ROUND}`;
  let winRateStr = `Current Win Rate - Your wins: ${numPlayerWins} Dealer Wins: ${numDealerWins}`;
  let winRateLength = winRateStr.length;

  let topStr = roundStr.padStart((winRateLength / 2) + 3, '-').padEnd(winRateLength, '-');
  let botStr = `${'-'.repeat(topStr.length)}\n`;

  console.log(topStr);
  console.log(winRateStr);
  console.log(botStr);

  let deck = initalizeDeck();
  let playerCards = [];
  let dealerCards = [];

  // initial deal
  playerCards.push(deck.pop(), deck.pop());
  dealerCards.push(deck.pop(), deck.pop());

  // player turn
  while (true) {
    displayPlayerCardsTotal(playerCards, dealerCards);

    let answer;
    while (true) {
      prompt('hit or stay?');
      answer = readline.question().toLowerCase()[0];
      if (['h', 's'].includes(answer)) break;
      prompt('Please enter a valid answer.');
    }

    if (answer === 'h') {
      playerCards.push(deck.pop());
      console.log('-----------------');
      console.log('You decided to hit!\n');
    }

    if (answer === 's' || busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    displayAllCardsTotal(playerCards, dealerCards);
    addScore(playerCards, dealerCards);
    displayWinner(playerCards, dealerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    console.log('-----------------');
    console.log('You decided to stay.\n');
  }

  // dealer turn
  console.log('Dealer turn...');
  while (total(dealerCards) < 17) {
    prompt('Dealer hits!\n');
    dealerCards.push(deck.pop());
  }

  if (busted(dealerCards)) {
    displayAllCardsTotal(playerCards, dealerCards);
    addScore(playerCards, dealerCards);
    displayWinner(playerCards, dealerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  }

  // comparing cards
  displayAllCardsTotal(playerCards, dealerCards);
  addScore(playerCards, dealerCards);
  displayWinner(playerCards, dealerCards);
  if (!playAgain()) break;
}