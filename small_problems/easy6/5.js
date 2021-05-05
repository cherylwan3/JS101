/**
 * P-------------------------
 * input: func (num)
 * output: num
 * rules:
 * -return negative number
 * 
 * D/A------------------------
 */

function negative(num) {
  return String(Math.sign(num))[0] === '-' ? num : num * -1;
}

// book method
function negative1(number) {
  return Math.abs(number) * -1;
}

// ex
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0