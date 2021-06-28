/**
 * 1 2 3 4 6
 * 1 0 1 0 1 
 * 
 * if odd, append '1'
 * if even, append '0' -> finalstr
*/

function stringy(num) {
  let str = '';
  for (let currentNum = 1; currentNum <= num; currentNum += 1) {
    if (currentNum % 2 === 0) {
      str += '0'
    } else {
      str += '1';
    }
  }

  console.log(str);
  return str;
}

// book's method
function stringy1(size) {
  let result = "";
  for (let idx = 0; idx < size; idx += 1) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"