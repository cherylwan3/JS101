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

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function randomCard(deck) {
  let randomIndex = Math.floor((Math.random() * deck.length));
  let randomCard = deck[randomIndex];
  return randomCard;
}

function addCard(cards, totalCards) {
  while (true) {
    let card = randomCard(DECK);
    if (!totalCards.includes(card)) {
      cards.push(card);
      totalCards.push(card);
      break;
    }
  }
}

function dealCard(playerCards, dealerCards, totalCards) {
  shuffle(DECK);
  addCard(playerCards, totalCards);
  addCard(playerCards, totalCards);
  addCard(dealerCards, totalCards);
  addCard(dealerCards, totalCards);
}

function cardValues(cards) {
  return cards.map(cardArr => cardArr[1]);
}

function sumCards(cards) {
  let values = cardValues(cards);

  let numOfA = 0;
  let sum = values.reduce((sum, value) => {
    switch (value) {
      case 'J':
      case 'Q':
      case 'K':
        value = 10;
        break;
      case 'A':
        numOfA += 1;
        value = 11;
        break;
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

function valueToName(cardValues) {
  return cardValues.map(value => {
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

function displayPlayerCards(playerCards, dealerCards) {
  let playerValues = cardValues(playerCards);
  let playerCardNames = valueToName(playerValues);
  
  let dealerValues = cardValues(dealerCards);
  let dealerCardNames = valueToName(dealerValues);
  let numDealerCardMinusOne = dealerCardNames.length - 1;
  
  console.clear();
  console.log(`Dealer has: ${dealerCardNames[0]} and ${numDealerCardMinusOne} unknown card(s).`);
  console.log(`You have: ${joinCards(playerCardNames)}.\n`)
}

function displayAllCards(playerCards, dealerCards) {
  let playerValues = cardValues(playerCards);
  let playerCardNames = valueToName(playerValues);
  
  let dealerValues = cardValues(dealerCards);
  let dealerCardNames = valueToName(dealerValues);

  console.clear();
  console.log(`Dealer has: ${joinCards(dealerCardNames)}.`);
  console.log(`You have: ${joinCards(playerCardNames)}.\n`)
}

while (true) {
  while (true) {
    let playerCards = [];
    let dealerCards = [];
    let totalCards = [...playerCards, ...dealerCards];

    dealCard(playerCards, dealerCards, totalCards);
    
    // player turn 
    while (true) {
      displayPlayerCards(playerCards, dealerCards);
      prompt('hit or stay?');
      let answer = readline.question().toLowerCase()[0];
      if (answer === 's') {
        break;
      } else if (answer === 'h') {
        addCard(playerCards, totalCards);
      } else {
        prompt('Please enter a valid answer.');
      }
      if (busted(playerCards)) break;
    }

    if (busted(playerCards)) {
      displayAllCards(playerCards, dealerCards);
      console.log('\n******** You busted! Dealer wins. *******\n')
      break;
    } else {
      console.log('\nYou chose to stay\n!');
    }

    // dealer turn
    while (sumCards(dealerCards) < 17) {
      addCard(dealerCards, totalCards);
    }

    if (busted(dealerCards)) {
      displayAllCards(playerCards, dealerCards);
      console.log('\n******** Dealer Busted. You win!*********\n');
      break;
    }

    // comparing cards
    displayAllCards(playerCards, dealerCards);
    prompt(`Your cards have a total value of ${sumCards(playerCards)}.`);
    prompt(`The dealer has a total value of ${sumCards(dealerCards)}.`);
    
    if (sumCards(playerCards) > sumCards(dealerCards)) {
      console.log('\n****** You win! ******\n');
      break;
    } else if (sumCards(dealerCards) > sumCards(playerCards)) {
      console.log('\n****** The dealer wins! ******\n');
      break;
    } else {
      console.log('\n****** It\'s a tie! ******\n');
      break;
    }
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];

  while (answer !== 'y' && answer !== 'n') {
    prompt('please enter y or no');
    answer = readline.question().toLowerCase()[0];
  }

  if (answer === 'n') break;
} 





