/**
 * in: string
 * out: object
 * E---
 * str = '1 22 22 333 four four four'
 * 
 * object = {
 * '1': 1
 * '2': 2
 * '3': 1
 * '4': 4
 * }
 * 
 * A-----------
 * - declare an @obj
 * split str into an array of words -> @arrWords
 * iterate over @arrWords
 *  - get length of current @word
 *  - if @obj [ @length ] 
 *    - update @obj [ @length ] + 1
 * - else @obj [ @length ] = 1
 * 
 * return object
 * 
*/


function wordSizes(str) {
  let obj = {};

  let arrWords = str.split(' ');
  for (let idx = 0; idx < arrWords.length; idx += 1) {
    let length = arrWords[idx].length;
    if (length === 0) continue;
    
    if (obj.hasOwnProperty(length)) {
      obj[length] += 1;
    } else {
      obj[length] = 1;
    } 
  }
  
  return obj;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}