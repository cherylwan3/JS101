/**
 * P----------------------
 * input: function (string)
 * output: object
 * rules:
 * - function takes string of 0+ words seperated by space
 * - returns object: number of words of different size
 * 
 * E/D -----------------------------
 * object {wordLength: numberOfWords}
 *
 * A-------------------------------------
 * - set $stringArr to string split by empty space
 * - set $wordLengthArr to empty array
 * - find length of each word in $stringArr, and push it to $wordLengthArr
 * 
 * - set $object to empty object
 * - SET idx to 0
 * - WHILE idx < wordLengthArr's length:
 *  -for every $wordLength (element) in $wordLengthArr, add it to $object as a key 
 *    - if $object.keys doesn't include current $wordLength, 
 *        - set $object's key to $wordLength, value is 0;
 *  - set  $object's[$wordLength] to $object's[$wordLength] plus 1
 * - increment idx by 1
 * 
 * return $object 
*/


/* // my solution
function wordSizes(string){
  let stringArray = string.trim().split(' ').map(word => word.length);
  let object = {};

  if (stringArray.includes(0)) return object;
  
  stringArray.forEach(wordLength => {
    if (!object[wordLength]) {
      object[wordLength] = 0;
    } 
    object[wordLength] += 1;
  }) 

  console.log(object); 
  return object;
} */

// book's method
function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }
  console.log(count);
  return count;
}

// Ex
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}