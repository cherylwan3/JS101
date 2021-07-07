console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

function isBalanced(str) {
  let sum = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === '(') sum += 1;
    if (str[idx] === ')') sum -= 1;

    if (sum < 0) return false;
  }

  return sum === 0;
}
/**
 * iterate through the string
 * have a sum of 0
 * if char === '(', sum += 1
 * else if char === ') sum -= 1
 * 
 * if sum < 0 return false
 * 
 * if sum === 0 return true
 * 
 * return false default
 */
