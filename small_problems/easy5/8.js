/**
 * P----------------------------
 * input: function (number)
 * output: array
 * rules:
 * - function takes one positive integer
 * - returns an array containing list of digits in the number
 * E-------------------------
 * D/A-----------------------
 * 1. declare function @digitList with @num parameter 
 * 2. transform @number to string and set it to @stringNum
 * 3. declare a variable @numArr to empty array
 * 3. start a loop to iterate over @stringNum from @idx 0 to @stringNum.length - 1
 *      - push character at current @idx of stringNum to @numArr
 *    -end loop
 * 4. return numArr
*/

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

// normal loop
function digitList1(num) {
  let stringNum = String(num);
  let numArr = [];
  
  for (let idx = 0; idx < stringNum.length; idx +=1 ) {
    numArr.push(Number(stringNum[idx]));
  }

  console.log(numArr);
  return numArr;
}

// using map
function digitList2(num) {
  let stringNumArr = String(num).split('');
  let numArr = stringNumArr.map(numElem => parseInt(numElem));
  
  console.log(numArr);
  return numArr;
}

// using spread operator and map
function digitList(num) {
  let numArr = [...String(num)].map(numElem => parseInt(numElem));
  
  console.log(numArr);
  return numArr;
}