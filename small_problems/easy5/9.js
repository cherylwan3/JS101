/**
 * P----------------------------
 * input: function (array of words)
 * output: word alongside number of occurences
 * rules:
 * - words are case sensitive 
 * E-------------------------
 * D/A-----------------------
 * 1. declare function @countOccurences with paramter @wordArr
 * 2. create a variable @wordObj , set it to empty object {}
 * 3. iterate over @wordArr from @idx '0' to @wordArr 's length 
 *    - SET @word to the element in @wordArr
 *    - IF @wordObject doesn't include current @word 
 *        - set @wordObject[@word] to '0'
 *    - ELSE
 *        - set @wordObject[@word] to @wordObject[@word] + 1 
 *    - end iteration
 * 4. iterate over @wordObject (for let prop in wordObject) 
 *    - log the property alongside the value 
 *    - end iteration
  5. return undefined
*/

// example
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
/** 
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/


function countOccurrences(wordArr) {
  let wordObj = {};

  wordArr.forEach(word => {
    wordObj[word] = wordObj[word] || 0;
    wordObj[word] += 1;
  }) 
  
  logOccurrences(wordObj);
  return undefined;
}

function logOccurrences(wordObj) {
  for (let word in wordObj) {
    console.log(`${word}: ${wordObj[word]}`);
  }
  return undefined;
}


// words are case insensitive,
// e.g. "suv" and "SUV" represent the same vehicle type.

let vehicles1 = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences1(vehicles1);


function countOccurrences1(wordArr) {
  let wordObj = {};

  wordArr.forEach(word => {
    word = word.toLowerCase();
    wordObj[word] = wordObj[word] || 0;
    wordObj[word] += 1;
  }) 
  
  logOccurrences(wordObj);
  return undefined;
}

function logOccurrences1(wordObj) {
  for (let word in wordObj) {
    console.log(`${word}: ${wordObj[word]}`);
  }
  return undefined;
}

