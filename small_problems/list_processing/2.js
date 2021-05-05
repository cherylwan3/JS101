/**
 * P---------------------
 * input: func(array of integers btw 0 and 19)
 * output: array
 * rules:
 * - returns an array of those integers sorted based on:
 *  the English word for each number:
  zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, 
  twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
 * D/A-------------------
 * - declare func
 * - declare an array called @ENGLISH_WORDS containing all english words
 * - for every element of @numArray , match it with the corresponding
 * element in @ENGLISH_WORDS
 *    - iterate over @numArray from @idx of 0 to @numArray .length, 
 *    - use current element as idx in @ENGLISH_WORDS -> @ENGLISH_WORDS[elem]
 *     - compare number in @ENGLISH_WORDS at current element to  
 *        number in @ENGLISH_WORDS at next element
 *    - append result to @wordArray
 *    - 
 * - sort @wordArray in ascending order 
 * - return @wordArray
 * [...wordArray] = [...englishWords[]]
 * 
*/
const ENGLISH_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 
                       'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
                       'thirteen', 'fourteen', 'fifteen', 'sixteen', 
                       'seventeen', 'eighteen', 'nineteen']; 


function alphabeticNumberSort(array) {
  let result = [...array].sort((num1, num2) => {
    if (ENGLISH_WORDS[num1] < ENGLISH_WORDS[num2]) {
      return -1;
    } else if (ENGLISH_WORDS[num1] > ENGLISH_WORDS[num2]) {
      return 1;
    } else {
      return 0;
    }
  });

  //console.log(result);
  return result;
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


