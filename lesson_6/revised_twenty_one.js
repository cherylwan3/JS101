const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


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

function displayResult(playerCards, dealerCards) {
  let playerSum = total(playerCards);
  let dealerSum = total(dealerCards);

  if (playerSum > 21) {
    logWithStars('You busted! Dealer Wins.');
  } else if (dealerSum > 21) {
    logWithStars('Dealer Busted. You win!');
  } else if (dealerSum < playerSum) {
    logWithStars('You win!');
  } else if (dealerSum > playerSum) {
    logWithStars('Dealer wins!');
  } else {
    logWithStars('It\'s a tie!');
  }
}

function logWithStars(str) {
  console.log(`${'*'.repeat(8)} ${str} ${'*'.repeat(8)}\n`);
}

function playAgain() {
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];

  while (answer !== 'y' && answer !== 'n') {
    prompt('please enter y or n');
    answer = readline.question().toLowerCase()[0];
  }

  return answer === 'y';
}

// main loop
while (true) {
  console.clear();
  console.log('-----------It\'s a game of Twenty-One-----------\n');

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
    displayResult(playerCards, dealerCards);
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
    displayResult(playerCards, dealerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  }

  // comparing cards
  displayAllCardsTotal(playerCards, dealerCards);
  displayResult(playerCards, dealerCards);
  if (!playAgain()) break;
}


