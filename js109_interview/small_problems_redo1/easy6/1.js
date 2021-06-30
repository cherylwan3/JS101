/**
 * iterate over str
 * append char repeated twice to new string
*/

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

function repeater1(str) {
  let newStr = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    newStr += (str[idx] + str[idx]);
  }

  console.log(newStr);
  return newStr;
}

function repeater(str) {
  let newStr = [...str].map(char => char.repeat(2)).join('');

  console.log(newStr);
  return newStr;
}