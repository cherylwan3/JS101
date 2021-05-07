/**
 * P-------------------
 * input: func (str)
 * output:
 * rules:
 * - returns that string with a staggered capitalization scheme
 *  - Every other character, starting from the first, should be capitalized 
 *  - and should be followed by a lowercase or non-alphabetic character. 
 *  - Non-alphabetic characters should not be changed, but should be counted 
 *  - as characters for determining when to switch between upper and lower case.
 * D/A----------------------------
 * - iterate through [...str] -> @char , @idx
 *  - if @idx is even -> @idx % 2 === 0 
 *      - capitalize the @char at current @idx
 *      - return @char
 * - join the array together and return str
*/

// ex
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

function staggeredCase(str) {
  return [...str]
    .map((char, idx) => {
      return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    })
    .join('');
}