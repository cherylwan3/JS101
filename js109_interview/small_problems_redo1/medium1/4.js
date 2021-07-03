/* eslint-disable radix */
/* eslint-disable max-lines-per-function */
/**
 * register = total of all operations
 * stack: values to use with register
*/
 minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands) 

/**
 * set register to 0 
 * convert the commandStr to commandArr
 * iterate through commandArr, for each command
 *   - whatever command it is,
 *     - implement it on the register value

 */
function minilang(commandStr) {
  let register = 0;
  let stack = [];

  let commandArr = commandStr.split(' ');
  commandArr.forEach(command => {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = parseInt(register / stack.pop());
        break;
      case 'REMAINDER':
        register = parseInt(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(command);
    }
  });

  return register;
}