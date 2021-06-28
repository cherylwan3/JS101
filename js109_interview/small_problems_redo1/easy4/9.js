/**
 * arrWords
 * for each word ->
 *  => iterate over word ->
 *    - if non-letter char, remove it 
 */

function wordSizes(str) {
  let obj = {};
  let arrWords = str.split(' ');

  for (let idx = 0; idx < arrWords.length; idx += 1) {
    let word = '';
    let wordArr = arrWords[idx].split('');

    for (let idx = 0; idx < wordArr.length; idx += 1) {
      let char = wordArr[idx].toLowerCase();
      if (char >= 'a' && char <= 'z') word += char;
    }
    let length = word.length;
    if (length === 0) continue;
    
    obj[length] = obj[length] || 0; // short circuting
    obj[length] += 1;
  }
  
  console.log(obj);
  return obj;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}