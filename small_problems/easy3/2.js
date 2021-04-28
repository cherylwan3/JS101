/**
 * P---------------------
 * input: function, argument: string 
 * output: console.log
 * rules:
 * - function with argument: short line of text
 * - outputs it to console within a box 
 * 
 * E---------------------------- 
  logInBox('To boldly go where no one has gone before.');
  outputs: 
  +--------------------------------------------+
  |                                            |
  | To boldly go where no one has gone before. |
  |                                            |
  +--------------------------------------------+

  logInBox('');
  +--+
  |  |
  |  |
  |  |
  +--+

 * A----------------------------------------------
  - function named logInBox(text)
  - create a 'plus' string with '+'
  - create a 'dash' string of '-'
  - create a default 'topBotBox' string with 2 crosses and 2 dashes
  - create a default 'middleBox' string with one vertical dash 2 empty string , one vertical dash
  
  - if text's length is 0, 
    - log the 'topBotBox'
    - log 'middleDash' 3 times
    - log the 'topBotBox' again
  - else if text's length > 0,
    - reassign 'topBotBox' to : 'plus', 'dash' repeated for text's length + 2, 'plus'
      - log 'topBotBox'
    - reasign 'middleDash' to one vertical dash, empty string repeated for text's length + 2
      - log 'middleDash'
    - declare 'middleDashText' to: 'dash', '', 'text', '', 'dash'
      - log 'middleDashText'
    - log 'topBotBox'
*/

// my method 
function logInBox(text) {
  let topBot = `+${"-".repeat(text.length + 2)}+`;
  let middleDash = `|${" ".repeat(text.length + 2)}|`;
  let middleDashText = `| ${text} |`;
   
  console.log(`${topBot}\n${middleDash}\n${middleDashText}\n${middleDash}\n${topBot}`);
}


// book's method
function logInBox1(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

// ex
logInBox('');
logInBox('To boldly go where no one has gone before.');