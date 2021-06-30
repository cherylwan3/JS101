/**
 * iterate thru [...str]
 * check if alphabetical,
 *    - if cap === false, capitalize it
 *        - change cap to true
 *    - if cap === true, lowercase it 
 *        - change cap to false
 * join array
 */



function staggeredCase(str) {
  let needCap = true;
  let result = [...str].map(char => {
    let testChar = char.toLowerCase();
    if (testChar >= 'a' && testChar <= 'z') {
      char = needCap === true ? char.toUpperCase() : char.toLowerCase();
      needCap = !needCap;
    }
    return char;
  }).join('');

  console.log(result);
  return result;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
