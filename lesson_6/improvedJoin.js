/**
 * P---------------------------
 * input: function joinOr ()
 * output: string
 * -Use this function in the game when prompting the user to mark a square.
 * D------------------------------
 * array
 * ex. [1, 2, 3] 
 * [1, 2] -> arr.slice(0, -2)
 * [3] -> arr[arr.length - 1]
 * A-----------------------------
 * - func joinOr(array, separator, joinWord)
 * - default seperator is ', '
 * - default joinWord is 'or'
 * - If length of array is less than or equal to one, 
 *    - return the array joined into a string
 * -else, 
 *   - slice the portion of array from index of 0 to -1
 *     - join that portion of the array together with the @separator
 *     - name this portion of the array @firstPart
 *   - then get the last element of the array and named it @secondPart
 *      - add the @joinWord in front of @secondPart
 *   - join @firstPart and @secondPart together
 *      - return this string
 * 
*/

// ex
/* console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2" */


/* function joinOr(array, seperator = ', ', joinWord = 'or') {
  switch (array.length) {
    case 0:
    case 1:
      return array.join();
    case 2:
      return `${array[0]} ${joinWord} ${array[1]}`;
    default:
      let firstPart = array.slice(0, -1).join(seperator) + seperator;
      let secondPart = joinWord + ' ' + array[array.length - 1];
     return firstPart + secondPart;
  }
}
*/

// game code
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function joinOr(array, seperator = ', ', joinWord = 'or') {
  switch (array.length) {
    case 0:
    case 1:
      return array.join();
    case 2:
      return `${array[0]} ${joinWord} ${array[1]}`;
    default:
      let firstPart = array.slice(0, -1).join(seperator) + seperator;
      let secondPart = joinWord + ' ' + array[array.length - 1];
     return firstPart + secondPart;
  }
}

function displayBoard(board) {
  console.clear();
  
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`)

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);             
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`); 
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`); 
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square ++) {
    board[square] = INITIAL_MARKER;
  }

  return board;
}
 
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
} 

function playerChoosesSquare(board) {
  let square; 

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
   
    prompt('Sorry, that\'s not a valid choice.');
  }

  board[square] = HUMAN_MARKER ;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt('It\'s a tie!');
  }

  prompt('Would you like to play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thank you for playing Tic Tac Toe!');
