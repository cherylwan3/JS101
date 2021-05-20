/**
 * P--------------------
 * -Twenty-One Game
 * -Goal: get close to <= 21 without going over
 *  - > 21 => bust, lose game
 * - Deck: 52 total: 4 suits - 13 values
 *  - Hearts, Diamonds, Clubs, and Spades
 *   - 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace).
 *  - card value:
 *    - 2 thorugh 10 -> face value
 *    - jack, queen, king = 10
 *    - Ace = 1 or 11
 * - set up:
 *    - both dealer and player initially dealt
 *      2 cards
 *    - player can see 2 cards
 *    - can see 1 of dealer cards
 * - player turn:
 *   - 2 choices:
 *    - Hit: player dealt another card
 *    - stay
 * - dealer turn:
 *  - always hit when total < 17
 *  - stay when total is >= 17
 * - comparing cards
 *  - when both player and dealer stay,
 *  - compare total value cards, who has highest value
 *
 * Implementation
  1. Initialize deck
  2. Deal cards to player and dealer
    - add to player array a randomCard
    - add to dealer array a randomCard
  3. Player turn: hit or stay
    - repeat until bust or stay
  4. If player bust, dealer wins.
  5. Dealer turn: hit or stay
    - repeat until total >= 17
  6. If dealer busts, player wins.
  7. Compare cards and declare winner.
D----------------------------------------
nested array
*/

const readline = require('readline-sync');

const DECK = [
  ['H', 2], ['H', 3], ['H', 4], ['H', 5], ['H', 6], ['H', 7], ['H', 8], ['H', 9],
  ['H', 10], ['H', 'J'], ['H', 'Q'], ['H', 'K'], ['H', 'A'],
  ['D', 2], ['D', 3], ['D', 4], ['D', 5], ['D', 6], ['D', 7], ['D', 8], ['D', 9],
  ['D', 10], ['D', 'J'], ['D', 'Q'], ['D', 'K'], ['D', 'A'],
  ['C', 2], ['C', 3], ['C', 4], ['C', 5], ['C', 6], ['C', 7], ['C', 8], ['C', 9],
  ['C', 10], ['C', 'J'], ['C', 'Q'], ['C', 'K'], ['C', 'A'],
  ['S', 2], ['S', 3], ['S', 4], ['S', 5], ['S', 6], ['S', 7], ['S', 8], ['S', 9],
  ['S', 10], ['S', 'J'], ['S', 'Q'], ['S', 'K'], ['S', 'A']
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function randomCard(deck) {
  let randomIndex = Math.floor((Math.random() * deck.length));
  let randomCard = deck[randomIndex];
  return randomCard;
}

function dealCard(cards, totalCards) {
  while (true) {
    let card = randomCard(DECK);
    if (!totalCards.includes(card)) {
      cards.push(card);
      totalCards.push(card);
      break;
    }
  }
}

function cardValues(cards) {
  return cards.map(cardArr => cardArr[1]);
}

function sumCards(cards) {
  let values = cardValues(cards);

  let numOfA = 0;
  let sum = values.reduce((sum, value) => {
    if (['J', 'Q', 'K'].includes(value)) {
      value = 10;
    } else if (value === 'A') {
      numOfA += 1;
      value = 11;
    }
    return sum + value;
  }, 0);

  while (sum > 21 && numOfA > 0) {
    sum -= 10;
    numOfA -= 1;
  }

  return sum;
}

function busted(cards) {
  return sumCards(cards) > 21;
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
  console.log(`Your total: ${sumCards(playerCards)}.\n`);
}

function displayAllCardsTotal(playerCards, dealerCards) {
  let playerCardNames = getCardNames(playerCards);
  let dealerCardNames = getCardNames(dealerCards);

  console.log(`Dealer has: ${joinCards(dealerCardNames)}.`);
  console.log(`Dealer total: ${sumCards(dealerCards)}.\n`);
  console.log(`You have: ${joinCards(playerCardNames)}.`);
  console.log(`Your total: ${sumCards(playerCards)}.\n`);
}

function displayResult(playerCards, dealerCards) {
  let playerSum = sumCards(playerCards);
  let dealerSum = sumCards(dealerCards);

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

//main loop
while (true) {
  console.clear();
  console.log('-----------It\'s a game of Twenty-One-----------\n');

  let playerCards = [];
  let dealerCards = [];
  let totalCards = [...playerCards, ...dealerCards];

  // initial deal
  dealCard(playerCards, totalCards);
  dealCard(playerCards, totalCards);
  dealCard(dealerCards, totalCards);
  dealCard(dealerCards, totalCards);

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
      dealCard(playerCards, totalCards);
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
  while (sumCards(dealerCards) < 17) {
    prompt('Dealer hits!\n');
    dealCard(dealerCards, totalCards);
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

