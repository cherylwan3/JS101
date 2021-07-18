// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
// Highest Scoring Word

/**
 * func (str of words)
 * output: str -  word - highest scoring word
 * 
 * letterArr 
 * ['na', 'a', 'b', 'c','d','e','f','g','h','i',
 * 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 * 
 * let wordObj = {word: '', sum: 0}
 * - split the str into wordArr, iterate over wordArr, for each word -> 
 *  - split each word into characters -> charArr
 *  - iterate over charArr using map ->
 *    - for each char, return the index in letterArr
 *  - sum the charArr using reduce
 *  - if sum > wordObj.sum, 
 *    then reassign wordObj.sum to sum
 *    reassign wordObj.word to word
*/

function high1(str) {
  let letters = '0abcdefghijklmnopqrstuvwxyz';
  let wordObj = {word: '', sum: 0};

  let wordArr = str.split(' ');
  wordArr.forEach(word => {
    let sum = [...word]
      .map(letter => letters.indexOf(letter))
      .reduce((total, num) => total + num, 0);
    if (sum > wordObj.sum) {
      wordObj.sum = sum;
      wordObj.word = word;
    }
  });

  return wordObj.word;
}

function high(str) {
  let letters = '0abcdefghijklmnopqrstuvwxyz';

  let wordArr = str.split(' ');
  let sumArr = wordArr.map(word => {
    let sum = [...word]
      .map(letter => letters.indexOf(letter))
      .reduce((total, num) => total + num, 0);
    return sum;
  });

  let largestSum = Math.max(...sumArr);
  let maxIdx = sumArr.indexOf(largestSum);

  return wordArr[maxIdx];
}



console.log(high('man i need a taxi up to ubud')); // 'taxi'));
console.log(high('what time are we climbing up the volcano')); // 'volcano')); 
console.log(high('take me to semynak')); // 'semynak'));
console.log(high('aa b')); // 'aa'));
console.log(high('b aa')); // 'b'));
console.log(high('bb d')); // 'bb'));
console.log(high('d bb')); // 'd'));
console.log(high('aaa b')); // 'aaa'));