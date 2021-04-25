/**
 * P ----------------------------------
 * input: function named xor, 2 arguments: 
 * output: true if one of its arguments is truthy, false otherwise
 * rules:
 * - boolean result instead of truthy/falsey
 * A ----------------------------------
 * - function xor (value1, value2)
 * - IF 'value1' OR 'value2' is equal(==) to true, return 'true', 
 *  - ELSE return false
 */

/* function xor(value1, value2) {
  return (value1 >= true || value2 >= true) ? true : false;
} */

// books solution 1
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

// book solution 2
function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

// examples

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);