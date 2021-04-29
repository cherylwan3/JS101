// my solution
function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[idx]).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }
  console.log(count);
  return count;
}

function removeNonLetters(word) {
  return word.split('').filter(letter => {
    return isLetter(letter);
  }).join('');
}

function isLetter(char) {
  char = char.toLowerCase();
  return char >= 'a' && char <= 'z';
}



wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {} 