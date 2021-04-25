/**
 * P---------------------------------
 * input: function + string argument
 * output: UTF-16 string value of string argument 
 *        (sum of UTF-16 values of every char)
 * rules:
 * - write a function
 * - function determines & returns UTF-16 string value of string
 *  - UTF-16 string value = sum of the UTF-16 string values of every character in
 *  the string 
 *  - use String.prototype.charCodeAt() to determine UTF-16 value of a character.
 * E------------------------------------
  utf16Value('Four score');         // 984
  utf16Value('Launch School');      // 1251
  utf16Value('a');                  // 97
  utf16Value('');                   // 0

  // The next three lines demonstrate that the code
  // works with non-ASCII characters from the UTF-16
  // character set.
  const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
  utf16Value(OMEGA);                  // 937
  utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
 * A---------------------------------------------
  - write a function named utf16Value
    - the function parameter is called 'string'
    - declare a 'sum' variable 
    - write a for loop: with a idx variable of 0, idx less than string's 
    length, idx increment by 1
      -access each character of the string using the idx and get the UTF-16 charcode 
      of each character
      - append the UTF-16 charcode to sum 
    - log and return the sum variable
 * 
 */

    
function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx +=1) {
    let charCode = string.charCodeAt(indx);
    sum += charCode;
  }

  console.log(sum);
  return sum;
}

// examples

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811