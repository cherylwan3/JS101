/**
 * P---------------------
 * input: func (integer)
 * output: integer
 * rules:
 * - featured number : 
   1) odd number that is a multiple of 7
   2) with all of its digits occurring exactly once each
  - EX: 
    - featured num: 49
    - not featured: 98(not odd), 97(not multiple of 7), 133(digit 3 appears 2x)
  - function returns: 
    1) next featured number greater than the integer
    2) issue an error message if there is no next featured number.
  - largest possible featured number is 9876543201
 * D------------------
  - number, 
  - String(number)
  - array of String(num) 

 *  
 * A-----------------
 * -let @featureNum = num + 1
 * - start outer loop from @featureNum to <= 9876543201
 *    - divide @featureNum by 7, if remainder is 0 && odd number
 *      - start inner loop: convert @featureNum to String, then iterate over array
 *        - set @arr and set it [];
 *        - set @digitOnce to true;
 *          - if @arr doesn't include @elem , push @elem to @arr,
 *          - else, set @digitOnce to false
 *      - end inner loop     
 *         - if @digitOnce is true, return @featureNum
 * - end outer loop
 * 
*/

/* // my original -> too slow
function featured(num) {
  for (let featureNum = num + 1; featureNum <= 9876543201; featureNum += 1) {   
    if (
      allUnique(featureNum) && 
      featureNum % 7 === 0 && 
      featureNum % 2 === 1
    ) {
      return featureNum;
    } 
  }
  return 'There is no possible number that fulfills those requirements.';
}

function allUnique(featureNum){
  let digitArr = [];

  [...String(featureNum)].forEach(digit => {
    if (!digitArr.includes(digit)) digitArr.push(digit);
  })
 
  if (digitArr.length === String(featureNum).length) return true;
  return false;
} */




// book
/* function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
} */

// my revised like the book
function featured(num) {
  const MAX_FEATURED = 9876543201;
  let featureNum = toOddMultipleOf7(num);
  
  do {
    if (allUnique(featureNum)) return featureNum;
    featureNum = toOddMultipleOf7(featureNum + 7);
  } while (featureNum <= MAX_FEATURED);
  
  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(num) {
  do {
    num += 1;
  } while (num % 7 !== 0 || num % 2 === 0);

  return num;
}

function allUnique(featureNum) {
  let digitObj = {};
  let isUnique = true;

  [...String(featureNum)].forEach(digit => {
    if (digitObj[digit]) {
      isUnique = false;
    }

    digitObj[digit] = true;
  });

  return isUnique; 
} 

// E: test cases
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."