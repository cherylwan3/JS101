/**
 * P-------------------
 * input: func(str)
 * output: str
 * rules:
 * - string with every lowercase letter changed to uppercase 
 * - and every uppercase letter changed to lowercase.
 * - Leave all other characters unchanged.
 * D/A----------------------------
 * - convert @str to @strArray
 * - start loop: iterate over every @char of @strArray
 *  - if @char is a lowerCase letter, convert @char to Uppercase
 *  - else, convert @char to lowerCase 
 *  - return char
 * - end loop
 * - join @strArray and return it 
 * 
*/

// ex
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

function swapCase(str) {
  return [...str]
    .map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
    .join('');
}