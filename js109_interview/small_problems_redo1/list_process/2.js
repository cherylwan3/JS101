/**
 * iterate over arrayDigits with map => 
 *  - get the corresponding WORD in WORD array for the digit 
 *  - return the  WORD's length into the array
 * 
 * return array
 */

const WORD = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
  'seventeen', 'eighteen', 'nineteen' ];

function alphabeticNumberSort(arrayDigits) {
  let result = arrayDigits.sort((num1, num2) => {
    if (WORD[num1] < WORD[num2]) {
      return -1;
    } else if (WORD[num1] > WORD[num2]) {
      return 1;
    } else {
      return 0;
    }
  });


  console.log(result);
  return result;
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]