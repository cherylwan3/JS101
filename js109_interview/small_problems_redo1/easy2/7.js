//xor
// 5, 0 -> true 
// false, true -> true
// 1, 1 -> false bc both true
// true, true -> false

// only one truthy operand

//A--
// if num1 is truthy && num2 is false
// or vice versa


console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


function xor(num1, num2) {
  if (num1 && !num2) {
    return true;
  } else if (!num1 && num2) {
    return true;
  }

  return false;
}