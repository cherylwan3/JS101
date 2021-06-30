/**
 * iterate thru [...str]
 * 
 *    - if even idx, capitalize it
 * - if odd idx, lowercase it 
 * join array
 */

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

function staggeredCase(str) {
  let result = [...str].map((char, idx) => {
    return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  }).join('');

  console.log(result);
  return result;
}