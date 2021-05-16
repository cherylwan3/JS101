/**
 * P-------------------------
 * input:
 * output: 
 * - when immediate threat exists, computer defend 3rd square
 * - immediate threat: 
 *  - when human player has 2 squares in a row
 *  - 3rd square unoccupied
 * - if no immediate threat, computer picks random square
 * D-----------------------
 *  [1, 2], [2, 3],[4, 5], [5, 6], [7, 8], [8, 9], // rows
    [1, 4], [2, 5], [3, 6] [4, 7], [5, 8], [6, 9], // columns
    [1, 5], [3, 5], [5, 9], [5, 7]           // diagonals[5, 9], [5, 7] 
 * A----------------------
 * - function computerChoosesSquare(board)
 * - if isImmediateThreat(board) === true
 *    - board[defenseMove(board)] = COMPUTER_MARKER;
 * - else, 
 *    - // random index code
 * ======================================
 * function isImmediateThreat(board) 
 *  - return !! defenseSquare
 * ====================================
 * - function defenseMove(board)
 *  - declare WINNING_LINES
 *  - iterate over threatCombo.length with @twoSquare
 *     - set [sq1, sq2] to threatCombo[@twoSquare]
 *      - if (board[sq1] is equal to HUMAN_MARKER && 
 *          board[sq2] === HUMAN_MARKER &&
 *          board[sq3] === INITIAL_MARKER)
 *             - return board[sq3]
 *      ELSE IF 
 *          (board[sq2] is equal to HUMAN_MARKER && 
 *          board[sq3] === HUMAN_MARKER &&
 *          board[sq1] === INITIAL_MARKER)
 *          - return board[sq1]
 *  - return null
*/

const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
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
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
   
    prompt('Sorry, that\'s not a valid choice.');
  }

  board[square] = HUMAN_MARKER ;
}

function computerChoosesSquare(board) {
  if (immediateThreat(board)) {
    board[defenseMove(board)] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

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

function immediateThreat(board) {
  return !!defenseMove(board);
}

function defenseMove(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === INITIAL_MARKER
    ) {
      return sq3;
    } else if (
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER &&
        board[sq1] === INITIAL_MARKER
    ) {
      return sq1;
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