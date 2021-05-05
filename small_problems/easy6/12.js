/**
 * P-------------------------
 * input: func (string)
 * output: boolean
 * rules:
 * -returns true if all parentheses in the string are properly balanced, false otherwise. 
 * - to be properly balanced, parentheses must occur in matching '(' and ')' pairs.
 * D/A------------------------
 * - declare func
 * - split the string into an array by ''
 * - 
 * - filter @stringArray to another @parenArr containing only '(' and ')'
 * - filter @parenArr so it contains only '(' -> @openArr
 * - filter @parenArr so it contains only ')' -> @closeArr
 * -  IF @parenArr doens't end with '(' && @openArr and @closeArr 's lenghs are equal, 
 *        - return true
 * - ELSE
 *    return false
 *    
 *    
*/

// shorter method
function isBalanced(string) {
  let parenString = string.split('').filter(elem => {
    return (elem === '(' || elem === ')');
  }).join('');
  
  while (parenString.includes('()')) {
    parenString = parenString.split('()').join('');
  }

  return parenString.length === 0;
}

// book method
function isBalanced1(string) {
  let parens = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }

  return parens === 0;
}


// should all log true 
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
//  snode ()) (()

