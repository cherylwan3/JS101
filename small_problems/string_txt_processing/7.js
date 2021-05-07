/**
 * P-------------------
 * input:
 * output:
 * rules:
 * * - ignores non-alphabetic characters when determining
 *  - whether it should uppercase or lowercase each letter.
 * - The non-alphabetic characters should still be included in the return value; 
 *  - they just don't count when toggling the desired case.
 * 
 * D/A----------------------------
 * let count = 0
 * -* - iterate through [...str] -> @char , 
 *  - IF @char is alphabetic, 
 *      -IF @count % 2 === 0, 
 *          - return upperCase @char 
 *      - ELSE 
 *          - return lowerCase @char
 *      count += 1;
 * - ELSE
 *    - return char
 *        
 *    
 * - join the array together and return str
*/

// ex
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);



function staggeredCase(str) {
  let needUpper = true;
  return [...str]
    .map((char) => {
      if (/[a-z]/i.test(char)) {
        char = needUpper ? char.toUpperCase() : char.toLowerCase();
        needUpper = !needUpper;
      }
      return char;
    })
    .join('');
}
