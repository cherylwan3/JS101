// Anagram difference
// https://www.codewars.com/kata/5b1b27c8f60e99a467000041

/**
 * func (word, word)
 * output: total number of letters removed in word1 and word 2
 * - anagram: words have exact same letters
 * 
 * D--
 * [1,2,3]
 * [1,2]
 * 
 * A--
 * - turn word1 and 2 into arrays
 * - iterate over the word1 
 *    if both arr1 and arr2 include current char,
 *    remove it in both arr1 and arr2
 * - return word1Arr.length + word2Arr.length
*/

function anagramDifference(word1, word2) {
  let arr1 = [...word1];
  let arr2 = [...word2];

  for (let idx = 0; idx < word1.length; idx += 1) {
    let char = word1[idx];
    if (arr1.includes(char) && arr2.includes(char)) {
      arr1.splice(arr1.indexOf(char), 1);
      arr2.splice(arr2.indexOf(char), 1);
    }
  }

  return arr1.length + arr2.length;
}


console.log(anagramDifference("","")); //,0);
console.log(anagramDifference("a","")); //,1);
console.log(anagramDifference("", "a")); //,1); 
console.log(anagramDifference("ab","cd")); //,4);
console.log(anagramDifference("codewars","hackerrank")); //,10);
console.log(anagramDifference("ab","a")); //,1);
console.log(anagramDifference("aab","a")); //,2);
console.log(anagramDifference("a","aab")); //,2);
