/**
 * P-------------------------
 * input: func (non empty string)
 * output: string (middle char(s) of argument)
 * rules:
 * - returns the middle character(s) of the string. 
 * -If the string has an odd length, you should return exactly one character.
 *- If the string has an even length, you should return exactly two characters
 * 
 * D------------------------
 * string = 'Fa'
 * idx = 0, 1
 * middle = 2/2 = 1
 * 
 * string = 'Fate'
 * idx = 0, 1, 2, 3
 * middle = 4/2 -> 2
 * 
 * string = 'Fates'
 * idx = 0, 1, 2, 3, 4 
 * middle = 5/2 -> 2.5
 *
 * /A------------------------
 * 
 * - declare @middle variable and set it to [string.length / 2]
 * - if string.length % 2 equals zero, 
 *   - return substring of @string from middle - 1 to middle
 * - else
 *    - set @middle to Math.floor(middle)
 *    - return string[middle]
 
*/

function centerOf(string) {
  let middle = Math.ceil(string.length / 2 - 1) ;

  let result = string.length % 2 === 0 
              ? string.slice(middle, middle + 2)
              : string[middle];
  console.log(result);
  return result;
}



centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un" 
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"