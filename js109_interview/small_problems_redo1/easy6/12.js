console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);


function isBalanced(str) {
  let parens = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === '(') parens += 1;
    if (str[idx] === ')') parens -= 1;

    if (parens < 0) return false;
  }
  return parens === 0;
}

/**
 * E--------
 * let parens = 0;
 * iterate over str
 *  if char equals leftWing, parens += 1
 *  else if char equals righWing, parens -= 1;
 * 
 * if parens < 0 return false
*/

