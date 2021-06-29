/**
 * convert num to string
 * split string to array 
 * convert each element in array to number
 */

function digitList(num) {
  let result = ([...String(num)]).map(char => Number(char));
  
  console.log(result);
  return result;
}


digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

