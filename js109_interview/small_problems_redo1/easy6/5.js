function negative1(num) {
  let result = num < 0 ? num : num *= -1;

  console.log(result);
  return result;
}

function negative(num) {
  let sign = Math.sign(num);
  let result = (sign === -1) ? num : num *= -1;

  console.log(result);
  return result;
}

// book method
function negative1(number) {
  return Math.abs(number) * -1;
}

negative1(5);     // -5
negative1(-3);    // -3
negative1(0);     // -0