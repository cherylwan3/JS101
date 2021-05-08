/**
 * P---------------------
 * input: language function (program)
 * output:
 * rules:
 * - stack: list of values
 *  -register: value seperate from stack 
 * - operation removes most recent pushed value from stack
 *    - operates on popped value and register value
 *    - stores result back to register
 * - all operation are integer functions
 * - language function (programs - string argument)
 *  - all arguments are valid programs: 
 *    they will not do anything like trying to pop a non-existent value        
 *      from the stack, and they won't contain any unknown tokens.
 * - initialization: 
 *    @stack = [];
 *    @register = 0;
 * 
 * - write function that implements language with following 
 *  operations/commands/tokens:
 *  @n - place value @n in the @register , dont modify @stack
 * @PUSH - push @register value onto @stack 
 * @ADD - Pop a value @stack and add it to @register, 
 *      storing the result in @register
 * @SUB - Pop a value from @stack and subtract it from @register value, 
 *      storing the result in @register
 * @MULT - Pop a value from @stack and multiply it by the @register value, 
 *      storing the result in @register
 * @DIV - Pop a value from @stack and divide the register value by the 
 *    popped stack value, storing the integer result back in @register
 * @REMAINDER - Pop a value from the stack and divide the @register value by 
 *  the popped stack value, storing the integer remainder of the division 
 *  back in the @register
 * @POP - Remove the topmost item from the stack and place it in @register
 * @PRINT - Print the @register value
 * D------------------
 * -
 * A-----------------
 * - func @miniLang ( @programs )
 * - initialize the @stack and @register
 * - split the @programs string by (' ') -> @programStr
 * - start loop to iterate over @programStr 
 *    - current @programElem is the @command 
 *  - end loop
 * - write out what the each @command does 
 *    - whichever @command it matches, carry out the command task
 * 
*/

function minilang(programs) {
  let stack = [];
  let register = 0;
  programs.split(' ').forEach(command => {
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

// E: test cases
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


minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');  // [4, 4] register = 7
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands) 