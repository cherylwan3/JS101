//Non-even substrings
//  https://www.codewars.com/kata/59da47fa27ee00a8b90000b4
/**
 * P-----
 * input: string (integers)
 * return: number (count of odd substrings)
 * 
 * E-------
 * str.slice(0, str.length)
 * A-------------
 * declare a return array and set it to empty array
 * outerloop: iterate over string, idx 0 to string's length - 1
 *  innerloop: iterate from idx + 1 to string's length
 *    - change the string to a number
 *    - if the number is odd, append it to return array
 * return the return array's length
*/

function solve(strNum) {
  let returnArr = [];
  for (let idx1 = 0; idx1 < strNum.length; idx1 += 1) {
    for (let idx2 = idx1 + 1; idx2 <= strNum.length; idx2 += 1) {
      let num = Number(strNum.slice(idx1, idx2));
      if (num % 2 === 1) returnArr.push(num);
    }
  }

  console.log(returnArr.length);
  return returnArr.length;
}

solve("1341"); //7
solve("1357"); //10)
solve("13471"); //,12);
solve("134721"); //,13);
solve("1347231"); //,20);
solve("13472315"); //,28);