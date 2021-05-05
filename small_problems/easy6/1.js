/**
 * P-------------------------
 * input: function (string)
 * output: string
 * rules:
 * - function doubles every character in the string
 * - returns the result as a new string.
 * 
 * D/A------------------------
 * - split the string at ('') to an array
 * - set @resultArr to [];
 * - iterate over @stringArr from @idx 0 to string.length 
 *    - push current element + current element to @resultArr
 * - return resultArr. join back to string with ('')
 */


// 
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

function repeater(string) {
  let result = string.split('').map(char => char.repeat(2)).join('');
  
  console.log(result);
  return result;
}